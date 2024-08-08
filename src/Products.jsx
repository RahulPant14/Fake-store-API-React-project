import axios from "axios";
import "./demo.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then(response => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });

  }, []);

  return (
    <div className="main">
   
        <h1>Fake Store API</h1>
        <div className="div-1">
          {
            users.map((user) => {
              return (
                <div className="data" key={user.id}>
                 <p className="category">{user.category}</p>
                 <Link to={"/product/"+user.id}> <img src={user.image} alt={user.id} /></Link>
                  <p className="title">{user.title}</p>
                  <p className="price"><b>${user.price}</b></p>
                  
                </div>
              )
            })
          }


        </div>
   
    </div>
  );
}
export default Products;