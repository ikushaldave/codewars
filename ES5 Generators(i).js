// https://www.codewars.com/kata/53c29a6abb5187180d000b65/train/javascript

function generator (sequencer, ...args) {
  return {
    next: sequencer(...args)
  }
}

function dummySeq() {
  return function() {
    return "dummy";
  };
}

function factorialSeq() {
  let currentNum = 0;
  return function() {
    console.log(currentNum)
    if(currentNum == 0 || currentNum == 1) {
      currentNum++;
      return 1;
    } else {
      let result = 1;
      for(let i = 1; i <= currentNum; i++) {
        result *= i;
      } 
      currentNum++;
      return result;
    }
  }
}

function fibonacciSeq() {
  let wholeNum = 1;
  let xMinus1 = null;
  let xMinus2 = null;
  return function() {
    if(wholeNum == 1) {
      xMinus2 = 1;
      return wholeNum++
    } else if(wholeNum == 2) {
      xMinus1 = 1;
      return wholeNum++ && 1;
    } else {
      let result = xMinus1 + xMinus2
      xMinus2 = xMinus1;
      xMinus1 = result;
      return result;
    }
  }
}

function rangeSeq(start, step) {
  let currentNum = start;
  let once = true;
  return function() {
    if (once) {
      once = false;
      return start;
    }
    currentNum += step;
    return currentNum;
  }
}

function primeSeq() {
  let primeNumber = 2;
  let nextNumber = 2;
  return function() {
    if(nextNumber == 2) {
      nextNumber += 1;
      return primeNumber;
    }

    function findNextPrime() {
      for(let i = 2; i < nextNumber; i++) {
        if(nextNumber % i == 0) {
          nextNumber += 1;
          return false;
        }
      }
      primeNumber = nextNumber;
      nextNumber += 1;
      return true;
    }

    let isPrime = findNextPrime()
    
    while(!isPrime) {
      isPrime = findNextPrime()
    }

    return primeNumber;
  }
}

function partialSumSeq(...args) {
  let index = 0
  let result = 0
  return function() {
    result += args[index]
    index++;
    return (result) ? result : new Error('End of sequence error expected');;
  }
}