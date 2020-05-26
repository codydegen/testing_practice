function arrayAnalysis(array) {
  const length = array.length;
  let average = null;
  let minimum = null;
  let maximum = null;
  if (length !== 0) {
    minimum = Infinity;
    maximum = -Infinity;
    let sum = 0;
    for (let i=0; i<length; i++){
      if (array[i] < minimum) minimum = array[i];
      if (array[i] > maximum) maximum = array[i];
      sum+=array[i];
    }
    average = sum/length;
  }


  return {
    average: average,
    min: minimum,
    max: maximum,
    length: length,
  }
};
console.log(arrayAnalysis([]))
module.exports = arrayAnalysis;