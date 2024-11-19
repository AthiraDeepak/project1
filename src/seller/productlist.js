import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Productlist = () => {
  let [newproduct, setNewproduct] = useState([]);
  let [order, setOrder] = useState("asc");
  let [arrow, changeArrow] = useState("&#8593;");

  const getProduct = () => {
    let url = "http://localhost:1234/productapi/";
    fetch(url)
      .then((response) => response.json())
      .then((productArray) => {

        if(order==="asc"){
          productArray.sort((a, b)=> a.price - b.price  );
          setNewproduct(productArray);
          setOrder("desc");
        }else{
          productArray.sort((a, b)=> b.price - a.price  );
          setNewproduct(productArray);
          setOrder("asc");
        }

      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await fetch(`http://localhost:1234/productapi/${id}`, {
        method: "DELETE",
      });
      getProduct();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  let[keyword, setKeyword] = useState("");

  const PER_PAGE = 5; //displays 5 items/records per page
  const [currentPage, setCurrentPage] = useState(0);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage)
  }
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(newproduct.length / PER_PAGE);
  
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-xl-9 text-center">
          <h3 className="text-info"> {newproduct.length} : Product in inventory</h3>
        </div>
        <div className="col-xl-3">
          <input 
            type="text" 
            placeholder="Search..." 
            className="form-control" 
            onChange={obj=>setKeyword(obj.target.value)}/>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-xl-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#ID</th>
                <th>Product Name</th>
                <th className="bg-warning" onClick={getProduct}>
                { order === 'asc' ? <> &#x25BC;</> : <> &#x25B2;</> } Product Price
                </th>
                <th>Product Details</th>
                <th>Photo</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
              newproduct.slice(offset, offset + PER_PAGE).map((product, index) => {
                if( product.pname.toLowerCase().match(keyword.toLowerCase()) )
                return (
                  <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.pname}</td>
                    <td>{product.price}</td>
                    <td>{product.details}</td>
                    <td> <img src={product.photo} height="60" width="80"/> </td>
                    <td className="text-center">
                      <button className="btn btn-danger" onClick={obj=>deleteProduct(product.id)}>
                        <i className="fa fa-trash sm"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
            <div className="mt-4 text-center">
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination  justify-content-center"}
                pageClassName={"page-item "}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active primary"}
              />
            </div>
        </div>
      </div>
    </div>
  );
};
export default Productlist;
