import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages
import { Home, Contact, Login, Register, Reset } from "./pages";
// components
import { Header, Footer } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductList from "./product/ProductList/ProductList";
import ProductContextProvider from "./contexts/ProductContextProvider";
// import CartContextProvider from "./contexts/CartContextProvider";
import Company from "./pages/company/Company";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductContextProvider>
        <ToastContainer />
        <Header />
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Reset" element={<Reset />} />
          <Route path="/products" element={<ProductList/>} />
          <Route path="/company" element={<Company/>} />
          <Route path="/cart" element={<Cart/>} />

        </Routes>
        <Footer />
        </ProductContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
