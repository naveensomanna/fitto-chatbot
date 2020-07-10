import React from "react";
import MessageItem from "./MessageItem";
import "./Messages.scss";
const Messages = (props) => {
  return (
    <div>
      {props.messages &&
        props.messages.map((message, index) => {
          return (
            <MessageItem
              key={index}
              message={message.message}
              botIcon={message.botIcon}
              botLoading={props.botLoading}
            />
          );
        })}
      {props.botLoading && <span className="dot__pulse"></span>}
    </div>
  );
};

export default Messages;
