 import {useEffect} from "react"

const BlogEntries = ({ providerRef}) =>{
    let content ={}

    const handleEntry =(event) =>{
       content[event.target.name]= event.target.value
    }

    const Field =( { name, type ="text"}) =>{
        return(
            <label htmlFor={name} className="flex flex-col flex-nowrap gap-sm font-secondary text-secondary text-spaced fs-large fw-bold">
                {name} :
                <input  type="text" type={type}  name={name} onChange={handleEntry} />
            </label>
        )
    }
    const valideAndReturn = () =>{
       if ( Object.keys( content).length !== 6) {
           return false ;
       }
       else {
           return content; 
       }
    }

    useEffect(() =>{
        providerRef.current = valideAndReturn 

    },[])

    return(
        <div className=" form-wrapper flex align-center justify-around gap-lg w-100  ">
            <div className="entries-wrapper flex flex-col gap-md flex-nowrap" style={{flex:"0 1 350px"}}>
                <Field name="title"  />
                <Field name="subtitle" />
                <Field name="createdAt" type="date" />
            </div>
            <div className="entries-wrapper flex flex-col gap-md flex-nowrap" style={{flex:"0 1 350px"}}>
                <Field name="author"  />
                <Field name="hits" type="number" />
                <Field name="category" />
            </div>
        </div>
    )
}

export default BlogEntries

