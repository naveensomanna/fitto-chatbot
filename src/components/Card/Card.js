import React, { useRef, useEffect } from "react";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";
import botIcon from "../../images/icons8-bot-64.png";
import { tollTip } from "../../constants";
import "./Card.scss";

const Card = ({ messages, handleSendMessage, botLoading }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <section className="card__container">
      <header>
        <div className="bot_icon">
          <img src={botIcon} alt="bot icon" />
        </div>
        <div>
          <span>Fitto</span>
          <span>Virtual assistant</span>
        </div>
      </header>
      <section className="messages" id="messages">
        <Messages messages={messages} botLoading={botLoading} />
        <div ref={messagesEndRef} />
      </section>
      <footer className="input__messanger">
        <Input handleSendMessage={handleSendMessage} />
      </footer>
    </section>
  );
};

export default Card;
