import { useState, useEffect } from "react";
const Category = ()=>{
   let[catname,setCategoryName]=useState("");
   let [catelist,setCategoryList] = useState([]);
   let [message,setMessage] =useState ("");
   
   const save = ()=> {
        let newuser = { categoryname: catname}
        // console.log(newuser)
        let url = "http://localhost:1234/categoryapi";
        let postdata = {
            headers:{'Content-Type':'application/json'},
            method :"post",
            body:JSON.stringify(newuser)
           }
           fetch(url,postdata)
           .then(response=>response.json())
           .then(categotyInfo=>{
            
            setMessage( catname +  "     Saved succesfully !")
             setCategoryName("");
            getCategory();
           })
    

    }

     const getCategory = ()=>{
        fetch("http://localhost:1234/categoryapi")
        .then(response=>response.json())
        .then(categoryArray=>{
            setCategoryList(categoryArray);
        })
    }
     const delcategory = (id)=>{
        let url = "http://localhost:1234/categoryapi/"+id
        let postdata = {method:"delete"};
        fetch(url,postdata)
        .then(response=>response.json())
        .then(info=>{
           
            setMessage(" Deleted ")
            getCategory()
        })
     }
   
useEffect(()=>{
    getCategory()
},[])



    return(
       

      
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <h3 className="text-center"> Manage Category </h3>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Category Name" onChange={obj=>setCategoryName(obj.target.value)} value={catname}/>
                        <button className="btn btn-primary" onClick={save}> Save Category </button>
                    </div>
               
                <div className="col-lg-3"></div>
           
            

            <p className="para text-center text-danger"> {message}</p>

            <div class="col-lg-9">

            <table class="table mt-5 table-bordered mb-3 text-center  table-condensed table-striped" > 
                <thead>
                    <tr>
                        <th> Id </th>
                        <th> Category Name </th>
                        <th> Delete </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        catelist.map((names,index)=>{
                            return(
                                <tr key={index}>
                                    <td> {index+1} </td>
                                    <td> {names.categoryname} </td>
                                    <td> <button className=" btn btn-danger m-t" onClick={obj=>delcategory(names.id)}> Delete </button></td>

                                </tr>
                            )
                        })
                    }

                </tbody>

            </table>
            </div>
               </div>
            </div>

        </div>

      

       
    )
  
}
export default Category;