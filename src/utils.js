export const bmiCalculation = (weight, height) => {
  let finalWeight = weight * 0.45;
  let finalHeight = height * 0.025;

  let BMI = finalWeight / Math.pow(finalHeight, 2);
  console.log(BMI, "bmi");
  if (BMI < 18.5) return "Underweight";
  if (BMI >= 18.5 && BMI <= 25) return "Normal";
  if (BMI >= 25 && BMI <= 30) return "Overweight";
  if (BMI > 30) return "Obese";
};
