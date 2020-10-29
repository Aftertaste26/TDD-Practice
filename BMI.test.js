const { metricBMI, englishBMI } = require("./BMI.js");

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
});
