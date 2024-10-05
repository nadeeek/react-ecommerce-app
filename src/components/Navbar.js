import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/action";

const Navbar = () => {
  const handleCart = useSelector((state) => state.handleCart);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Create navigate instance

  const handleLogout = () => {
    dispatch(logout());  // Dispatch the logout action
    navigate('/login');   // Redirect to the login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
          {" "}
          Shopping eCommerce
        </NavLink>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons text-center">
          <NavLink to="/cart" className="btn btn-outline-dark m-2">
              <i className="fa fa-cart-shopping mr-1"></i> Cart ({handleCart.length}){" "}
          </NavLink>
            {/* Conditionally render Login or Dashboard link based on authentication */}

            {!isAuthenticated ? (
              <span>
                <NavLink to="/login" className="btn btn-outline-dark m-2">
                  <i className="fa fa-sign-in-alt mr-1"></i> Login
                </NavLink>
                <NavLink to="/register" className="btn btn-outline-dark m-2">
                  <i className="fa fa-user-plus mr-1"></i> Register
                </NavLink>
              </span>
            ) : 
              <span>
                <NavLink to="/login" className="btn btn-outline-dark m-2" onClick={handleLogout}>
                  <i className="fa fa-sign-in-alt mr-1"></i> Logout
                </NavLink>
                <i className="fa fa-sign-in-alt mr-1"></i> Nadeesha
              </span>
            
            }

            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
