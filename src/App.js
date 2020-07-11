import React, { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import botIcon from "./images/icons8-bot-64.png";
import { botSteps } from "./constants";
import { bmiCalculation } from "./utils";
import "./App.css";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [height, setHeight] = useState(0);
  const [botLoading, setBotLoading] = useState(false);

  const [typeQuestion, setTypeQuestion] = useState("height");
  useEffect(() => {
    setTimeout(() => {
      setMessages([...messages, botSteps[0]]);
    }, 300);
  }, []);

  const handleSendMessage = (message) => {
    if (message.trim()) {
      setUserInput([message]);
      let newMessageItem = {
        type: "user",
        id: message,
        message: `<div class='message__value'>${message}</div>`
      };
      setMessages([...messages, newMessageItem]);
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      if (messages[messages.length - 1].type === "user") {
        let selectedBotResponse;
        setBotLoading(true);
        if (userInput && userInput[0].toLowerCase() === "abs") {
          selectedBotResponse = botSteps[4];
          setTimeout(() => {
            setBotLoading(false);
            setMessages([...messages, selectedBotResponse]);
          }, 1000);
        }
        if (userInput && userInput[0].toLowerCase() === "trainer") {
          selectedBotResponse = botSteps[5];
          setTimeout(() => {
            setBotLoading(false);
            setMessages([...messages, selectedBotResponse]);
          }, 2000);
        }
        if (
          userInput &&
          parseInt(userInput[0]) > 100 &&
          typeQuestion === "height"
        ) {
          setTimeout(() => {
            setBotLoading(false);
            selectedBotResponse = botSteps[2];
            setMessages([...messages, selectedBotResponse]);
            setHeight(parseInt(userInput[0]));
            setTypeQuestion("weight");
          }, 1000);
        }
        if (
          userInput &&
          parseInt(userInput[0]) < 100 &&
          typeQuestion === "weight"
        ) {
          selectedBotResponse = botSteps[3];
          const result = bmiCalculation(parseInt(userInput[0]), height);
          let newBMIItem = {
            type: "bot",
            id: "BMI",
            botIcon: botIcon,
            message: `<div class='message__value'>${result}</div>`
          };
          setTimeout(() => {
            setBotLoading(false);
            setMessages([...messages, selectedBotResponse, newBMIItem]);
          }, 1000);

          setTypeQuestion("done");
        } else if (!typeQuestion === "height") {
          setBotLoading(false);
          selectedBotResponse = botSteps[6];
          setMessages([...messages, selectedBotResponse]);
          setTypeQuestion("weight");
        }

        if (userInput && userInput[0].toLowerCase() === "hi") {
          setTimeout(() => {
            setBotLoading(false);
            selectedBotResponse = botSteps[1];
            setMessages([...messages, selectedBotResponse]);
          }, 1000);
        }

        // if (
        //   !botSteps.find(
        //     (step) => step.id !== userInput && userInput[0].toLowerCase()
        //   )
        // ) {
        //   setBotLoading(true);
        //   setTimeout(() => {
        //     setBotLoading(false);
        //     selectedBotResponse = botSteps[5];
        //     setMessages([...messages, selectedBotResponse]);
        //     setTypeQuestion("height");
        //   }, 1000);
        // }
      }
    }
  }, [messages]);
  return (
    <div className="App">
      <Card
        messages={messages}
        handleSendMessage={handleSendMessage}
        botLoading={botLoading}
      />
    </div>
  );
};

export default App;
