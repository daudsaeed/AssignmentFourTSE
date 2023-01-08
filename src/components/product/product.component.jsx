import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Package from "../package/package.component";
import cofttech from "../../api/cofttech";
import ProductItem from "../productItem/ProductItem.component";

const Product = () => {
  // And then subscription http://127.0.0.1:3000/customer/subscribe
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [packages, setPackages] = useState(null);
  const btns = ["btn-primary", "btn-secondary", "btn-warning", "btn-danger"];
  // Get the customer ID Already stored in the localstirage

  const customer_id = localStorage.customer_id;
  // Have to get the product by service ID http://127.0.0.1:3000//products/${productId}
  useEffect(() => {
    (async () => {
      const product = await cofttech.get(`/products/${productId}`);
      setProduct(product.data);
    })();
  }, []);

  // Get the packages http://127.0.0.1:3000/packages (buttons )
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

  // When user want to buy the product
  const onSubscribeHandler = async (packageid, pid, cid) => {
    try {
      const subscribe = await cofttech.post("/customer/subscribe", {
        cid,
        pid,
        packageid,
      });

      if (subscribe) {
        alert("Successfuly, bought it check ur subscriptions!");
      }
    } catch (ex) {
      alert("Couldnt subscribe to product");
      // console.log(ex.response.data);
    }
  };
  return (
    <div>
      {!product || !packages ? (
        <p>Fetching the product</p>
      ) : (
        <div>
          <ProductItem product={product} />
          {packages.map((pack, index) => {
            return (
              <button
                className={`btn ${btns[index]} ml-3`}
                onClick={() => {
                  onSubscribeHandler(pack._id, product._id, customer_id);
                }}
              >
                Buy {pack.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Product;
