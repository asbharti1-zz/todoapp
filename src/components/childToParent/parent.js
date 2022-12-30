import React, { useState } from "react";
import Child from "./child";
const Parents = () => {
  const [value, setValue] = useState("");
  const handleChange = (childData) => {
    setValue({ value: childData });
  };

  return (
    <>
      <Child handleChange={handleChange} />
      {value}
    </>
  );
};
export default Parents;
