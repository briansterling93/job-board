import React, { useContext } from "react";
import { StateContext } from "../contexts/StateContext.js";

const QueriedJob = () => {
  const { state, dispatch } = useContext(StateContext);
  return (
    <div id="all-main">
      <div id="all-secondary">{state.queriedJob}</div>
    </div>
  );
};

export default QueriedJob;
