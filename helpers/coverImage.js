import catchErrors from "./errorHandler"
import {storage} from "../context/setUp"
import { ref, uploadBytes, getDownloadURL} from "firebase/storage"

export const imgUploadHandler =  catchErrors( async ( file)=>{
    const storageRef = ref(storage, Date.now().toString());
    return  await getDownloadURL((await  uploadBytes(storageRef, file)).ref) 
})