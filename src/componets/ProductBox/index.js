import React from "react";

const Index = ({ id, productName, price, productImages, description }) => {
  return (
    <div className="descriptionBox">
      {" "}
      <div className="productBox">
        <div>{id || "NA"}</div>
        <div>NAME: {productName}</div>
        <div>RS: {price}</div>
        <img
          src={productImages}
          alt="Item Image"
          width="100"
          height="100"
        ></img>
      </div>
      <div>{description}</div>
    </div>
  );
};

export default Index;
