const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

const getUserNumberInput = () => {
  return parseInt(userInput.value);
};

const creatAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
};

const writeToLog = (operationId, previousResult, operationNum, newRes) => {
  const logEntry = {
    operation: operationId,
    prevResult: previousResult,
    number: operationNum,
    result: newRes,
  };
  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries);
};

const calculateResult = (calculationType) => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  }
  
  creatAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

const add = () => {
  calculateResult('ADD');
};

const subtract = () => {
  calculateResult('SUBTRACT');
};

const divide = () => {
  calculateResult('DIVIDE');
};

const multiply = () => {
  calculateResult('MULTIPLY');
};

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
divideBtn.addEventListener("click", divide);
multiplyBtn.addEventListener("click", multiply);
