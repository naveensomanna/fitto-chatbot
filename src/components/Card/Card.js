import React, { useRef, useEffect } from "react";
import Messages from "../Messages/Messages";
import BotHead from "../BotHead/BotHead";
import Input from "../Input/Input";
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
          <BotHead />
        </div>
        <div>
          <span>Fitto</span>
          <span>Virtual assistant</span>
        </div>
      </header>
      <section className="messages">
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
