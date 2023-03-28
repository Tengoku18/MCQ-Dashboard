import React from "react";
import Question from "./Question";
import Recommend from "./Recommend";

const Content = () => {
  return (
    <div className="w-screen">
      <div className="">
        <Question />
      </div>
      <div className="w-screen "><Recommend/></div>
    </div>
  );
};

export default Content;
