
import { getAllBlogs} from "../../helpers/blog"
import { useEffect , useState } from "react"
import { toast} from "react-toastify"
import { useNavigate} from "react-router-dom"

const WatchBlogs =() =>{
    const [ {content , loading } ,setDisplayData] = useState ( {
        loading:true ,
        content:[]
    })
    const navigate = useNavigate();

    useEffect(() =>{
        (async () =>{
             const data =await getAllBlogs()
             if ( !data) return  toast.error("Could Not Fetch Data")
             setDisplayData( {
                 loading:false,
                 content:data
             })
        })()

    },[])

    const Item = ( {data}) =>{
        const { title , subtitle , id} = data
        return(
            <div onClick={() =>navigate(id,{ state:{data}})} className=" flex flex-col gap-sm px-md py-lg border-bottom border-light bg-hover ">
                <span className=" fs-large text-primary fw-bold font-primary">{title}</span>
                <span className=" text-dark font-primary">{subtitle}</span>
            </div>
        )
    }

    const ContentView  = ()=>{
        return(
            <div className=" flex flex-col w-800 mx-auto my-lg " style={{minHeight:"calc( 100vh - 180px)"}}>
                {content.map ( ( i,index ) => <Item  data ={i} key={index} />)}
            </div>
        )
    }
    return (
        loading
            ? <center className="fs-title my-lg fw-bold text-dark font-secondary">Loading ...</center>
            :<ContentView />
       
    )
    
}
export default WatchBlogs