import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product_List = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getproductlist();
  }, []);
  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/delete/${id}`, {
      method: "delete",
    });
    result = await result.json();
    if (result) {
      getproductlist();
    }
  };
  const getproductlist = async () => {
    let result = await fetch("http://localhost:5000/products",{
      headers:{
        authorization:JSON.parse(localStorage.getItem('token'))
      }
    });
    
    let data = await result.json();
    setProduct(data);
  };
  const searchhandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if (result) {
        setProduct(result);
      }
    } else {
      getproductlist();
    }
  };

  return (
    <div className="prodlistcontainer">
      <h3>Product List</h3>
      <input
        className="searchbox"
        type="text"
        placeholder="search product"
        onChange={searchhandle}
      />
      <ul>
        <li>Sr. No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operation</li>
      </ul>
      {product.length > 0 ? (
        product.map((item, index) => (
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>$ {item.category}</li>
            <li>{item.company}</li>
            <li>
              <button onClick={() => deleteProduct(item._id)}>Delete</button>
              <Link to={"/update/" + item._id}>Update</Link>
            </li>
          </ul>
        ))
      ) : (
        <h1>No result found</h1>
      )}
    </div>
  );
};

export default Product_List;
