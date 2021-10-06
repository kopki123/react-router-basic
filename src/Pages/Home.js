import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <div>
      <h1>This is home page</h1>
      <button onClick={() => history.push("/project")}>
        Go to the Project page
      </button>
    </div>
  );
};

export default Home;
