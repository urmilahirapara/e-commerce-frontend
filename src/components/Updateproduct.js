import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
const Updateproduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");
  const param = useParams();
  const navigate=useNavigate();
  useEffect(() => {
    console.log(param);
    getProductDetails();
  }, []);
  const getProductDetails = async () => {
    let result = await fetch(`http://localhost:5000/update/${param.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };
  const updateProductfn = async () => {
let result=await fetch(`http://localhost:5000/update/${param.id}`,
{
method:'put',
body:JSON.stringify({name,price,category,company}),
headers:{"Content-Type":"application/json"}
}
);
result=await result.json();
navigate('/');
  };

  return (
    <div className="containerprod">
      <h2>Update Product</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Product Name"
      />
      {error && !name && <span className="validproduct">Enter Valid Name</span>}
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter Product Price"
      />
      {error && !price && (
        <span className="validproduct">Enter Valid price</span>
      )}
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter Product category"
      />
      {error && !category && (
        <span className="validproduct">Enter Valid category</span>
      )}
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter Product company"
      />
      {error && !company && (
        <span className="validproduct">Enter Valid company</span>
      )}

      <button className="btn" onClick={updateProductfn} type="submit">
        Update Product
      </button>
    </div>
  );
};

export default Updateproduct;
