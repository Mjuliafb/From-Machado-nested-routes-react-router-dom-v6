import React from "react";
import { ProductsData } from "../../ProductsData";
import { useNavigate } from "react-router-dom";
function ListProducts() {
  const navigate = useNavigate();
  return (
    <div className="listOfProducts">
      <div>
        <h1> Lista: XX </h1>
        <button> Share</button>
        <button>Add item</button>
      </div>
      <div className="productsList">
        {ProductsData.map((product) => {
          return (
            <div className="productDisplay">
              <h1>{product.name}</h1> <p>{product.description}</p>{" "}
              <button
                onClick={() => {
                  navigate(`/user/giftlist/gift/${product.id}`);
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListProducts;
