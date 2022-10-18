let reverse = 0;
let num = 149;

reverse = Number(String(num).split('').reverse().join(''));

console.log("Reverse number : " +reverse);

// without inbuilt functions

// let reverse = 0;
// let num = 149;
// let lastDigit;

// while(num != 0){
// 	lastDigit = num%10;
//   reverse = reverse*10+lastDigit;
//   num = Math.floor(num/10);
// }

// console.log("Reverse number : "+ reverse);