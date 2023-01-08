import React from "react";

import "./package.style.css";

const Package = ({ pack }) => {
  return (
    <div className="bg-light radius  d-flex justify-content-center align-items-center p-3 mb-3 package flex-column">
      <h3 className="package__name">{pack.name}</h3>
      <p className="package__price">PRICE: {pack.price}</p>

      <ul className="package__list">
        <li className="package__list-item">{pack.description.users} users</li>
        <li className="package__list-item">
          {pack.description.devices} devices
        </li>
        <li className="package__list-item">{pack.description.storage}</li>
        <li className="package__list-item">
          {pack.description.live_chat
            ? "Live chat is availible"
            : "No live chat available"}
        </li>
        <li className="package__list-item">
          {pack.description.free_customer_support
            ? "customer Support"
            : "No customer Support"}
        </li>
      </ul>
    </div>
  );
};

export default Package;
