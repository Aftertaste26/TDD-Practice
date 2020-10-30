const { swap, counterClockWise } = require("../src/exchangePapers");

describe("virtual exchange paper", () => {
  it("swap paper with the person adjacent to other person in the classroll with even number of students", () => {
    expect(swap(["A", "B", "C", "D"])).toStrictEqual(["B", "A", "D", "C"]);
  });

  it("swap paper with the person adjacent to other person in the classroll with odd number of students", () => {
    expect(swap(["X", "Y", "Z"])).toStrictEqual(["Y", "Z", "X"]);
  });

  it("Rotate the list on 3 counts.", () => {
    expect(
      counterClockWise(3, ["A", "B", "C", "D", "E", "F", "G"])
    ).toStrictEqual(["E", "F", "G", "A", "B", "C", "D"]);
  });

  it("Rotate the list on 5 counts.", () => {
    expect(
      counterClockWise(5, ["A", "B", "C", "D", "E", "F", "G"])
    ).toStrictEqual(["C", "D", "E", "F", "G", "A", "B"]);
  });
});
