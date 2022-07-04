import { useRef } from "react"
import { ImagePicker, BlogEntries ,Editor } from "../../components"
import { ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { createBlog} from "../../helpers/blog"

const CreateBlogs =() =>{
    const imageDataRef = useRef();
    const blogDataRef = useRef();
    const editorDataRef = useRef();
    const extractData  = ()=>{
        let data = blogDataRef.current();
        if ( !data ) {
            return false ;
        }
        data.coverImage = imageDataRef.current;
        data.content = editorDataRef.current();
        return data ;
    }
    const handleSubmit = async   () =>{
        let enteredvalues= extractData()
        if (!enteredvalues){
            return toast.error("Enter All Fields")
        }
        toast.info("Processing...")
        const isSuccess = await createBlog( enteredvalues)
        if ( !isSuccess) return  toast.error("Could Not Add Data")
        return  toast.success("Done !")
    }

    return (
        <div className="px-sm  flex align-center justify-center flex-col flex-nowrap mx-auto gap-lg " style={{maxWidth:"800px",marginBottom:"30px"}}>
            <ToastContainer />
            <ImagePicker providerRef= { imageDataRef} />
            <BlogEntries providerRef={ blogDataRef} />
            <Editor   providerRef={editorDataRef} />
            <div className=" flex align-center w-100 justify-end px-lg ">
                <button onClick={ handleSubmit } className="bg-light dark-hover  py-md px-lg  fw-bold text-primary fs-large ">Submit</button>
            </div>
        </div>
    )
    
}
export default CreateBlogs