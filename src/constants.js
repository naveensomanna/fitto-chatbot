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
    id: "bmi",
    type: "bot",
    message: "<div class='message__value'>Thanks check out your BMI</div>",
    botIcon: botIcon
  },
  {
    id: "abs",
    type: "bot",
    message:
      "<div class='gif__container'><img src='https://media.giphy.com/media/13beCEg2qPMmIg/giphy.gif'/></div>",
    botIcon: botIcon
  },
  {
    id: "trainer",
    type: "bot",
    message: `<iframe width="200" height="200" src="https://www.youtube.com/embed/zyvjscQVFv8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    botIcon: botIcon
  },

  {
    id: "Invalid Number",
    type: "bot",
    message:
      "<div class='message__value'>Hey, I was not able to understand what you asked for. Please contact our team naveensomanna26@gmail.com?</div>",
    botIcon: botIcon
  }
];

export const tollTip = `Hi! I'm here to help you to give your BMI result.`;
