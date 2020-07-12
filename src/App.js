import React, { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Bot from "./components/Bot/Bot";
import { botSteps, tollTip } from "./constants";
import { bmiCalculation } from "./utils";
import "./App.scss";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState();
  const [height, setHeight] = useState(0);
  const [botLoading, setBotLoading] = useState(false);
  const [showMessageContainer, setMessageContainer] = useState(false);

  const [typeQuestion, setTypeQuestion] = useState("height");

  const handleSendMessage = (message) => {
    //not accepting empty message
    if (message.trim()) {
      setUserInput(message);
      let newMessageItem = {
        type: "user",
        height: message,
        message: `<div class='message__value'>${message}</div>`
      };
      setMessages([...messages, newMessageItem]);
    }
  };

  //handle click bot

  const handleClickBot = () => {
    setMessageContainer(true);
    setBotLoading(true);
    setTimeout(() => {
      setBotLoading(false);
      setMessages([...messages, botSteps[0]]);
    }, 800);
  };

  const handleCloseBot = () => {
    setMessageContainer(false);
    setMessages([]);
    setTypeQuestion("height");
  };

  useEffect(() => {
    if (messages.length > 0) {
      if (messages[messages.length - 1].type === "user") {
        let selectedBotResponse;
        setBotLoading(true);
        if (!isNaN(userInput) && typeQuestion === "height") {
          setTimeout(() => {
            setBotLoading(false);
            selectedBotResponse = botSteps[2];
            setMessages([...messages, selectedBotResponse]);
            setHeight(parseInt(userInput[0]));
            setTypeQuestion("weight");
          }, 1000);
        } else if (!isNaN(userInput) && typeQuestion === "weight") {
          selectedBotResponse = botSteps[3];
          const result = bmiCalculation(parseInt(userInput[0]), height);
          let newBMIItem = {
            type: "bot",
            id: "BMI",
            botIcon: true,
            message: `<div class='message__value'>${result}</div>`
          };
          setTimeout(() => {
            setBotLoading(false);
            setMessages([...messages, selectedBotResponse, newBMIItem]);
          }, 1000);

          setTypeQuestion("done");
        } else if (userInput.toLowerCase() === "hi") {
          setTimeout(() => {
            setBotLoading(false);
            selectedBotResponse = botSteps[1];
            setMessages([...messages, selectedBotResponse]);
          }, 1000);
        } else if (userInput.toLowerCase() === "abs") {
          selectedBotResponse = botSteps[4];
          setTimeout(() => {
            setBotLoading(false);
            setMessages([...messages, selectedBotResponse]);
          }, 1000);
        } else if (
          userInput.toLowerCase() === "trainer" ||
          userInput.toLowerCase() === "video"
        ) {
          selectedBotResponse = botSteps[5];
          setTimeout(() => {
            setBotLoading(false);
            setMessages([...messages, selectedBotResponse]);
          }, 2000);
        } else if (userInput.toLowerCase().includes("bmi")) {
          selectedBotResponse = botSteps[6];
          setTimeout(() => {
            setBotLoading(false);
            setMessages([...messages, selectedBotResponse]);
          }, 2000);
        } else {
          setBotLoading(true);
          setTimeout(() => {
            setBotLoading(false);
            selectedBotResponse = botSteps[7];
            setMessages([...messages, selectedBotResponse]);
            setTypeQuestion("height");
          }, 1000);
        }
      }
    }
  }, [messages]);
  return (
    <div className="app_container">
      {showMessageContainer && (
        <Card
          messages={messages}
          handleSendMessage={handleSendMessage}
          botLoading={botLoading}
        />
      )}
      <div className="app_bot_conatiner">
        {!showMessageContainer && (
          <div onClick={handleClickBot}>
            <Bot />
            <span className="toll_tip">
              <span className="bot_name">Fitto 👋</span>
              {tollTip}
            </span>
          </div>
        )}
        {showMessageContainer && (
          <span class="material-icons close__wrapper" onClick={handleCloseBot}>
            highlight_off
          </span>
        )}
      </div>
    </div>
  );
};

export default App;
