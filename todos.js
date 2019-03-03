var addButton = document.getElementById("add");
var removeButton = document.getElementById("remove");
var clearButton = document.getElementById("clear");

var list = document.getElementById("list");
var counter = 1;

function createTask () {
    var task = document.createElement("input");
    task.placeholder = " Task number " + counter;
    return task;
}

function addTask() {
    list.appendChild(createTask());
    counter++;
}
addButton.onclick = function add() {
    addTask();
}

function removeTask() {
    list.removeChild(list.lastChild);
}
removeButton.onclick = function remove() {
    removeTask();
    counter--;
}

function clearTask() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    counter = 1;
}
clearButton.onclick = function clear() {
    clearTask();
}