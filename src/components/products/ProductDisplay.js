import React from "react";
import { useParams } from "react-router-dom";
import { ProductsData } from "../../ProductsData";
import { useNavigate } from "react-router-dom";

export const ProductDisplay = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = async () => {
    navigate(`/user/giftlist`);
  };
  return (
    <div className="listOfProducts">
      <div className="productDisplay">
        <h1>{ProductsData[id - 1].name}</h1>{" "}
        <p>{ProductsData[id - 1].description}</p> <button>Guardar</button>
      </div>
      <button onClick={handleClick}>Go back</button>
    </div>
  );
};
