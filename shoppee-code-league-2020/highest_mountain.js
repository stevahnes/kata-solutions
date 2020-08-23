// Variables
let isStart = true;
let index = 0;
let length = 0;
let mountainRange = [];

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
  lines.forEach((line) => processLine(line.trim()));
}

function processLine(line) {
  // if first line, get number of test cases
  if (isStart) {
    testNumber = parseInt(line);
    isStart = false;
  } else if (line && length === 0) {
    length = parseInt(line);
  } else if (line) {
    process.stdout.write(`Case #${++index}: `);
    // split based on space
    let mountainRange = line.split(" ");
    process.stdout.write(findHighestMountain(mountainRange, length));
    length = 0;
  }
}

function findHighestMountain(items, length) {
  let mountainIndex = -1;
  let highestPeak = -1;
  let isGrounded = false;
  let isDescent = false;
  let candidateHighestPeak = -1;
  let candidateMountainIndex = -1;
  const limit = Math.min(length, items.length);
  for (let index = 0; index < limit; index++) {
    item = parseInt(items[index], 10);
    prevItem = parseInt(items[index - 1], 10);
    if (item === 1) {
      // always set grounded when item is 1
      isGrounded = true;
      // candidatePeak is present and still valid descent
      if (isDescent && candidateHighestPeak > -1 && item - prevItem === -1) {
        highestPeak = candidateHighestPeak;
        mountainIndex = candidateMountainIndex;
      } else if (highestPeak === -1) {
        highestPeak = item;
        mountainIndex = index;
      }
      // neutralize height after all the candidate setting
      isDescent = false;
    }
    if (isGrounded) {
      if (item != 1) {
        // if ascending, keep updating highest peak as long as it's higher than current peak
        if (item - prevItem === 1 && item > highestPeak) {
          highestPeak = item;
          mountainIndex = index;
          // if descending or a jump, remove isGrounded flag
        } else if (item - prevItem <= -1 || item - prevItem > 1) {
          isGrounded = false;
        }
      }
    } else {
      if (item != 1) {
        // if a higher peak is found but not grounded, take it as candidate
        if (item > highestPeak && item - prevItem !== -1) {
          candidateHighestPeak = item;
          candidateMountainIndex = index;
          isDescent = true;
          // if candidateHighestPeak is present
        } else if (candidateHighestPeak > -1) {
          // if descending, reset candidate
          if (item - prevItem === -1) {
            isDescent = true;
          } else {
            candidateHighestPeak = -1;
            candidateMountainIndex = -1;
            isDescent = false;
          }
        }
      }
    }
  }
  return `${highestPeak} ${mountainIndex}\n`;
}
