
/*var name = prompt("What is your name?")


//ways to print in js

document.write(name);
alert(name);


//js console api
console.warn("this is a warning");
console.error("this is error");*/

//js variables
/*var no1 = 54;
var no2 = 89;
console.log(no1 + no2);

//data types in js
//number
var num1 = 55;
var num = 66;
console.log(num1 + num);

//string
var stringa = "this  is a string";
var stringb = 'this is also string';
console.log(stringa + stringb);

//objects
var marks = {
    ram: 65,
    shyam: 78,
    sita: 99,
}
console.log(marks);


//booleans
var a = true;
var b = false;
console.log(a, b);

//undefined(by default undefined is printed if nothing is kept in variable)
var und;
console.log(und);

//null
var n = null;
console.log(n);

//array
var arr = [1, 2, 3, 4, 5, 7];
console.log(arr[3]);

var arr = [1, 2, "hii", 5];
console.log(arr[2]);
console.log(arr);

//operators in js

//arithmetic

var d = 40;
var s = 89;
console.log("the value of d+s is", d + s);
console.log("the value of d-s is", d - s);
console.log("the value of d*s is", d * s);
console.log("the value of d/s is", d / s);

//assignment operators
var c = s;
c += 3;//c+3
console.log(c);


//comparison operators
var x = 5;
var y = 9;
console.log(x == y);
console.log(x <= y);

//logical operators(and)
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


//logical or
//multiple cursors are used

//logical not
console.log(!true);
console.log(!false);

//function
function avg(a, b) {
    return (a + b) / 2;
}

c1 = avg(13, 18);
c2 = avg(38, 90);
console.log(c1, c2);

//conditional in js

var age = 23;
//if else statement
if (age > 18) {
    console.log("you can drink");
}
else {
    console.log("you cannot drink");
}

//if else ladder
if (age > 30) {
    console.log("you are adult");
}
else if (age > 60) {
    console.log("you need to rst");
}
else if (age > 95) {
    console.log("you don't have time");
}
else {
    console.log("you are great");
}

//loop

var arr = [1, 2, 3, 4, 5];
console.log(arr);
for (var i = 0; i < arr.length; i++) {
    if (i == 2) {
        break;
    }
    console.log(arr[i])
}

//for each loop
arr.forEach(function (element) {
    console.log(element);
})

//while loop
let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}

//dowhile loop
do {
    console.log(arr[j]);
    j++;
}
while (j < arr.length);




//arrray method
let myArr=["ram",9,null,true];
console.log(myArr.length);
myArr.pop();//last one gets removed
myArr.push("added");//adds array at last
myArr.shift();//first array gets removed
myArr.unshift(99);//array is added at first
console.log(myArr.unshift(99));

//or
let newArr = myArr.unshift(99);
console.log(newArr);
console.log(myArr);

let myArr = ["ram", 9, null, true];
console.log(myArr.toString());//bracket hatayera dinxa
console.log(myArr.sort());

//string method in js

let myString = "I am a good girl";
console.log(myString.length);
console.log(myString.indexOf("girl"));

console.log(myString.slice(5, 9));
h = myString.replace("I", "she");
h = h.replace("am", "is");
console.log(h);

//date js
let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());


//DOM manipulation
//get elements by id ,class
let elemClass = document.getElementsByClassName("container");
console.log(elemClass);

const click = document.getElementById('click');
console.log(click);


//get elements by tagname


const heading = document.getElementsByTagName("h1");
console.log(heading);

const click = document.getElementsByTagName("button");
console.log(click);

//query selector

const query = document.querySelector(".hhhh");
console.log(query);*/


//query selector all
const dom = document.querySelectorAll('.container');
console.log(dom);



