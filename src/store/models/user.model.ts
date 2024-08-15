import { Action, Computed, Thunk, action, computed, thunk } from "easy-peasy";
import { Book } from "../interface";
import { Model } from ".";


interface UserState{
book :Book;
hasBook: Computed<UserState,boolean,Model>;
}
interface UserActions{
setBook:Action<this ,Book>
}
interface userThunks{
borrowBookThunk: Thunk<this ,number,undefined ,Model>;
}
export interface UserModel extends UserState , userThunks, UserActions{

}
 export const userModel: UserModel={
    book:{}, 
    hasBook:computed((state)=>{
   if(state.book){
    return true;
   }else{
    return false;
   }
    }),
    setBook: action((state,payload)=>{
    state.book=payload
}),
    borrowBookThunk: thunk((actions, payload,{getStoreState})=>{
const {books}=getStoreState().booksModel
const bookFound=books.find(book =>book.id === payload)

if(bookFound){
actions.setBook(bookFound);
}
    }),
 };