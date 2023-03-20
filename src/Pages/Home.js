import React from "react";
import LeftPaneHomeScreen from "../Components/Home/LeftPaneHomeScreen";
import RightPaneHomeScreen from "../Components/Home/RightPaneHomeScreen";

function Home() {
  return (
    <div className="grid grid-flow-col">
      <div>
        <LeftPaneHomeScreen />
      </div>
      <div>
        <RightPaneHomeScreen className="w-7/12" />
      </div>
    </div>
  );
}

export default Home;
