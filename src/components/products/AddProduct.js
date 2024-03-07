import React from "react";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
    navigate(`/user/giftlist`);
  };
  return (
    <div className="listOfProducts">
      <h1> Profile</h1>
      <button onClick={handleClick}>Go back</button>
    </div>
  );
};

export default AddProduct;
