import React from "react";
import "./Messages.scss";

const MessageItem = (props) => {
  let messageSender = props.botIcon ? "item__left" : "item__right";
  return (
    <div className={"conv__messageItem " + messageSender}>
      {props.botIcon && (
        <img src={props.botIcon} alt="bot icon" className="bot__icon" />
      )}
      <div
        className="message__wrapper"
        dangerouslySetInnerHTML={{ __html: props.message }}
      ></div>
    </div>
  );
};

export default MessageItem;
