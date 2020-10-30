const swap = (classRoll) => {
  for (let index = 0; index < classRoll.length; index += 2) {
    classRoll[index] = classRoll[index + 1];
    classRoll[index + 1] = classRoll[index];
  }

  return classRoll;
};

module.exports = { swap };
