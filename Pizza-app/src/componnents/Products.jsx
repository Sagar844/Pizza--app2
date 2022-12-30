import React from "react";
import { useState, useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fatchproducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fatchproducts();
  }, []);

  const handleAddtocart = (product) => {
    dispatch(add(product));
  };
  return (
    <div className=" bg-white md:grid grid-cols-5 gap-2 px-2 mr-5 ml-5 rounded-md  mt-01">
      {Products.map((product) => (
        <div key={product.id}>
          <img className=" h-40 rounded-md  " src={product.image} />
          <h1>{product.price}</h1>
          <h1 className="font-bold ">{product.title}</h1>

          <button
            onClick={() => handleAddtocart(product)}
            className="bg-indigo-600 px-8 py-1 rounded-sm text-white"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
