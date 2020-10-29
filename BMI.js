const metricBMI = (weight, height) => {
  const bmi = weight / height;

  if (bmi < 18.5) return { weight, height, bmi, status: "Underweight" };
  if (bmi >= 18.5 && bmi <= 24.9)
    return { weight, height, bmi, status: "Normal weight" };
  if (bmi >= 25 && bmi <= 29.9)
    return { weight, height, bmi, status: "Overweight" };
  return { weight, height, bmi, status: "Obesity" };
};

module.exports = metricBMI;
