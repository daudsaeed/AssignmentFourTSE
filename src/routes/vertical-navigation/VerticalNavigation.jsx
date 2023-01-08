import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

const VerticalNavigation = () => {
  return (
    <div className="row">
      <div className="col-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/packages">
              Packages
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/subscriptions">
              Your Subscriptions
            </Link>
          </li>
        </ul>
      </div>

      <div className="col-9">
        <Outlet />
      </div>
    </div>
  );
};

export default VerticalNavigation;
