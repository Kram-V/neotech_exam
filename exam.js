// FIRST PROBLEM
class MyExam {
  constructor(int1, int2) {
    this.int1 = int1;
    this.int2 = int2;
  }

  add() {
    return this.int1 + this.int2;
  }

  subtract() {
    return this.int1 - this.int2;
  }

  multiply() {
    return this.int1 * this.int2;
  }

  divide() {
    return this.int1 / this.int2;
  }
}

const firstComputation = new MyExam(2, 5);
console.log(firstComputation.add());

const secondComputation = new MyExam(2, 3);
console.log(secondComputation.subtract());

const thirdComputation = new MyExam(2, 4);
console.log(thirdComputation.multiply());

const fourthComputation = new MyExam(20, 2);
console.log(fourthComputation.divide());

// SECOND PROBLEM
// const a = [
//   "",
//   "one ",
//   "two ",
//   "three ",
//   "four ",
//   "five ",
//   "six ",
//   "seven ",
//   "eight ",
//   "nine ",
//   "ten ",
//   "eleven ",
//   "twelve ",
//   "thirteen ",
//   "fourteen ",
//   "fifteen ",
//   "sixteen ",
//   "seventeen ",
//   "eighteen ",
//   "nineteen ",
// ];
// const b = [
//   "",
//   "",
//   "twenty",
//   "thirty",
//   "forty",
//   "fifty",
//   "sixty",
//   "seventy",
//   "eighty",
//   "ninety",
// ];

// function numberToWords(num) {
//   if ((num = num.toString()).length > 9) return "overflow";
//   n = ("000000000" + num)
//     .substr(-9)
//     .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
//   if (!n) return;
//   var str = "";
//   str +=
//     n[1] != 0
//       ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "crore "
//       : "";
//   str +=
//     n[2] != 0
//       ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh "
//       : "";
//   str +=
//     n[3] != 0
//       ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand "
//       : "";
//   str +=
//     n[4] != 0
//       ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred "
//       : "";
//   str +=
//     n[5] != 0
//       ? (str != "" ? " " : "") +
//         (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) +
//         ""
//       : "";
//   return str;
// }

// document.getElementById("number").onkeyup = function () {
//   document.getElementById("words").innerHTML = numberToWords(
//     document.getElementById("number").value
//   );
// };

// THIRD PROBLEM
function checkAnagram(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

// HELPER FUNCTION FOR ANAGRAM
function buildCharMap(string) {
  const charMap = {};

  for (let char of string.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

// console.log("ANAGRAM: ", checkAnagram("Sorted", "stored"));

// FOURTH PROBLEM
function checkPalindrome(string) {
  let reversed;
  let polishedString;

  if (string.includes(" ")) {
    polishedString = string.replace(/\W+/g, "");
    reversed = polishedString.toLowerCase().split("").reverse().join("");
  } else if (string.includes(",")) {
    polishedString = string.replace(/\W+|,/g, "");
    reversed = polishedString.toLowerCase().split("").reverse().join("");
  } else if (string.includes(",") && string.includes(" ")) {
    polishedString = string.replace(/\W+|,/g, "");
    reversed = polishedString.toLowerCase().split("").reverse().join("");
  } else {
    polishedString = string;
    reversed = polishedString.toLowerCase().split("").reverse().join("");
  }

  if (polishedString === reversed) {
    return true;
  }

  return false;
}

// console.log("PALINDROME:", checkPalindrome("annaq"));

// FIFTH PROBLEM
// const form = document.getElementById("form");
// const output = document.getElementById("output");
// const userInput = document.getElementById("cars");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const payload = new FormData(form);
//   const arrData = [...payload];
//   const userInput = arrData[0][1];

//   output.innerText = userInput;
// });
