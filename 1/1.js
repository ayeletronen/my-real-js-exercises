const number = 123;
let sum = 0;
// your code goes here
let num1 = Math.floor(number/100);
let num2 = (Math.floor(number/10))-(num1*10);
let num3 = (number%10);
sum=num1+num2+num3;
console.log(num1, num2, num3);
console.log(sum);


/*Test on 3-digit numbers (666, 300, 725). 
Hint: you might need to use Math.floor*/
 