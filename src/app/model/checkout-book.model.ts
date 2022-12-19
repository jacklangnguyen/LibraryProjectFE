export interface ICHECKOUTBOOK {
  id?: string;
  bookId?: string;
  bookName?: string ;
  userName?: string;
  userId?: string;
  bookAuthor?: string;
}
export class CHECKOUTBOOK implements ICHECKOUTBOOK {
  constructor(
    public id?: string,
    public bookId?: string,
    public bookName?: string ,
    public userName?: string,
    public userId?: string,
    public bookAuthor?: string,
  ) {
  }
}
