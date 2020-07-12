import React from "react";
import "./Messages.scss";
import BotHead from "../BotHead/BotHead";

const MessageItem = (props) => {
  let messageSender = props.botIcon ? "item__left" : "item__right";
  return (
    <div className={"conv__messageItem " + messageSender}>
      {props.botIcon && (
        <div className="bot__icon">
          <BotHead />
        </div>
      )}
      <div
        className="message__wrapper"
        dangerouslySetInnerHTML={{ __html: props.message }}
      ></div>
    </div>
  );
};

export default MessageItem;
