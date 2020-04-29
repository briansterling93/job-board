import React, { useContext } from "react";
import { StateContext } from "../contexts/StateContext.js";

const QueriedJob = () => {
  // useEffect(() => {
  //   window.onbeforeunload = function () {
  //     return "Changes you made may not be saved";
  //   };                                                        //add functionality to send ui to home screen once this component is refreshed in the browser
  // }, []);
  const { state } = useContext(StateContext);
  return (
    <div id="all-main">
      <div id="all-secondary">
        <div id="testtt">{state.queriedJob}</div>
      </div>
    </div>
  );
};

export default QueriedJob;
