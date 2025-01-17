import React from "react";
// import { Link } from "react-router-dom";
// import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
// import "../../styles/login.css";

export const Signup = () => {
  // const { store, actions } = useContext(Context);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const handleClick = async () => {
  //     const success = await actions.login(email, password);
  //     if (success) {
  //         const user = await actions.getUser(email);
  //         if (user && user.id) {
  //             navigate(`/user/${user.id}/giftlist`);
  //         } else {
  //             console.error("No se pudo obtener el ID del usuario");
  //         }
  //     }
  // };

  const handleClick = async () => {
    navigate(`/login`);
  };

  return (
    <div className="container text-center mt-5 d-flex justify-content-center">
      <div className="col-md-6">
        <h1>SIGNUP</h1>
        <p>Formulario</p>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={handleClick}
        >
          Registrar
        </button>
      </div>
    </div>
  );
};