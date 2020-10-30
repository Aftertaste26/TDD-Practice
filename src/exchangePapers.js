const swap = (classRoll) => {
  let output = [];
  for (let index = 0; index < classRoll.length; index += 2) {
    if (classRoll.length % 2 !== 0 && index === classRoll.length-1) {
      output[index-1] = classRoll[index];
      output[index] = classRoll[index - 2];
    } else {
      output[index] = classRoll[index + 1];
      output[index + 1] = classRoll[index];
    }
  }
  return output;
};

const counterClockWise = (n, classroll) => {
  let output = [];
  for (const index in classroll) {
    output = [
      ...output,
      classroll[(classroll.length - n + Number(index)) % classroll.length],
    ];
  }

  return output;
};


module.exports = { swap, counterClockWise };
