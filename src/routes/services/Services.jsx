import React, { useState, useEffect } from "react";

import cofttech from "../../api/cofttech";
import Service from "../../components/service/service.component";

const Services = () => {
  const [isLogin, setIslogin] = useState(null);
  const [services, setServices] = useState(null);
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

  // fetches the services from the databse by reqesting the API usinfg axios

  useEffect(() => {
    (async () => {
      try {
        const services = await cofttech.get("/services");
        setServices(services.data);
      } catch (ex) {
        console.log(ex.response.data);
        alert("Couldnt fetch the services");
      }
    })();
  }, []);
  return (
    <div>
      {!isLogin ? (
        <p>Please Login, to the services</p>
      ) : (
        <div>
          <h4>Services</h4>
          {services ? (
            services.map((service) => {
              return <Service service={service} />;
            })
          ) : (
            <p>Fetching the services</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Services;
