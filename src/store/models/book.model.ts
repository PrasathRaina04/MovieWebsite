import { Book } from "../interface";

interface BookState{
    books:Book[]
}

export interface BooksModel extends BookState{}

export const booksModel: BooksModel={
    books:[
        {
            id:1,
            title:'vijay'
        },
        {
            id:2,
            title:'two'
        }
    ]
};