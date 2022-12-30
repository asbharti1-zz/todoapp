import React from "react";
function Child({ handleChange }) {
  const handleSentValue = (event, val) => {
    event.preventDefault();
    handleChange(val);
  };

  return <button onChange={handleSentValue}>childB</button>;
}
export default Child;
