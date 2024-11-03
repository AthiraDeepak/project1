import { useState } from "react";

const Newproduct=()=>{
   let[ pname,setProductName]=useState("");
   let[ pprice,setProductPrice]=useState("");
   let[ pphotourl,setProductPhotoUrl]=useState("");
   let[ pdescription,setProductDescription]=useState("");


   const save = ()=>{
    let newuser = {productname:pname,productprice:pprice,productphotourl:pphotourl,productdescription:pdescription}
    let url = "http://localhost:1234/productapi";
    let postdata = {
        headers:{'Content-Type':'application/json'},
        method :"post",
        body:JSON.stringify(newuser)
       }
       fetch(url,postdata)
       .then(response=>response.json())
      .then(productInfo=>{

      })
    }

    const clear = ()=>{
        setProductName("");
        setProductPrice("");
        setProductPhotoUrl("");
        setProductDescription("");
    }
 

    return(
        <div className="container">
            <div className="row mt-3">
                <div className="col-xl-12 text-center">
                    <h1 className="text-info">Enter Product Details</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12 text-center">
                    <p className="text-danger">The * Marked fields are mandatory</p>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4">
                    <p>Product Name <span className="text-danger">*</span></p>
                    <input type="text" className="form-control" onChange={obj=>setProductName(obj.target.value)} value={pname}/>
                </div>
                <div className="col-xl-4">
                    <p>Product Price <span className="text-danger">*</span></p>
                    <input type="number" className="form-control" onChange={obj=>setProductPrice(obj.target.value)} value={pprice}/>
                </div>
                <div className="col-xl-4">
                    <p>Product Photo URL <span className="text-danger">*</span></p>
                    <input type="text" className="form-control" onChange={obj=>setProductPhotoUrl(obj.target.value)} value={pphotourl}/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-xl-12">
                    <p>Product Description <span className="text-danger">*</span></p>
                    <textarea className="form-control" onChange={obj=>setProductDescription(obj.target.value)} value={pdescription}></textarea>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-xl-4 offset-4 text-center">
                    <button className="btn btn-success text-white m-2" onClick={save}>Save Product</button>
                    <button className="btn btn-warning m-2" onClick={clear}>Clear All</button>
                </div>
            </div>
        </div>
    )
}

export default Newproduct;