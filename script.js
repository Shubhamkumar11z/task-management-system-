const form = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const priority = document.getElementById("priority");
const taskList = document.getElementById("taskList");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const taskText = taskInput.value;
    const taskPriority = priority.value;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function(){
        li.classList.toggle("completed");
    });

    const taskContent = document.createElement("span");
    taskContent.textContent = taskText + " (" + taskPriority + ")";

    li.appendChild(checkbox);
    li.appendChild(taskContent);

    taskList.appendChild(li);

    taskInput.value = "";
});
