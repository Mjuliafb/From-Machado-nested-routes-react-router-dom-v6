import React from "react";
// import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  // const { store, actions } = useContext(Context);
  // const navigate = useNavigate()

  // const handleClick = () => {
  // 	actions.logout()
  // 	navigate('/')

  // }

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
          <Link to="/login">
            <button className="btn btn-primary">Log in</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
