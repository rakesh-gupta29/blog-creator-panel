import catchError from "./errorHandler"
import { db } from "../context/setUp"
import { collection, addDoc ,getDocs } from "firebase/firestore";

export const createBlog = catchError( async input =>{
    console.log ( input )
    return  (await addDoc(collection(db, "blogs"), input)).id
})

export const getAllBlogs = catchError( async () =>{
    let data=[]
     const snapShot = await getDocs(collection(db, "blogs"))
     snapShot.forEach( doc  =>{
        const item = doc.data();
        item.id  =doc.id;
        data.push( item )
     })
     return data ;
})

