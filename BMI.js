const metricBMI = (weight, height) => {
  const bmi = parseFloat((weight / Math.pow(height / 100, 2)).toFixed(1));

  const status =
    bmi < 18.5
      ? "Underweight"
      : bmi >= 18.5 && bmi <= 24.9
      ? "Normal weight"
      : bmi >= 25 && bmi <= 29.9
      ? "Overweight"
      : "Obesity";

  return { weight, height, bmi, status };
};

const englishBMI = (weight, { feet, inches }) => {
  const height = { feet, inches };
  const bmi = parseFloat(
    ((703 * weight) / Math.pow(feet * 12 + inches, 2)).toFixed(1)
  );

  const status =
    bmi < 18.5
      ? "Underweight"
      : bmi >= 18.5 && bmi <= 24.9
      ? "Normal weight"
      : bmi >= 25 && bmi <= 29.9
      ? "Overweight"
      : "Obesity";

  return { weight, height, bmi, status };
};

module.exports = { metricBMI, englishBMI };
