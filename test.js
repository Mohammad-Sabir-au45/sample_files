// Q.1 Create a function that takes a number as an input and returns the
// number in words( without using third-party packages).
// Range 1-1000(both number inclcusive)
// For example
// Input -555 Output - FIve hundred and fifty five
// Input -560 Output - FIve hundred and sixty

function numberToWords(num) {
    const units = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
  
    const tens = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];
  
    const teens = [
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
  
    if (num === 0) {
      return "zero";
    }
  
    if (num < 20) {
      return teens[num - 10];
    }
  
    if (num < 100) {
      return (
        tens[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + units[num % 10] : "")
      );
    }
  
    if (num < 1000) {
      return (
        units[Math.floor(num / 100)] +
        " hundred" +
        (num % 100 !== 0 ? " and " + numberToWords(num % 100) : "")
      );
    }
  
    return units[num];
  }
  
  console.log(numberToWords(555));
  