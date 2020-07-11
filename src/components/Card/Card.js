import React from "react";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";
import botIcon from "../../images/icons8-bot-64.png";
import { tollTip } from "../../constants";
import "./Card.scss";

const Card = ({ messages, handleSendMessage, botLoading }) => {
  return (
    <section className="card__container">
      <header>
        <div className="bot_icon">
          <img src={botIcon} alt="bot icon" />
          <span className="toll_tip">
            <span className="bot_name">Fitto 👋</span>
            {tollTip}
          </span>
        </div>
        <div>
          <span>Fitto</span>
          <span>Virtual assistant</span>
        </div>
      </header>
      <section className="messages">
        <Messages messages={messages} botLoading={botLoading} />
      </section>
      <footer className="input__messanger">
        <Input handleSendMessage={handleSendMessage} />
      </footer>
    </section>
  );
};

export default Card;
