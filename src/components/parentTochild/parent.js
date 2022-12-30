import React, { useState } from "react";
import Child from "./child";
const Parent = () => {
  const [val, setVal] = useState("sanjay");
  return (
    <div style={{ display: "flex" }}>
      <Child onChange={(value) => setVal(value)} />
      <div>{val}</div>
    </div>
  );
};

export default Parent;
