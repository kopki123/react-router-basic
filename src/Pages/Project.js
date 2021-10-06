import React from "react";
import { useHistory } from "react-router-dom";

const Project = () => {
  const history = useHistory();

  return (
    <div>
      <h1>This is project page</h1>
      <button onClick={() => history.push("/")}>Go to the Home page</button>
    </div>
  );
};

export default Project;
