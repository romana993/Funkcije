/*
1. Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
*/

function fortuneTeller(childNum, partner, location, job) {
    return "You will be a " + job + " in " + location + ", and married to " + partner + " with " + childNum + " kids."; 
}

console.log(fortuneTeller(2, "Slavica", "Uzice", "Engineer"));
console.log(fortuneTeller(1, "Milan", "Novi Sad", "Driver"));
console.log(fortuneTeller(5, "Natasa", "Beograd", "Worker"));


/*
2. You know how old your dog is in human years, but what about dog years? Calculate it!
Write a function named calculateDogAge that:
    - takes 1 argument: your puppy's age.
    - calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
    - outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(dogage, humanage) {
    return "Your doggie is " + (dogage * 7) + " years old in dog years, and " + humanage + " in human age!";
    
}

console.log(calculateDogAge(7, 49));
console.log(calculateDogAge(3, 21));
console.log(calculateDogAge(1, 7));


/*
3. Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
    - takes 2 arguments: age, amount per day.
    - calculates the amount consumed for rest of the life (based on a constant max age).
    - outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

function lifetimeSupply(age, amountPerDay) {
    var _NN =parseInt((85 - age) * 365 * amountPerDay);

    return "You will need " + _NN + " to last you until the ripe old age of 85."
    
}

console.log(lifetimeSupply(50, 2));
console.log(lifetimeSupply(30, 1));
console.log(lifetimeSupply(60, 3));


/*
4. It's hot out! Let's make a converter based on the steps here.
Create a function called celsiusToFahrenheit:
    - Store a celsius temperature into a variable.
    - Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:
    - Now store a fahrenheit temperature into a variable.
    - Convert it to celsius and output "NN°F is NN°C."
*/

function centigradeToFahrenheit(centigrade) {

    return (centigrade * (9 / 5)) + 32;
    
}

var a = 0;
console.log(centigradeToFahrenheit(a));


function fahrenhiteToCentigrade(fahrenhite) {

    return ((fahrenhite - 32) * (5 / 9));
    
}

var a = 35;
console.log(fahrenhiteToCentigrade(a));

/*5. Create a function that validates a password to conform to the following rules:
 Length between 6 and 24 characters,
 At least one uppercase letter (A-Z).
 At least one lowercase letter (a-z).
 At least one digit (0-9).
 Maximum of 2 repeated characters (“aa” is OK, “aaa” is NOT).
 Supported special characters: ! @ # $ % ^ &amp; * ( ) + = _ - { } [ ] : ; &quot; &#39; ? &lt; &gt; , .
 Examples: validatePassword(&quot;P1zz@&quot;) ➞ false // Too short.
 validatePassword(&quot;iLoveYou&quot;) ➞ false // Missing a number.
 validatePassword(&quot;Fhg93@&quot;) ➞ true // OK!*/

function validatePassword (password) {
    var resultMessage = "";
    var provera= 0
    var uppercaseLetter=0;
    var lowercaseLetter=0;
    var number=0;
    var repeatedCh=0;
    var supportedCh=0;

    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   const alphabetLow = alphabet.map(e => e.toLowerCase());
   const specialSy = ["!", "@", "#", "$" ,"%", "^", "*", "(", ")", "+", "=", "_" ,"-" , "{","}", "[", "]", ":",";","\"","\'","?","<",">",",","."];
   const num= ["0","1","2","3","4","5","6","7","8","9"];
   const merged = [...alphabet, ...alphabetLow,...specialSy,...num];

   if( password.length <6 && password.length > 24) {
    resultMessage= "Duzina mora biti izmedju 6 i 24 karaktera";
    provera=1
   }
   for(var i=0; i < password.length; i++) {
if (alphabet.includes(password[i])){
    uppercaseLetter++;
}
if(alphabetLow.includes(password[i])) {
    lowercaseLetter++;
}
if( num.includes(password[i])) {
    number++;
}
if(password[i]==password[i+1] && password[i]==password[i+2]) {
    repeatedCh++;
}
if(merged.includes(password[i])){
    supportedCh++;
}
   }

   if (uppercaseLetter==0) {
    resultMessage=" Mora da sadrzi bar jedno veliko slovo";
    provera=1;
   }
   if(lowercaseLetter== 0){
    resultMessage = "Mora da sadrzi bar jedno malo slovo";
    provera=1;
   }
   if(number== 0) {
    resultMessage = " Mora da sadrzi bar jedan broj izmeedju 0 i 9" ;
    provera=1;

   }

   if(repeatedCh !=0){
    resultMessage = "Dozvoljeno je max 2 ponavljanja istog karaktera";
    provera=1
   }
   if(supportedCh < password.length) {
resultMessage= "Sifra sadrzi nedozvoljene karaktere"
provera=1;
   }
   if(provera == 0){
    resultMessage="Tvoja sifra je ispravna";
 }

   return  resultMessage;

}

console.log(validatePassword('agsD12hh'));


/*6. Create a function that finds how many prime numbers there are, up to the given integer.
Examples: primeNumbers(10) ➞ 4 // 2, 3, 5 and 7
primeNumbers(20) ➞ 8 // 2, 3, 5, 7, 11, 13, 17 and 19
primeNumbers(30) ➞ 10 // 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29*/

function isPrime (number1) {
    var result=true;
    for ( var i=2; i <= number1; i++) {
    if( number1 % i== 0 && number1 !=i) {

        return false
        break;
    }
    return result;
}
}

console.log(isPrime(15))


/*7. Create a function that returns an array that expands by 1 from 1 to the value of the input, and then
reduces back to 1. Items in the arrays will be the same as the length of the arrays.
Examples:
diamondArrays(1) ➞ [1],
diamondArrays(2) ➞ [1, 2, 2, 1]
diamondArrays(5) ➞ [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1] */



function diamondsArray(input){
    let diamondArray = [];
    
   for (i=1; i<=input*2-1; i++)
    if (i<=input)
     for(j=0; j<i; j++)
      diamondArray.push(i);
    else
     for (j=0; j <2*input-i; j++)
      diamondArray.push(2 * input-i);
   
   
   return diamondArray;
   }
   console.log(diamondsArray(5));

   /*8.Create a function that returns the sum of missing numbers.
Examples: sumMissingNumbers([1, 3, 5, 7, 10]) ➞ 29  // 2 + 4 + 6 + 8 + 9
sumMissingNumbers([10, 7, 5, 3, 1]) ➞ 29
sumMissingNumbers([10, 20, 30, 40, 50, 60]) ➞ 1575*/

   function findMissNum(num) {
    let max = Math.max(...num)
    let min = Math.min(...num)
    let missing = []
    let sum = 0
    for(let i=min; i<= max; i++) {
      if(!num.includes(i)) { 
        missing.push(i);
        sum = missing.reduce((a, b) => a + b, 0);
        
    }
  }
  return sum
   }
   console.log(findMissNum([10, 7, 5, 3, 1])) 

   