
import { Link} from "react-router-dom"
import logo from "../../assets/img/logo.svg"

const NavBar = () =>{
    return(
        <nav className=" flex align-ceter justify-between gap-lg master-padding">
            <div className=" box-lg mx-md ">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className=" px-md  font-secondary text-dark fs-large  flex-center gap-lg">
                <Link to="/create" className=" text-hover">
                    Create
                </Link>
                <Link to="/blog">
                    Blogs
                </Link>
            </div>
            
        </nav>
    )
}
export default NavBar