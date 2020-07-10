import React, { useState } from "react";
import styles from "./Input.module.scss";

const Input = ({ handleSendMessage }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  const handleSubmit = () => {
    handleSendMessage(value);
    setValue("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder="Write something"
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <div className={styles.sendButton} onClick={handleSubmit}>
        <i className="material-icons">send</i>
      </div>
    </div>
  );
};

export default Input;
