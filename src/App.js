import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Products } from "./components/products/Products";
import { Login } from "./components/Login";
import { Search } from "./components/products/Search";
import { AddProduct } from "./components/products/AddProduct";
import { ProductDisplay } from "./components/products/ProductDisplay";
import ListProducts from "./components/products/ListProducts";
import { Navbar } from "./components/products/NavBar";
import { GiftsPur } from "./components/products/GiftsPur";
import { Signup } from "./components/Signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="user" element={<Products />}>
          <Route path="giftslist/availiable" element={<Search />} />
          <Route path="giftslist/purchased" element={<GiftsPur />} />
          <Route path="giftlist" element={<ListProducts />} />
          <Route path="profile" element={<AddProduct />} />
          <Route path="giftlist/gift/:id" element={<ProductDisplay />} />
          <Route path="giftlist/new-gift" element={<ProductDisplay />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
