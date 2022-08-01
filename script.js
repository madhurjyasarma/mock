/*
Write a JS code to count and display, 
Add and Remove the items of a dropdown list, 
in an alert window with the help of buttons.//Not complete Done.
*/


let display = document.getElementById('display');
let addOrRemove = document.getElementById('dropdown');
let taskInput = document.getElementById('input');
let list = document.getElementById('list');


var addTask = function () {
    var text = taskInput.value;
    var li = document.createElement('li');
    li.innerHTML = text;
    list.appendChild(li);
}

var removeTask = function () {
    // let li = document.getElementById('list');
    list.removeChild(list.firstElementChild);
}


