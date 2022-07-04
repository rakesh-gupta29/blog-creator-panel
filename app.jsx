

import { BrowserRouter,Routes,Route} from "react-router-dom"
import {HomePage ,CreateBlog, WatchBlog, BlogDetail} from "./screens"
import {NavBar,Footer} from "./components"
const App = ()=>{
    return(
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreateBlog />} />
                <Route path="/blog" element={<WatchBlog />} />
                <Route path="/blog/:blogId" element={<BlogDetail />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App 