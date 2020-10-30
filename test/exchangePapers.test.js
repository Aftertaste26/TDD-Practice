const { swap } = require("../src/exchangePapers");

describe("virtual exchange paper", () => {
  it("swap paper with the person adjacent to other person in the classroll with even number of students", () => {
    expect(swap(["A", "B", "C", "D"])).toStrictEqual(["B", "A", "D", "C"]);
  });

  it("swap paper with the person adjacent to other person in the classroll with odd number of students", () => {
    expect(swap(["X", "Y", "Z"])).toStrictEqual(["Y", "Z", "X"]);
  });
});
