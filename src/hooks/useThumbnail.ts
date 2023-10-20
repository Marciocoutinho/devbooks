interface UseThumbnailArgs {
  bookId?: string
}

export function useThumbnail({ bookId }: UseThumbnailArgs) {
  return `//books.google.com/books/publisher/content/images/frontcover/${bookId}?fife=w400-h600&source=gbs_api
    `
}
