const addButton = document.querySelector(".form__button");
const taskList = document.querySelector(".task-list");
let selectedTask

function ToDoList(name) {
    this.name = name;
}

ToDoList.prototype.removeTask = function(event) {
    selectedTask.style.display = "none";
    selectedTask = null;
}

ToDoList.prototype.addTask = function(event) {
    event.preventDefault();
    const inputValue = document.querySelector(".form__input").value;
    if (inputValue !== "") {
        // creating list item
        const task = document.createElement("li");
        task.className = "list__item";
        taskList.appendChild(task);
        // creating span
        const taskValue = document.createElement("span");
        taskValue.className = "list__text";
        taskValue.textContent = inputValue;
        task.appendChild(taskValue);
        // creating delete button
        const deleteButton = document.createElement("button");
        deleteButton.className = "list__delete-button";
        deleteButton.textContent = "X";
        task.appendChild(deleteButton);

        deleteButton.addEventListener("mouseover", (event) => {
            selectedTask = task;
        })        

        deleteButton.addEventListener("click", function(event) {
            myToDoList.removeTask(event);
        })

        document.querySelector(".form__input").value = "";
    }
}

const myToDoList = new ToDoList("My Tasks");

addButton.addEventListener("click", function(event) {
    myToDoList.addTask(event);
});
