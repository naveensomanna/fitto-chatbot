import botIcon from "./images/icons8-bot-64.png";

export const botSteps = [
  {
    id: "Greet",
    type: "bot",
    message:
      "<div class='message__value'>Welcome to Fitto</div><div class='message__value'>Please type your height (cm)</div>",
    botIcon: botIcon
  },
  {
    id: "Hi",
    type: "bot",
    message: "<div class='message__value'>Hello!</div>",
    botIcon: botIcon
  },
  {
    id: "height",
    type: "bot",
    message: "<div class='message__value'>Please type your weight (kg)</div>",
    botIcon: botIcon
  },
  {
    id: "Thanks",
    type: "bot",
    message: "<div class='message__value'>Thanks check out your BMI</div>",
    botIcon: botIcon
  },
  {
    id: "Goals",
    type: "bot",
    message:
      "<div class='gif__container'><img src='https://media.giphy.com/media/13beCEg2qPMmIg/giphy.gif'/></div>",
    botIcon: botIcon
  },
  {
    id: "Invalid Number",
    type: "bot",
    message:
      "<div class='message__value'>Hey, the value you entered seems to be invalid. Can you please try again?</div>",
    botIcon: botIcon
  }
];
