import React from "react";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";
import botIcon from "../../images/icons8-bot-64.png";
import styles from "./Card.module.scss";

const Card = ({ messages, handleSendMessage, botLoading }) => {
  return (
    <section className={styles.cardContainer}>
      <header>
        <img src={botIcon} alt="bot icon" />
        <span>Virtual assistant</span>
      </header>
      <section className={styles.messages}>
        <Messages messages={messages} botLoading={botLoading} />
      </section>
      <footer className={styles.inputMessanger}>
        <Input handleSendMessage={handleSendMessage} />
      </footer>
    </section>
  );
};

export default Card;
