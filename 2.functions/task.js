function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
          min = arr[i];
      }
      if (arr[i] > max) {
          max = arr[i];
      }
      sum += arr[i];
  }

  let avg = sum / arr.length;
  avg = parseFloat(avg.toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }

    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    return sum;
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }

    const max = Math.max(...arr);
    const min = Math.min(...arr);

    return max - min;
}

function differenceEvenOddWorker(...arr) {
    let sumEvenElement = 0;
    let sumOddElement = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i];
        } else {
            sumOddElement += arr[i];
        }
    }

    return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
    let sumEvenElement = 0;
    let countEvenElement = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i];
            countEvenElement++;
        }
    }

    if (countEvenElement === 0) {
        return 0;
    }

    return sumEvenElement / countEvenElement;

}

function makeWork (arrOfArr, func) {
    let maxWorkerResult = -Infinity;

    for (let i = 0; i < arrOfArr.length; i++) {
        const currentResult = func(...arrOfArr[i]);
        if (currentResult > maxWorkerResult) {
            maxWorkerResult = currentResult;
        }
    }

    return maxWorkerResult;
}