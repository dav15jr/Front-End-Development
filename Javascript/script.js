console.log("Javascript is Rad");

var number = 10;                /*variable container, used to store 10 in number*/
var string = 'Jambo Hapo';      /*variable container, used to store  Jambo Hapo in string*/
var isRad = true;               /*variable container, used to store (boolean value)true in isRad*/ 
var groceries = ['Milk', 'Eggs', 'Salmon'];

function listGroceries(){                              /* Function to run for loop*/
    for (var i = 0; i < groceries.length; i++) {     /*for loop, increment i while it is less than the length on the groceries array*/
    console.log(groceries[i]);
    }
}
listGroceries();                /*Call this function*/    

if (number == 10) {             /*if else condition*/
    console.log("Yee haw");
} else {
    console.log("Hell nah");
}


for (var i = 2; i < 13; i++) {     /*for loop, increment i while it is less than 13*/
    console.log(i);
}



document.getElementById("box").addEventListener('click', function(){   /*If box element is clicked then alert user with given message*/
    alert('He clicked ME');

});


document.getElementById("box").innerHTML = string;      /*Take string and store it in box and returns it on page/prints it*/
document.getElementById("box").innerHTML = number + 2;  /*Take number add 7, store it in box and returns it on page/prints it*/
document.getElementById("box").innerHTML = groceries[2];      /*Take 3rd item in groceries and store it in box and returns it on page/prints it*/