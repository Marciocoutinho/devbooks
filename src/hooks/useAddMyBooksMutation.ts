import { useMutation, useQueryClient } from '@tanstack/react-query'

import { BookState } from '../models/BookState'
import { MyBook } from '../models/MyBook'
import { Book } from '../models/Book'

import { api } from '../services/api'

interface AddToMyBooksMutationArgs {
  bookId: string
  bookState: BookState
}

export async function addToMyBooks({
  bookState,
  bookId
}: AddToMyBooksMutationArgs): Promise<MyBook> {
  const { data } = await api.post<MyBook>('/books/my-books', {
    bookId,
    bookState
  })
  return data
}

export function useAddToMyBooksMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: AddToMyBooksMutationArgs) =>
      await addToMyBooks(data),
    onMutate: async (data) => {
      const bookDetailKey = ['book-details', data.bookId]

      await queryClient.cancelQueries({
        queryKey: bookDetailKey
      })

      const previousBookDetail = queryClient.getQueryData(bookDetailKey)

      queryClient.setQueryData<Book>(bookDetailKey, (oldData) => {
        return oldData
          ? {
              ...oldData,
              bookState: data.bookState
            }
          : oldData
      })

      return { previousBookDetail, data }
    },
    onError: (error, data, context) => {
      const bookDetailKey = ['book-details', context?.data.bookId]

      queryClient.setQueryData(bookDetailKey, context?.previousBookDetail)
    },
    onSettled: (data) => {
      const bookDetailKey = ['book-details', data?.bookId]

      queryClient.invalidateQueries({ queryKey: bookDetailKey })
    }
  })
}
