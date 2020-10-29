const metricBMI = (weight, height) => {
  const bmi = parseFloat((weight / Math.pow(height / 100, 2)).toFixed(1));

  if (bmi < 18.5) return { weight, height, bmi, status: "Underweight" };
  if (bmi >= 18.5 && bmi <= 24.9)
    return { weight, height, bmi, status: "Normal weight" };
  if (bmi >= 25 && bmi <= 29.9)
    return { weight, height, bmi, status: "Overweight" };
  return { weight, height, bmi, status: "Obesity" };
};

console.log(metricBMI(60, 167));

module.exports = metricBMI;
