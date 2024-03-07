import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <div className="products">
      <div className="productsNav">
        <Link to="/user/giftslist/availiable"> Gifts Available </Link>
        <Link to="/user/giftslist/purchased"> Gifts Purchased </Link>
        <Link to="/user/giftlist"> All List </Link>
        <Link to="/user/profile"> Profile </Link>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Products;
