const inputTask = document.getElementById("to-do");

const addButton = document.getElementById("submit");

const taskList = document.getElementById("task-list");

function addTask() {
  let taskText = inputTask.value.trim();

  if (taskText === "") {
    alert("Write something to add in list");
    return;
  }

  // creating list element
  let li = document.createElement("li");

  //checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  //textSpan
  const textSpan = document.createElement("span");
  textSpan.className = "task-text";
  textSpan.textContent = taskText;

  //deleteBtn
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  deleteBtn.className = "delete-btn";

  // putting all together
  li.appendChild(checkbox);
  li.appendChild(textSpan);
  li.appendChild(deleteBtn);

  //add to taskList
  taskList.appendChild(li);

  inputTask.value = "";
  inputTask.focus();

  // toggle checkbox
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
  });

  // delete button functionality
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });
}
// add task when click the button
addButton.addEventListener("click", addTask);

// allow enter to input task
inputTask.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
