import React, { useState } from "react";
import "./Input.scss";

const Input = ({ handleSendMessage }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  const handleSubmit = () => {
    handleSendMessage(value); //callback function
    setValue("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="input__container">
      <input
        type="text"
        placeholder="Write something"
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <div className="send__button" onClick={handleSubmit}>
        <i className="material-icons">send</i>
      </div>
    </div>
  );
};

export default Input;
