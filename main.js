//alerts
//task 1+2
alert("Welcome to JavaScript");
var a = prompt("What is your good name?");
alert("Hello," + a + " ! ");
//variables
//task 1
var firstname = prompt("enter your firstname ");
var lastname = prompt(" enter your lastname");
var fullname = (firstname + lastname);
alert(fullname);
//task 2
var hobby = prompt("What is your favourite hobby?");
alert(hobby + " is my favourite hobby " + " . ");
//variables of numbers
//task 1
var yearofbirth = prompt("enter your birth year");
var  currentyear = prompt("enter the current year");
var age = currentyear - yearofbirth;
alert("your are" + age + " years old . ");
//task 2
var lenght = prompt ("what is the lenght of rectangle");
var width = prompt ("what is the width of rectangle");
var area =  lenght * width;
alert("The area of rectangle is " + area + " . ");
//variable names legal and illegal
//task 1
//legal variable names in js
//firstname
//user_name
//$totalDollars
//illegal variable names in js
//@hello
//4thValue
//last-name
//task 2
var myage = prompt("enter your age");
var myfriendage = prompt("enter your friend age");
alert("My age is " + myage + " and my friend age is " + myfriendage  + " . ");
//maths expressions : familar operators:
//task 1
var number1 = prompt("enter first number;");
var number2 = prompt("enter second number;");
var sum = number1 + number2;
alert("The sum is " + sum + " . ");
//task 2
var multiply = 6 * 8;
alert("The result of 6 * 8 =" + multiply + " . ");
//task 3
var reminder = 17 % 5;
alert("The reminder of 17 % 5 is " + reminder + " . ");
//aditional challenges
//challenge 1
var birthyear = prompt("enter your birth year");
var currentyear = prompt("enter the current year");
var age =  currentyear - birthyear;
alert("You are" + age + " year's old ." );
//challenge 2
var number1 = prompt("enter the first number:");
var number2 = prompt("enter the second number:");
SUM_TOTAL = number1 + number2;
DIFFERENCE_TOTAL = number2 - number1;
PRODUCT_TOTAL = number1 * number2;
QUOTIENT_TOTAL = number1 / number2;
REMINDER_TOTAL = number1 % number2;
alert("SUM = " + SUM_TOTAL);
alert("DIFFERENCE = " + DIFFERENCE_TOTAL);
alert("PRODUCT = " + PRODUCT_TOTAL);
alert("QUOTIENT = " + QUOTIENT_TOTAL);
alert("REMINDER = " + REMINDER_TOTAL);
