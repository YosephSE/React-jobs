import React from "react";
import { RotateLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  const overRide = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <RotateLoader
      color="#4338ca"
      loading={loading}
      cssOverride={overRide}
      size={20}
    />
  );
};

export default Spinner;
