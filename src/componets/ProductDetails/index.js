import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getProductDetails } from "../../api/apiAction";
import Pagination from "../Paginatation";
import PrdocutBox from "../ProductBox";
import { handleFieldEmpty } from "../../utils/utils";

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
          <PrdocutBox
            id={handleFieldEmpty(item.id)}
            productName={handleFieldEmpty(item?.productName)}
            productImages={handleFieldEmpty(item.productImages)}
            price={handleFieldEmpty(item.variants[0]?.price)}
            description={handleFieldEmpty(item.inventoryDetails.description)}
          />
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
