import React from "react";
import "./service.style.css";

const Service = ({ service }) => {
  return (
    <div className="bg-light shadow p-3 my-4 radius service">
      <p>{service.name}</p>
      <p>{service.detail}</p>
    </div>
  );
};

export default Service;
