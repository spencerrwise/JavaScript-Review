var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

var last = function(arr){
	return arr.pop();
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


//Fix 'dicedArray' below so that it's an array full of integers from 0-10
var dicedArray = [0,1,4,5,7,8,10];

dicedArray.splice(2, 0, 2, 3);
dicedArray.splice(6, 0, 6);
dicedArray.splice(9, 0, 9);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

for(var i = 0; i < evenArray.length; i++){
	if (evenArray[i]%2 !== 0){
		evenArray.splice(i, 1);
i--;
	}
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30, and an array full or numbers 'randomArray'. 
//Your job is to write a function that will get a random number, then loop through the array to see if that random number is in
// the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

var randomYo = function() {
	var number = getRandomArbitrary();
	var flag = false;
	for(var i = 0; i < randomArray.length; i++) {
		if(randomArray[i] === number){
			console.log("The number is " + number);
			flag = true;	
			break;
		} 
	}
	return flag;
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, 
//first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second = [];

second.push(first.slice(0));
second.push(6,7);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

var longest = function(sentence) {
		var arr = sentence.split(' ');

			var lgth = 0;
			var longest;

			for(var i=0; i < arr.length; i++){

   			 if(arr[i].length > lgth){
        		var lgth = arr[i].length;
        		longest = arr[i];
	    }      
	} 
	alert(longest);
		return
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

var capitalize = function(myPoem){
	var arr = myPoem.split(' ');

	for (var i = 0; i < arr.length; i++){
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}
	
	var sentence = arr.join(' ');
	return sentence;
}



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.


var vowelCounter = function(theOdyssey){
	var vowels = 'aeiou';
	var counter = 0;
	for(var i = 0; theOdyssey.length; i++){
		if(vowels.indexOf(theOdyssey[i]) !== -1) {
			counter++;
		}
	};
	return counter;
}

