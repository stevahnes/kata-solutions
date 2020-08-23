// Variables
let index = 0;
let testNumber = 0;
let itemsCount = 0;
let searchCount = 0;
let isStart = true;
let itemsArray = [];

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
  } else if (itemsCount === 0 && searchCount === 0) {
    // split based on space
    let lineArray = line.split(" ");
    itemsCount = parseInt(lineArray[0]);
    searchCount = parseInt(lineArray[1]);
    process.stdout.write(`Case ${++index}:\n`);
  } else if (itemsCount > 0) {
    itemsArray.push(line);
    itemsCount--;
  } else if (itemsCount === 0 && searchCount > 0) {
    process.stdout.write(`${performSearch(line, itemsArray)}\n`);
    searchCount--;
    if (searchCount === 0) {
      // perform reset
      testNumber--;
      itemsArray.length = 0;
    }
  }
}

function performSearch(line, items) {
  let count = 0;
  items.forEach((item) => {
    if (item.match(new RegExp(`${line}\\b`))) {
      count++;
    }
  });
  //   items.forEach((item) => {
  //     let isMatch = false;
  //     let searchPointer = 0; // points to charInd of str
  //     for (let i = 0; i < item.length; i++) {
  //       if (item[i] === line[searchPointer]) {
  //         isMatch = true;
  //         searchPointer++;
  //         if (!line[searchPointer] && isMatch) {
  //           if (!item[i + 1] || !item[i + 1].match(/[a-z0-9]/)) {
  //             count++;
  //             searchPointer = 0;
  //             break;
  //           }
  //         }
  //       } else {
  //         isMatch = false;
  //         searchPointer = 0;
  //       }
  //     }
  //   });
  return count;
}
