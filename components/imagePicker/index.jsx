import { useEffect, useRef, useState } from "react"
import { imgUploadHandler} from "../../helpers/coverImage"
import { toast} from "react-toastify"
import "./index.css"
let imagePlaceholder = "https://firebasestorage.googleapis.com/v0/b/fir-4308b.appspot.com/o/logo-image.jpg?alt=media&token=2cd438b9-1635-42bc-b2f5-93007205f85e"



const ImagePicker  = ({providerRef}) =>{
    const [ imageUrl, setImageLink] = useState(imagePlaceholder);
    const fileInputRef  = useRef()

    useEffect(() =>{
         providerRef.current = imageUrl
    } ,[ imageUrl])

    const handleFileSelect =async  event  =>{
        toast.info("Uploading Image")
        const imageLink = await imgUploadHandler( event.target.files[0] )
        if ( !imageLink){
            return  toast.error("Upload Failed")
        }
        setImageLink( imageLink)
        toast.success("done uploading")
    }  

    const invokeSelect = () => fileInputRef.current.click();

     return(
        <div className="cover-image-wrapper ">
            <img 
                src={ imageUrl} 
                alt="cover" 
                onClick={ invokeSelect}
                className="border border-light border-hover  "
            />
            <input 
                type="file" 
                accept="image/*" 
                multiple={ false } 
                hidden 
                onChange={handleFileSelect} 
                ref={fileInputRef} 
            />
        </div>
    )
}

export default ImagePicker