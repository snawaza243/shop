import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Redirect, Navigate } from "react-router-dom"
import Success from "./pages/Success";





function App() {
  const user = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />

        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
