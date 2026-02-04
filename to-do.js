console.log("Script file is running — hello from Sharad's todo app");


const inputTask = document.getElementById("to-do");
const addButton = document.getElementById("submit");
const taskList = document.getElementById("task-list")

function addTask(){
    let taskText = inputTask.value.trim();

    if(taskText === ""){
        alert("Write Something to add");
        return;
    }
    let newItem = document.createElement("li"); 
    newItem.textContent = taskText;

    taskList.appendChild(newItem);

    inputTask.value ="";
    console.log("Add button was clicked! Input value was:", inputTask.value);
}

addButton.addEventListener("click", addTask);
