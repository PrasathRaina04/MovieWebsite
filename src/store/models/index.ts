import { UserModel, userModel } from "./user.model";
import { BooksModel, booksModel } from "./book.model";


export interface Model{
    userModel: UserModel;
    booksModel: BooksModel;
}
 
export const model: Model ={
    userModel: userModel,
    booksModel: booksModel
}