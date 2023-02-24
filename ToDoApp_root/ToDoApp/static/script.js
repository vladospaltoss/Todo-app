const newTaskInput = document.getElementById("new-task");
const addButton = document.querySelector("button[type='submit']");
const todoList = document.getElementById("todo-list");

// Add new task to the list
function addTask(event) {
    event.preventDefault();
    const taskText = newTaskInput.value;
    if (taskText === "") return;
    const newTask = document.createElement("li");
    newTask.innerHTML = `
        <input type="checkbox">
        <label>${taskText}</label>
        <button class="delete-button">Delete</button>
    `;
    todoList.appendChild(newTask);
    newTaskInput.value = "";
}

// Delete task from the list
function deleteTask(event) {
    if (event.target.classList.contains("delete-button")) {
        const taskItem = event.target.parentNode;
        todoList.removeChild(taskItem);
    }
}

// Toggle task status (completed/incomplete)
function toggleTaskStatus(event) {
    if (event.target.tagName === "INPUT") {
        const taskLabel = event.target.nextSibling;
        if (event.target.checked) {
            taskLabel.classList.add("completed");
        } else {
            taskLabel.classList.remove("completed");
        }
    }
}

addButton.addEventListener("click", addTask);
todoList.addEventListener("click", deleteTask);
todoList.addEventListener("change", toggleTaskStatus);
