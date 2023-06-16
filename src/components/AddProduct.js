import React, { useState } from "react";


const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");
   

  const addProductfn = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }
    let userid = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add_product", {
      method: "post",
      body: JSON.stringify({
        name,
        price,
        category,
        company,
        userid,
      }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
     
  };

  return (
    <div className="containerprod">
      <h2>Add Product</h2>
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

      <button className="btn" onClick={addProductfn} type="submit">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
