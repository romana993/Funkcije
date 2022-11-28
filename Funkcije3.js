

// . Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
// [NaN, 0, 15, false, -22, '', undefined, 47, null]

function joinInStr(arr) {
  var result = "";

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === null) {
      continue;
    } else if (isNaN(arr[i])) {
      continue;
    } else if (arr[i] === undefined) {
      continue;
    } else if (arr[i] === Infinity) {
      continue;
    } else {
      result += arr[i];
    }
  }

  console.log(result);
}

joinInStr([NaN, 0, 15, false, -22, "", undefined, 47, null]);

// Write a program to filter out falsy values from the array.

function bouncer(arr) {
  return arr.filter((item) => item);
}
console.log(bouncer([NaN, 0, 15, false, -22, undefined, 47, null]));


// Write a function that reverses a number. The result must be a number.
// 12345 -> 54321 // Output must be a number

function reverse_a_number(n) {
  n = n + "";
  return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(12345)));

// Write a function to get the last element of an array.
// Passing a parameter 'n' will return the  last 'n' elements of the array.
// [7, 9, 0, -2] -> -2
// 4
// [7, 9, 0, -2], 2 -> [0, -2]

function last(array, n) {
  if (array == null){
   return 0;}
  if (n == null){
   return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
}
}

console.log(last([5, 4, 0, 8]));


// Write a function to create a specified number of elements with pre-filled numeric value array.
// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null]

function preFilledNumeric(array, n) {
  array = Array(n).fill(array);
  return array;
}
console.log(  preFilledNumeric(5, 3));

// Write a function that says whether a number is perfect.
//28 -&gt; 28 is a perfect number.
//Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum
//of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known
//as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors
//(including itself).
//E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.

//Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
//perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function perfectN(n) {
  var b = 0;
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      b += i;
    }
  }
  if (b == n) {
    return "Number is perfect!";
  } else {
    return "Number is NOT perfect!";
  }
}
console.log(perfectN(6));

//  Write a function to find a word within a string.
// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"

function search_word(text, word) {
  var x = 0,
    y = 0;
  for (i = 0; i < text.length; i++) {
    if (text[i] == word[0]) {
      for (j = i; j < i + word.length; j++) {
        if (text[j] == word[j - i]) {
          y++;
        }
        if (y == word.length) {
          x++;
        }
      }
      y = 0;
    }
  }
  return "'" + word + "' was found " + x + " times.";
}

console.log(search_word("This is my sister Anne", "sister"));

//  Write a function to hide email address.
// "myemailaddress@bgit.rs" -> "mye...@bgit.rs"

function hideEmail(email) {
  email1 = email.replace(/(.{2})(.*)(?=@)/, "...");
  return email1;
}
console.log( hideEmail("myemailaddress@bgit.rs"));

// Write a program to find the most frequent item of an array.

function mostFrequent(arr1) {
  var mf = 1;
  var m = 0;
  var item;
  for (var i = 0; i < arr1.length; i++) {
    for (var j = i; j < arr1.length; j++) {
      if (arr1[i] == arr1[j]) m++;
      if (mf < m) {
        mf = m;
        item = arr1[i];
      }
    }
    m = 0;
  }
  return item + " ( " + mf + " times ) ";
}
console.log(mostFrequent([3, 2, 2, 4, 3, 9, 3]));
