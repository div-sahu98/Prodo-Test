import React from "react";
import { useEffect, useState } from "react";
import { getCategoriesData } from "../../api/apiAction";
import CategoryBox from "../CategoryBox";
import { handleFieldEmpty } from "../../utils/utils";

const Index = () => {
  //creating a state to store API call DATA
  const [overViewData, setOverViewData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  //Intializing product categories API call
  useEffect(() => {
    getCategoriesData().then((json) => {
      setOverViewData(json);
      setIsLoading(false);
    });
  }, []);

  //Loader
  if (isLoading) return <h1 className="loader">WE ARE LOADING!!</h1>;

  //rendring prodoCategories component
  return (
    <>
      {overViewData.map((element) => {
        return (
          <CategoryBox
            id={handleFieldEmpty(element.id)}
            nameItem={handleFieldEmpty(element.categoryName)}
            image={handleFieldEmpty(element.categoryImages)}
          />
        );
      })}
    </>
  );
};

export default Index;
