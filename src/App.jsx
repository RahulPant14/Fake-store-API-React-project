import "./demo.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Product from "./Product";
import Products from "./Products";

const App = () => {


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        </BrowserRouter>
  );
}
export default App;