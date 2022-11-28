//1. Find the min and max element in the following array and switch their places. Print out the
//modified array in the console.

var nums = [3, 500, 12, 149, 53, 414, 1, 19];

console.log(Math.min.apply(Math, nums));
console.log(Math.max.apply(Math, nums));

function swapElements(nums, i1, i2) {
  let temp = nums[i1];

  nums[i1] = nums[i2];

  nums[i2] = temp;
}
swapElements(nums, 1, 6);

console.log(nums);

// 2. Use the following array to make a new one by dividing its values by two and adding 5. If
// a given element&#39;s value is 0, change it to 20.
// Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]function printParallelArray(first_name, last_name, height, n) {

function sum(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      result.push(20);
      continue;
    } else {
      result[i] = arr[i] / 2 + 5;
    }
  }
  return result;
}
console.log(sum([3, 500, -10, 149, 53, 414, 1, 19]));

// 3. Initialize two arrays. The first one should contain student names, the second one the
// number of points for each student. Display students&#39; names with their corresponding
// grade. Use the following ranges:
// 51-60 -&gt; 6,
// 61-70 -&gt; 7,
// 71-80 -&gt; 8,
// 81-90 -&gt; 9,
// 91-100 -&gt; 10.
// Input:
// [ &quot;Micahel&quot;, &quot;Anne&quot;, &quot;Frank&quot;, &quot;Joe&quot;, &quot;John&quot;, &quot;David&quot;, &quot;Mark&quot;, &quot;Bill&quot; ], [ 50, 39, 63, 72, 99,
// 51, 83, 59 ]
// Output:
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete
// the exam.
function gradeS(arr, sarr, n) {
  var res;
  var grade = "";
  if (sarr[n] < 51) {
    grade = "to complete the exam.";
  } else if (sarr[n] > 51 && sarr[n] < 60) {
    grade = " points and earned 6.";
  } else if (sarr[n] > 61 && sarr[n] < 70) {
    grade = " points and earned 7.";
  } else if (sarr[n] > 71 && sarr[n] < 80) {
    grade = " points and earned 8.";
  } else if (sarr[n] > 81 && sarr[n] < 90) {
    grade = " points and earned 9.";
  } else {
    grade = " points and earned 10.";
  }

  return (res = arr[n] + " acquired " + sarr[n] + grade);
}
var provera = gradeS(
  ["Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"],
  [50, 39, 63, 72, 99, 51, 83, 59],
  6
);
console.log(provera);

// (skip :))Sort a previously defined array. Place its sorted values into a new array whose
// values are equivalent to the first array&#39;s values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

var num = [13, 11, 15, 5, 6, 1, 8, 12];

num.sort(compare);
function compare(a, b) {
  return a - b;
}

console.log(num);

function double(num) {
  if (Array.isArray(num)) {
    return num.map(function (element) {
      return element * 2;
    });
  }
  return num * 2;
}

console.log(double(num));

//6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and
//subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
//be multiplied by 12.5 and displayed in console.
//Output: 2350000

function EvenOddSum(n, a) {
  var sum = 0;

  var even = 0;
  for (var i = 0; i < n; i++) {
    if (i % 2 == 0) {
      var even = even + i;
    }
  }

  for (i = 0; i < a; i++) {
    if (i % 2 != 0) {
      even -= i;
    }
  }
  return even * 12.5;
}

var provera = EvenOddSum(1000, 500);
console.log(provera);

//7. Define a 10 element array. Take the first two letters from every string (that has at least 2
// letters) in the array and create a new string from them. Print it out in the console.
function reverseString(str) {
  var newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

var provera = reverseString(" Belgrade Institute of Technology");
console.log(provera);

//9. Write a program that displays all the combinations of two numbers between 1 and 7.
// Don&#39;t display two of the same numbers at the same time. Display the number of possible
// combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
function CominationsTwo(arr) {
  for (var i = 1; i < arr.length + 1; i++) {
    for (var j = 1; j < arr.length + 1; j++) {
      if (j > i && j != i) {
        console.log(i, j);
      }
    }
  }
}
var provera = CominationsTwo(["1", "2", "3", "4", "5", "6", "7"]);
console.log(provera);

//10. Write a program that checks if the entered number is a prime number (i.e. divisible only
//by 1 and by itself).
//Input: 17 | 15
//Output: true | false
function prime(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
var provera = prime(17);
console.log(provera);

//11. Check if a given string is a palindrome (spaces are ignored).
//Input: eye | Geek | a nut for a jar of tuna
//Output: true | false | true

function palindrome(string) {
  var brojac = string.length - 1;
  for (let i = 0; i < string.length / 2; i++) {
    var x = string[i];
    var y = string[brojac - i];
    if (x != y) {
      return false;
    }
  }
  return true;
}
var provera = palindrome("Geek");
console.log(provera);

//12. Write a program that calculates the greatest common divisor of two integers. Note: The
//greatest common divisor of two non-zero integers is the greatest positive number that
//divides both numbers with no remainder.
//Input: 192 42 | 81 9
//Output: 6 | 9 let a = 12, b = 24;

function Divisor(n1, n2) {
  for (i = 1; i <= n1 && i <= n2; ++i) {
    // Checks if i is factor of both integers
    if (n1 % i == 0 && n2 % i == 0) {
      var j = i;
    }
  }
  console.log(Math.max(j));
}
var provera = Divisor(10, 20);
console.log(provera);
