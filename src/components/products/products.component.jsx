import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cofttech from "../../api/cofttech";
import ProductItem from "../productItem/ProductItem.component";

const Products = () => {
  const [isLogin, setIslogin] = useState(null);
  const [products, setProducts] = useState(null);
  const [services, setServices] = useState(false);
  const [filter, setFilter] = useState(null);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
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

        // After the services have been retrieved
        let products;
        if (!filter) {
          products = await cofttech.get(`${services.data[0]._id}/products`);
        } else {
          products = await cofttech.get(`${filter}/products`);
        }
        setProducts(products.data);
        console.log(products.data);
      } catch (ex) {
        console.log(ex.response.data);
        alert("Couldnt fetch the services");
      }
    })();
  }, [filter]);

  return (
    <div>
      {!services || !products ? (
        <p>Fetchin' the services</p>
      ) : (
        <div>
          <div
            className="d-flex  w-100"
            style={{ justifyContent: "space-between" }}
          >
            <h3>Products</h3>

            <div>
              <select
                class="form-select"
                aria-label="Select user type"
                onChange={handleChange.bind(this)}
              >
                <option selected>FILTER BY SERVICES</option>

                {services.map((service) => (
                  <option key={service._id} value={service._id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            {products.map(function(product) {
              return (
                <Link to={`/products/${product._id}`}>
                  <ProductItem product={product} />
                </Link>
              );
            })}
          </div>
        </div>
      )}
      ;
    </div>
  );
};

export default Products;
