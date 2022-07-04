
import { useEffect ,useState} from "react";
import { useLocation , useNavigate} from "react-router-dom"
import { Editor} from "../../components"
import "./index.css"
let placeHolder  = "https://firebasestorage.googleapis.com/v0/b/fir-4308b.appspot.com/o/logo-image.jpg?alt=media&token=2cd438b9-1635-42bc-b2f5-93007205f85e"
const BlogDetail = () =>{
    const location = useLocation();
    const navigate = useNavigate();
    const [ data ,setData] = useState (location.state?location.state.data:{})
    const { title="" , subtitle="",author ="",category="",content="" ,coverImage="",createdAt="",hits="",id=""} = data ;
    useEffect(()  =>{
     if ( !location.state ){
        return  navigate("/blog")
     }
    },[])
    return(
        <div className="w-800 px-md  my-lg  mx-auto flex flex-col  ">
            <div className=" cover-image-wrapper  border border-light my-md">
                <img src={ coverImage || placeHolder} alt="" />
            </div>
            <div className=" flex flex-col my-lg   ">
                <span className=" fs-xx-large fw-bold  loose-text text-spaced  text-primary font-primary px-sm  py-sm">{title || ""}</span>
                <span className=" text-dark font-secondary fw-bold  loose-text text-spaced px-sm w-100 ">{subtitle || ""}</span>
            </div>
            <div className=" flex flex-col gap-md  ">
            <div className="flex justify-between px-sm gap-lg laing-center font-secondary ">
                <div>
                    Date : { createdAt || ""}
                </div>
                <div>
                    Category : { category || ""}
                </div>
            </div>
            <div className="flex justify-between px-sm gap-lg laing-center font-secondary  ">
                <div>
                    Hits : { hits || ""}
                </div>
                <div>
                    Author : { author  || ""}
                </div>
            </div>
            <Editor isRead ={ true } value ={content}   />
            </div>
            
        </div>
    )
}

export default BlogDetail