const metricBMI = require("./BMI.js");

describe("get BMI", () => {
  it("solves for BMI", () => {
    expect(metricBMI(60, 167)).toBe({
      bmi: 21.5,
      height: 167,
      status: "Normal",
      weight: 60,
    });
  });
});
