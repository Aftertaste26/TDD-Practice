const { metricBMI, englishBMI, bmi } = require("../src/BMI.js");

describe("get BMI", () => {
  it("solves for BMI(metric)", () => {
    expect(metricBMI(60, 167)).toStrictEqual({
      bmi: 21.5,
      height: 167,
      status: "Normal weight",
      weight: 60,
    });
  });

  it("solves for BMI(english)", () => {
    expect(englishBMI(132, { feet: 5, inches: 6 })).toStrictEqual({
      bmi: 21.3,
      height: { feet: 5, inches: 6 },
      status: "Normal weight",
      weight: 132,
    });
  });

  it("solves for BMI with english unit", () => {
    expect(bmi(132, { feet: 5, inches: 6 }, "english")).toStrictEqual({
      bmi: 21.3,
      height: { feet: 5, inches: 6 },
      status: "Normal weight",
      weight: 132,
    });
  });

  it("solves for BMI with metric unit", () => {
    expect(bmi(60, 167, "metric")).toStrictEqual({
      bmi: 21.5,
      height: 167,
      status: "Normal weight",
      weight: 60,
    });
  });
});
