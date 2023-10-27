import { useParams } from 'react-router-dom'
import reactHtmlParser from 'react-html-parser'

import { useBookDetailsQuery } from '../../hooks/useBookDetails'
import { useThumbnail } from '../../hooks/useThumbnail'

import { MainLayout } from '../../layouts/MainLayout'

import { ReactComponent as StarIcon } from '../../icons/star.svg'

import {
  BackgroundThumbnail,
  ButtonsContainer,
  Container,
  ContentContainer,
  Description,
  DescriptionContainer,
  DetailColumn,
  DetailsContainer,
  PublisherContainer,
  Thumbnail,
  ThumbnailContainer
} from './BookDetail.styles'
import { BookDetailLoader } from './BookDetailLoader'
import { MyBookButton } from './MyBookButton'
import { BookState } from '../../models/BookState'
import { useAddToMyBooksMutation } from '../../hooks/useAddMyBooksMutation'

export function BookDetail() {
  const params = useParams()
  const addToMyBooksMutation = useAddToMyBooksMutation()

  const { data, isLoading } = useBookDetailsQuery({
    bookId: params.bookId as string
  })

  const thumbnailSrc = useThumbnail({ bookId: data?.id as string })

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      month: 'short',
      year: 'numeric'
    }).format(date)
  }

  //Higher order function
  const handleAddToMyBookList = (bookState: BookState) => async () => {
    if (params.bookId) {
      addToMyBooksMutation.mutateAsync({
        bookId: params.bookId,
        bookState
      })
    }
  }

  return (
    <MainLayout>
      {data && !isLoading ? (
        <Container>
          <ContentContainer>
            <h1>{data.volumeInfo.title}</h1>

            <h2>{data.volumeInfo.authors?.[0]}</h2>

            <PublisherContainer>
              {data && (
                <span>
                  {formatDate(new Date(data.volumeInfo.publishedDate))}
                </span>
              )}{' '}
              · <span>{data.volumeInfo.publisher}</span>
            </PublisherContainer>

            <DetailsContainer>
              <DetailColumn>
                <strong>
                  {data.volumeInfo.averageRating
                    ? data.volumeInfo.averageRating
                    : 4}

                  <StarIcon />
                </strong>
                <span>Avaliações</span>
              </DetailColumn>

              <DetailColumn>
                <strong>{data.volumeInfo.pageCount}</strong>
                <span>Páginas</span>
              </DetailColumn>
            </DetailsContainer>

            <ButtonsContainer>
              <MyBookButton
                isSelected={data.bookState === 'IS_READING'}
                onAddBookList={handleAddToMyBookList('IS_READING')}
                disabled={false}
              >
                Estou Lendo
              </MyBookButton>
              <MyBookButton
                isSelected={data.bookState === 'WANTS_TO_READ'}
                onAddBookList={handleAddToMyBookList('WANTS_TO_READ')}
                disabled={false}
              >
                Quero Ler
              </MyBookButton>
              <MyBookButton
                isSelected={data.bookState === 'READ'}
                onAddBookList={handleAddToMyBookList('READ')}
                disabled={false}
              >
                Já Li
              </MyBookButton>
            </ButtonsContainer>

            <DescriptionContainer>
              <h3>Sobre este livro</h3>

              <Description>
                {reactHtmlParser(data.volumeInfo.description)}
              </Description>
            </DescriptionContainer>
          </ContentContainer>

          <ThumbnailContainer>
            <Thumbnail src={thumbnailSrc} />
            <BackgroundThumbnail src={thumbnailSrc} />
          </ThumbnailContainer>
        </Container>
      ) : (
        <BookDetailLoader />
      )}
    </MainLayout>
  )
}
