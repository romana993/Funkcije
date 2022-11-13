// 1. Write a function to check whether the `input` is a string or not.

var word = "Subota";

if (typeof word === "string") {
  console.log("True");
} else {
  console.log("False");
}

// 2.Write a function to check whether a string is blank or not.

function blank(input) {
  if (input.length === 0) return true;
  else return false;
}

console.log(blank("AAA"));

// 3. Write a function that concatenates a given string n times (default is 1).

function reString(string, num) {
  if (num > 0) {
    return string.repeat(num);
  } else {
    return "";
  }
}

console.log(reString("Ha", 5));

//    4. Write a function to count the number of letter occurrences in a string.

function count(s, c) {
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    //provera slova u stringu
    if (s.charAt(i) == c) res++;
  }
  return res;
}
console.log(count("DanasJeSubota", "a"));

// //        5. Write a function to find the position of the first occurrence of a character in a string. The
// result should be the position of character. If there are no occurrences of the character, the
// function should return -1.

let text = "Danas Je Subota.";
console.log(text.indexOf("t"));
console.log(text.indexOf("z"));

// 6.Write a function to find the position of the last occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.

let text1 = "Danas Je Subota.";
console.log(text1.lastIndexOf("a"));
console.log(text1.lastIndexOf("z"));

// 7. Write a function to convert string into an array. Space in a string should be represented as
// “null” in new array.

function split(ulazniString) {
  var result = [];
  for (var i = 0; i < ulazniString.length; i++) {
    if (ulazniString[i] == " ") {
      result.push("null");
    } else {
      result.push(ulazniString[i]);
    }
  }
  return result;
}
console.log(split("Danas je subota"));

// 8. Write a function that accepts a number as a parameter and checks if the number is prime or
// not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.

function Prime(params) {
  if (params > 0) {
    if (params / params == 1) {
      if (params / 1 == params) {
        return (res = "Its prime number");
      }
    }
  }
  return (res = "Its not prime number");
}

res = Prime(8);
console.log(res);

// 9. Write a function that replaces spaces in a string with provided separator.
// If separator is not provided, use “-” (dash) as the default separator.
// "My random string", "_" -> "My_random_string"
// "My random string", "+" -> "My+random+string"
// "My random string" -> "My-random-string"

function stringSpaces(string, sp = "-") {
  var result = "";

  for (var i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      result += sp;
    } else {
      result += string[i];
    }
  }

  console.log(result);
}

stringSpaces("Danas je subota", "_");

//10. Write a function to get the first n characters and add “...” at the end of newly created string.

function nString(firstString, num) {
  var result = "";
  for (var i = 0; i < num; i++) {
    result += firstString[i];
  }
  result += "...";
  console.log(result);
}
nString("ovo je neki string", 7);

// 11. Write a function that converts an array of strings into an array of numbers. Filter out all
//non-numeric values.

var array = ["2", "cat", "23", "*", "4566"];

var someNewarr = array.filter((value) => /^-?\d+\.?\d*$/.test(value));
console.log(someNewarr);

// //12.Write a function to calculate how many years there are left until retirement based on the
// year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
// already retired, a proper message should be displayed.

function rAge(yearOfBirth, sex) {
  var result = "";
  var age = 2022 - yearOfBirth;

  if (sex === "men") {
    if (age < 65) {
      result = "Years until retirement: " + (65 - age);
    } else {
      result = "Already retired";
    }
  }

  if (sex === "women") {
    if (age < 60) {
      result = "Years until retirement: " + (60 - age);
    } else {
      result = "Already retired";
    }
  }

  console.log(result);
}
rAge(1993, "women");

// 13. Write a function to humanize a number (formats a number to a human-readable string) with
//the correct suffix such as 1st, 2nd, 3rd or 4th.

function humanizeNum(num) {
  var result = "";

  var first10 = num % 10;
  var others = num % 100;

  if (first10 === 1 && others !== 11) {
    result = num + "st";
  } else if (first10 === 2 && others !== 12) {
    result = num + "nd";
  } else if (first10 === 3 && others !== 13) {
    result = num + "rd";
  } else {
    result = num + "th";
  }
  console.log(result);
}
