import React from "react";
import { useLocation } from "react-router-dom";

const PageNotFound = () => {
  let location = useLocation();

  return (
    <div>
      <h1>Sorry about that, the page {location.pathname} doesn't exist!</h1>
    </div>
  );
};

export default PageNotFound;
