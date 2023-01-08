import React, { useState, useEffect } from "react";
import cofttech from "../../api/cofttech";
import Package from "../../components/package/package.component";

const Packages = () => {
  const [isLogin, setIslogin] = useState(null);
  const [packages, setPackages] = useState([]);
  // Check if the user is already logged in
  useEffect(() => {
    // Check if the UserType is set or not

    const userType = localStorage.getItem("user_type");
    // if the user is not login then
    if (!userType) {
      return;
    }

    // if the user is logged in
    setIslogin(true);
  }, []);

  // Fetch the packages from databse by requesting the API
  useEffect(() => {
    (async () => {
      try {
        const packages = await cofttech.get("/packages");
        // After fetching the packages, we need to setPackages
        setPackages(packages.data);
      } catch (ex) {
        alert("Couldnt fetch the packages from databse");
        console.log(ex.response.data);
      }
    })();
  }, []);
  return (
    <div>
      {!isLogin ? (
        <p>You need to the see packages</p>
      ) : (
        <div>
          {!packages ? (
            <p>Fetching the packages</p>
          ) : (
            <div>
              <h4>Packages</h4>
              <div className="d-flex justify-content-space-between flex-wrap ">
                {packages.map((pack) => {
                  return <Package pack={pack} />;
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Packages;
