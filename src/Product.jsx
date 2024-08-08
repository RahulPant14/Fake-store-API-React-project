import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./demo.css"
const Product = ()=>{
    const param=useParams();
    const [product,setProduct] = useState({});

    const handleClick = ()=>{
        axios.get(`https://fakestoreapi.com/products/${param.id}`)
        .then(response=>{   
            console.log(response.data);
            setProduct(response.data);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        handleClick();
    },[])

    return(
        <>
            <div className="main product-main">
   
                <h1>Product Component</h1>
                <div className="flex">
                <div className="div-1 product-img">
                        {/* <div className="data" key={product.id}> */}
                         
                          <img src={product.image} alt={product.id} />
                                                 
                        {/* </div> */}
                </div>
                <div className="div-2">
                {/* <div className="data" key={product.id}> */}
                          <h2 className="title">{product.category}</h2>
                          <p className="title">{product.title}</p>
                          <p className="category">{product.description}</p>
                          <p className="price">Price <b>${product.price}</b></p> 
                          {/* <p className="price">Reviews <b>{product.rating.rate}</b></p>                           */}
                        {/* </div> */}
                </div>
                </div>

            </div>
        </>
    );
}
export default Product;