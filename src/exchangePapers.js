const swap = (classRoll) => {
  let output = [];
  for (let index = 0; index < classRoll.length; index += 2) {
    if (classRoll.length % 2 != 0 && index == classRoll.length - 1) {
      index--;
      output[index] = classRoll[index + 1];
      output[index + 1] = classRoll[index - 1];
    } else {
      output[index] = classRoll[index + 1];
      output[index + 1] = classRoll[index];
    }
  }
  return output;
};

module.exports = { swap };