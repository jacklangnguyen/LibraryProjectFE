
export interface IBOOK {
  id?: string;
  bookId?: string;
  bookName?: string ;
  bookTopic?: string;
  bookPublisher?: string;
  bookAuthor?: string;
}
export class BOOK implements IBOOK {
  constructor(
    public id?: string,
    public bookId?: string,
    public bookName?: string ,
    public bookTopic?: string,
    public bookPublisher?: string,
    public bookAuthor?: string,
  ) {
  }
}
