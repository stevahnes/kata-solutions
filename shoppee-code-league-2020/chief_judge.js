// Variables
let index = 0;
let testNumber = 0;
let isStart = true;
let isRequirement = false;
let serverCount = 0;
let requiredCount = 0;
let decisionArray = [];
let maxPriceToIndexArray = [];

// Sample code to perform I/O:
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += `${input}`; // Reading input from STDIN
});

process.stdin.on("end", function () {
  main(stdin_input);
});

function main(input) {
  // split input string
  let lines = input.split("\n");
  lines.forEach((line) => processLine(line));
}

function processLine(line) {
  // if first line, get number of test cases
  if (isStart) {
    testNumber = parseInt(line);
    isStart = false;
    isRequirement = true;
  } else if (isRequirement) {
    // handle and store requirements
    let lineArray = line.split(" ");
    serverCount = parseInt(lineArray[0]);
    requiredCount = parseInt(lineArray[1]);
    process.stdout.write(`Case ${++index}:\n`);
    isRequirement = false;
  } else {
    let prices = line.split(" ");
    findLowestCost(prices, requiredCount);
  }
}

function findLowestCost(prices, required) {
  prices.forEach((price, index) => {
    let serverDetails = priceFreeIndex(price, index);
  });
}

function priceFreeIndex(price, index) {
  // get the more expensive one as free
  let freeIndex = price[index + 1]
    ? price[index - 1]
      ? price[index - 1] <= price[index + 1]
        ? index - 1
        : index + 1
      : index + 1
    : index - 1;
  return [index, price, freeIndex];
}
