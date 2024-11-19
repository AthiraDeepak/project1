import {useState, useEffect} from 'react';

const Myhome = () =>{
    let[allcategory, setCategory] = useState( [] );

    const getCategory = () => {
        let url = "http://localhost:1234/categoryapi";
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setCategory(data);
          });
      };

      let[allproduct, setProduct] = useState([]);
      let[order, setOrder] = useState("asc");

      const getProduct = () => {
        let url = "http://localhost:1234/productapi";
        fetch(url)
          .then((response) => response.json())
          .then((productArray) => {
    
            if(order==="asc"){
              productArray.sort((a, b)=> a.price - b.price  );
              setProduct(productArray);
              setOrder("desc");
            }else{
              productArray.sort((a, b)=> b.price - a.price  );
              setProduct(productArray);
              setOrder("asc");
            }
          });
      };

      useEffect(()=>{
        getCategory();
        getProduct();
      }, []);

    return(
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-xl-3'></div>
                <div className='col-xl-6'>
                    <div className='input-group'>
                        <label className='input-group-text'>
                            <i className='fa fa-search'></i>
                        </label>
                        <input type="text" className='form-control form-control-lg' placeholder='Search...'/>
                    </div>
                </div>
                <div className='col-xl-3'></div>
            </div>

            <div className='row mt-5 mb-5'>
                <div className='col-xl-3'>
                    <div className='p-3 rounded shadow'>
                        <h4> Filter </h4>
                        {
                            allcategory.map((category, index)=>{
                                return(
                                    <p key={index} className='text-primary'> 
                                    <i className='fa fa-angle-double-right'></i> {category.catname} 
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='col-xl-9'>
                    <div className='row'>
                        {
                            allproduct.map((product, index)=>{
                                return(
                                    <div className='col-xl-4 mb-4' key={index}>
                                        <div className='p-3'>
                                            <h4 className='text-center'> {product.pname} </h4>
                                            <p> <img src={product.photo} height="150" width="100%" className='rounded'/> </p>
                                            <p>Rs. {product.price}</p>
                                            <p> {product.details}</p>
                                            <button className='btn btn-info btn-sm m-1 text-white'> 
                                                <i className='fa fa-shopping-cart'></i> Add To Cart 
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Myhome;