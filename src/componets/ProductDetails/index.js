import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getProductDetails } from "../../api/apiAction";
import Pagination from "../Paginatation";

const Index = () => {
  //use of useLocation to fetch the ID of categories
  const state = useLocation();

  //create a state to store the data from API
  const [overViewData, setOverViewData] = useState();
  //Intializing API param
  const [param, setParam] = useState({
    id: state.state.id,
    limit: 10,
    page: 1,
  });
  const [isLoading, setIsLoading] = useState(true);

  //Making the API CALL
  useEffect(() => {
    setIsLoading(true);
    getProductDetails(param.id, param.limit, param.page).then((json) => {
      setOverViewData(json);
      setIsLoading(false);
    });
  }, [param]);
  if (isLoading) return <h1 className="loader">WE ARE LOADING!!</h1>;

  //returning the List Of Items with Pagination

  // render ProductDetails Component
  return (
    <>
      {overViewData.items.map((item) => {
        return (
          <>
            <div className="descriptionBox" key={item.id}>
              {" "}
              <div className="alingCategoryBox">
                <div>{item.id || ""}</div>
                <div>NAME: {item?.productName}</div>
                <div>RS: {item.variants[0]?.price}</div>
                <img
                  src={item.productImages}
                  alt="Item Image"
                  width="100"
                  height="100"
                ></img>
              </div>
              <div>{item.inventoryDetails.description}</div>
            </div>
          </>
        );
      })}
      <Pagination
        totalItems={50}
        defaultLimit={10}
        setParam={setParam}
        param={param}
      />
    </>
  );
};

export default Index;
