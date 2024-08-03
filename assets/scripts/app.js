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
  if (
    calculationType !== "ADD" &&
    calculationType !== "SUBTRACT" &&
    calculationType !== "MULTIPLY" &&
    calculationType !== "DIVIDE" ||
     !enteredNumber
  ) {
    return;
  } else {
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === "ADD") {
      currentResult += enteredNumber;
      mathOperator = "+";
    } else if (calculationType === "SUBTRACT") {
      currentResult -= enteredNumber;
      mathOperator = "-";
    } else if (calculationType === "DIVIDE") {
      currentResult /= enteredNumber;
      mathOperator = "/";
    } else if (calculationType === "MULTIPLY") {
      currentResult *= enteredNumber;
      mathOperator = "*";
    }

    creatAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
  }
};

addBtn.addEventListener("click", calculateResult.bind(this, 'ADD'));
subtractBtn.addEventListener("click", calculateResult.bind(this, 'SUBTRACT'));
divideBtn.addEventListener("click", calculateResult.bind(this, 'DIVIDE'));
multiplyBtn.addEventListener("click", calculateResult.bind(this, 'MULTIPLY'));
