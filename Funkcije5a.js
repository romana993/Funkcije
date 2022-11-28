// 1. Napisati funkciju u JavaScript-u koja na osnovu niza 6 različitih citata i autora,
// ispisuje na stranici po jedan citat, ali tako da se citat promeni kada se program
// pokrene.

function Quote(array) {
  const citat = array[Math.floor(Math.random() * array.length)];
  return citat;
}
console.log(
  Quote([
    "Prvi autor; prvi citat",
    "Drugi autor; drugi citat",
    "Treci autor; prvi citat",
    "Cetvrti autor; prvi citat",
    "Peti autor; prvi citat",
    "Sesti autor; prvi citat",
  ])
);

/*2. Napisati funkciju koja za godinu (kao ceo pozitivan broj) proverava da li je
prestupna. Godina je prestupna ako je deljiva sa 4 i nije godina veka (znači ako
nije deljiva sa 100 - 1900. nije bila prestupna). Od toga odstupa svaka četvrta
godina veka (znači ako je deljiva sa 400, onda je ipak prestupna - npr. 2000. je
prestupna).*/

function year(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return "Ovo je prestupna godina!";
  } else {
    return "Ovo nije prestupna godina!";
  }
}

console.log(year(1900));

// 3. Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima
// samoglasnika i koliko suglasnika.

const vowelsCount = function (str) {
  var countSamoglasnici = 0;
  var countSuglasnici = 0;
  str = str.toLowerCase().split(/\s/).join("");
  for (var i = 0; i < str.length; i++) {
    var element = str[i];
    console.log(str[i]);
    if (
      element == "a" ||
      element == "e" ||
      element == "i" ||
      element == "o" ||
      element == "u"
    ) {
      countSamoglasnici++;
    } else {
      countSuglasnici++;
    }
  }
  return `u recenici ${str} ima ${countSuglasnici} suglasnika i ${countSamoglasnici} samoglasnika`;
};

console.log(vowelsCount("Nekistring"));

// 4. Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove
// podataka pojedinačnih elemenata ulaznog niza.
function tipEl(array) {
  var tipoviPodataka = [];
  for (let i = 0; i < array.length; i++) {
    tipoviPodataka[i] = typeof array[i];
  }
  return tipoviPodataka;
}
console.log(tipEl([12, "pp", true, "as23s", "00sd"]));

/*5. Kreirati funkciju koja prijvata niz stringova kao ulayni parametar, a na izlazu
ispisuje samo stringove koji u sebi ne sadrže brojeve. Primer: ulazni niz [“12bb”,
“pp”, “as23s”, “00sd”] => rezultat [“pp”].*/

function stringWithoutNumbers(arr) {
  var newArr = arr.filter(function (a) {
    return !/[0-9]/.test(a);
  });
  return newArr;
}

console.log(stringWithoutNumbers(["12bb", "pp", "as23s", "00sd"]));

/*6. Kreirati funkciju koja prima string a kao rezultat ispisuje niz koji u sebi ima:
dužinu stringa, prvi karakter stringa, poslednji karakter, središnji karakter ako
string ima neparan broj znakova odnosno središnja dva karaktera ako ima paran
broj znakova, indeks drugog ponavljanja drugog karaktera u formatu “@ Index # ”
ili “not found” ako nema ponavljanja.
Primer 1: ""Computer""="" [8, ""C"", ""r"", ""pu"";, ""not found""] ,
Primer 2: ""Science"" ="" [7, ""S"", ""e"", ""e"", ""@ index 5""]*/

function strLength(string = "") {
  let newAr = [];
  newAr.push(string.length);
  newAr.push(string.substring(0, 1));
  newAr.push(string.substr(string.length - 1, 1));

  if (string.length % 2 === 0) {
    const i = string.length / 2 - 1;
    newAr.push(string.substr(i, 2));
  } else {
    const i = Math.floor(string.length / 2);
    newAr.push(string.substr(i, 1));
  }

  const char = string[1];
  let output = "not found";
  string.split("").forEach((item, i) => {
    if (char === item && i !== 1) {
      output = "@ index " + i;
    }
  });
  newAr.push(output);
  return newAr;
}

console.log(strLength("Computer"));
console.log(strLength("Science"));

/*7. Dat je ulazni niz [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8] gde se svaki element ponavlja
bar jednom osim dva elementa. Kreirati funkciju koja ispisuje dva elementa koja
se ne ponavljaju.  
*/

function noRepeat(arr) {
  for (let index = 0; index < arr.length; index++) {
    const currNumber = arr[index];
    const length = arr.filter((item) => item === currNumber).length;
    if (length <= 1) {
      console.log(currNumber);
    }
  }
}

noRepeat([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]);

/*8. Kreirati funkciju koja ulazni niz deli u pod nizove duzine N i ispisuje ih.
Primer 1: ([2, 3, 4, 5], N=2) => [[2, 3], [4, 5]]
Primer 2: ([2, 3, 4, 5, 6], N=3) => [[2, 3, 4], [5, 6]]*/

function splitArray(arr, n) {
  var arr1 = arr.slice(0, n);
  var arr2 = arr.slice(n, arr.length);
  return (
    "[" + "[" + arr1.join(", ") + "]" + ", " + "[" + arr2.join(", ") + "]" + "]"
  );
}
console.log(splitArray([2, 3, 4, 5, 6], 3));
