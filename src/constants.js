import bmiChart from "./images/bmi-chartm.jpg";

export const botSteps = [
  {
    id: "Greet",
    type: "bot",
    message:
      "<div class='message__value'>Welcome to Fitto</div><div class='message__value'>Please type your height (inches)</div>",
    botIcon: true
  },
  {
    id: "Hi",
    type: "bot",
    message: "<div class='message__value'>Hello!</div>",
    botIcon: true
  },
  {
    id: "height",
    type: "bot",
    message:
      "<div class='message__value'>Please type your weight (pounds)</div>",
    botIcon: true
  },
  {
    id: "bmi",
    type: "bot",
    message: "<div class='message__value'>Thanks check out your BMI</div>",
    botIcon: true
  },
  {
    id: "abs",
    type: "bot",
    message:
      "<div class='gif__container'><img src='https://media.giphy.com/media/13beCEg2qPMmIg/giphy.gif'/><p>Abs workout for beginners</p></div>",
    botIcon: true
  },
  {
    id: "trainer",
    type: "bot",
    message: `<div class="video__container"><iframe src="https://www.youtube.com/embed/zyvjscQVFv8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`,
    botIcon: true
  },
  {
    id: "what is bmi",
    type: "bot",
    message: `<div class='card__bmi'><img src=${bmiChart} alt='bmi image'/><p>Body mass index (BMI) is a value derived from the mass (weight) and height of a person.</p> <a href='https://en.wikipedia.org/wiki/Body_mass_index' target='_blank'>https://en.wikipedia.org/wiki/Body_mass_index</a></div>`,
    botIcon: true
  },
  {
    id: "Invalid",
    type: "bot",
    message:
      "<div class='message__value'>Hey, I was not able to understand what you asked for. Please contact our team naveensomanna26@gmail.com.</div>",
    botIcon: true
  }
];

export const tollTip = `Hi! I'm here to help you to give your BMI result.`;
