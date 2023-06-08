let arr = ["Fan", "Camera", 34, null, true];

//Array methods
/*
console.log("Array length =", arr.length);
arr.push("akash");
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift("ABCD");
console.log(arr);
console.log(arr.unshift(11)); // returns length of the unshifted array
console.log(arr);
console.log(arr.toString());

let tempArr = [91,20,3,4,0,1];
console.log(tempArr);
tempArr.sort();
console.log(tempArr);
*/

let str = "Good afternoon everyone";
console.log(str.indexOf("a"));
console.log(str.lastIndexOf("o"));

console.log(str.slice(0,10));

let newStr = str.replace("everyone", "Akash"); // only first occurence will be replaced
console.log(str);
console.log(newStr);
