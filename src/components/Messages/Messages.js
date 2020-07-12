import React, { useRef, useEffect } from "react";
import MessageItem from "./MessageItem";
import "./Messages.scss";
const Messages = (props) => {
  const typingNode = useRef(null);
  const scrollToBottom = () => {
    typingNode.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (props.botLoading) {
      scrollToBottom();
    }
  }, [props.botLoading]);
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
      {props.botLoading && (
        <span ref={typingNode} className="dot__pulse"></span>
      )}
    </div>
  );
};

export default Messages;
