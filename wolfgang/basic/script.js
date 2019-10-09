var sandwiches = '{ "sandwich": "hamburger", "calories": "260" }';
var fries = '{ "fries_size": "Large French Fries", "calories": "570" }';

var Obj1=JSON.parse(sandwiches);

var Obj2=JSON.parse(fries);



document.getElementById("bob").innerHTML = "My favourite burgier is"+Obj1.sandwich+"which has approximately"+Obj1.calories+",along with it i enjoy eating"+Obj2.fries_size+"which have about"+Obj2.calories+"calories";
