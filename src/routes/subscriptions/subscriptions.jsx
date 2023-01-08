import React, { useState, useEffect } from "react";
import cofttech from "../../api/cofttech";
import ProductItem from "../../components/productItem/ProductItem.component";

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState(null);
  const [isLogin, setIslogin] = useState(null);
  const customerId = localStorage.getItem("customer_id");

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

  // Fetching the subscriptions based on the customer id
  useEffect(() => {
    (async () => {
      try {
        const subscriptions = await cofttech.get(
          `customer/subscriptions/${customerId}`
        );

        setSubscriptions(subscriptions.data);
      } catch (ex) {}
    })();
  }, []);
  return (
    <div>
      {!isLogin ? (
        <p>You must be login first</p>
      ) : (
        <div>
          {!subscriptions ? (
            <p>Fetching Susbcriptions</p>
          ) : (
            <div>
              <h4>Your Products thats you bought</h4>
              {subscriptions.map(function(subscription) {
                return (
                  <div className="bg-light " style={{ marginBottom: 20 }}>
                    <ProductItem product={subscription.pid} />
                    <div className="p-3">
                      <p>Package: {subscription.packageid.name}</p>
                      <p>Price: {subscription.packageid.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Subscriptions;
