var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);
function addToDoItem() {
    alert("Add button clicked!");
}

var toDoEntryBox = getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

function newToDoItem(itemText, completed){
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if (completed) {
        toDoItem.classList.add("completed");
    }
    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);

}
function addToDoItem() {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);

}
function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}

function ClearCompletedToDoItem(){
    var completedItems = toDoList.getElementsByClassName("completed");

    while(completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

function emptylist() {
    var toDoItem = toDoList.children;
    while(toDoItem.length > 0) {
        toDoItem.item(0).remove();
    }

}
