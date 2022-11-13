// Write a program that calculates the maximum of two given numbers.

function max(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
max(2, 5);

// Write a program that checks if a given number is odd.

function odd(num1) {
  if (num1 % 2 === 1) {
    console.log(num1 + "is odd number");
  } else {
    console.log(num1 + "is evan number");
  }
}
odd(5);
// 3. Write a program that checks if a given number is a three digit long number.
function num3(a) {
  if (a > 99 && a < 999) {
    console.log(a + "is a three digit long number");
  } else {
    console.log(a + "is not a three digit long number");
  }
}
num3(123);
// 4. Write a program that calculates an arithmetic mean of four numbers.

function aR(a, b, c, d) {
  var sum = a + b + c + d;
  var result = 0;
  result = sum / 4;
  return result;
}
result = 0;

console.log(aR(2, 4, 6, 8));

/*5. Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
* *
* *
* *
*****/

function squarePrint(num) {
  var string = "";
  for (i = 0; i < num; i++) {
    for (j = 0; j < num; j++) {
      if (i === 0 || i === num - 1) {
        string += "*";
      } else {
        if (j === 0 || j === num - 1) {
          string += "*";
        } else {
          string += " ";
        }
      }
    }
    string += "\n";
  }
  return string;
}

console.log(squarePrint(5));

/*
//6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * * */

function valueStars(char, val1, val2, val3) {
  if (val1 > 0 && val2 > 0 && val3 > 0) {
    return (
      char.repeat(val1) + "\n" + char.repeat(val2) + "\n" + char.repeat(val3)
    );
  } else {
    return "";
  }
}
console.log(valueStars("*", 5, 3, 7));

//7. Write a program that calculates a number of digits of a given number.

function countDigit(n) {
  var zbir = 0;
  while (n != 0) {
    n = Math.floor(n / 10);
    zbir++;
  }
  return zbir;
}

console.log(countDigit(5678));

//8.Write a program that calculates a number of appearances of a given number in a givenarray.
//Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
//Result: 3

function count(array, element) {
  var counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == element) {
      counter++;
    }
  }
  return counter;
}

console.log(count([2, 4, 7, 8, 7, 7, 1], 7));

//9. Write a program that calculates the sum of odd elements of a given array.

function sumOfOddElements(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sum += array[i];
    }
  }
  return sum;
}
console.log(sumOfOddElements([1, 2, 3, 4, 5, 6, 7]));

//10. Write a program that calculates the number of appearances of a letter a in a given string.
//Modify the program so it calculates the number of both letters a and A.

function appOfLet(string, letter) {
  var numOfApp = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] == letter) {
      numOfApp += 1;
    }
  }
  return numOfApp;
}
result = appOfLet("AnavoliMilovanA".toLowerCase(), "a");

console.log(result);

//11. Write a program that concatenates a given string given number of times. For example, if
//“abc” and 4 are given values, the program prints out abcabcabcabc*/

function repeatString(str, num) {
  if (num > 0) {
    return str.repeat(num);
  } else {
    return "";
  }
}

console.log(repeatString("La", 3));
