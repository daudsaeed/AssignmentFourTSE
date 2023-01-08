import React, { useState } from "react";
import { Link } from "react-router-dom";
import cofttech from "../../api/cofttech";

const Login = () => {
  const [userType, setUserType] = useState("user");
  const [name, setName] = useState("");

  // When the option is changed, th set the usertype
  const handleChange = (event) => {
    alert(event.target.value);
    setUserType(event.target.value);
  };

  // When submit set localstorage to thats value
  const submitHandler = async () => {
    try {
      // Creating the customer in tthe database
      const user = await cofttech.post("/admin/customer", {
        user_type: userType,
        name: name,
      });

      console.log("Customer ID is " + user.data._id);
      localStorage.setItem("user_type", userType);
      localStorage.setItem("customer_id", user.data._id);
    } catch (ex) {
      alert("Couldn't create customer");
      console.log(ex);
    }
  };

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setName(value);
    console.log(value);
  };

  return (
    <div
      className="form-container bg-light w-50 m-auto mt-5 p-5 shadow"
      style={{ marginTop: 100 }}
    >
      <p>Select User Type To Continue</p>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={onChangeHandler}
        className="form-control mb-3"
      />
      <div className="d-flex justify-content-space-between flex-direction-column">
        <select
          class="form-select"
          aria-label="Select user type"
          onChange={handleChange.bind(this)}
        >
          <option selected>Open this select menu</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <Link to={"/services"}>
          <button onClick={submitHandler} className="btn btn-success ml-4">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
