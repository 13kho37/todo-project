
document.addEventListener("DOMContentLoaded", () => {

    const todoInput = document.querySelector(".to-doInput");
    const addButton = document.querySelector(".addButton");
    const list = document.querySelector(".list");


    function addTask() {
        const newTask = todoInput.value.trim(); 
        if (newTask === "") {
            return; 
        }

        const li = document.createElement("li");
        li.textContent = newTask; 
        li.classList.add("list-element");


        list.appendChild(li); 
        todoInput.value = ""; 
    }

    addButton.addEventListener("click", addTask); 
});
