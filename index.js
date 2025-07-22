let todoItemsContainer = document.getElementById("todoItemsContainer");

let todoList = [
    {
        text:"Learn HTML"
    },
    {
        text:"Learn CSS"
    },
    {
        text:"Learn Javascript"
    },
    {
        text:"Learn React"
    }
];

// createAndAppendTodo(todoList[0]);
// createAndAppendTodo(todoList[1]);
// createAndAppendTodo(todoList[2]);

//lets decrease duplication of above lines using loops
for(let todo of todoList){
    createAndAppendTodo(todo);
} 

//creating Reusable function to create multiple Todo tasks at a time
function createAndAppendTodo(todo){
    let todoElement =document.createElement('li');
    todoElement.classList.add("todo-item-container","d-flex","flex-row");
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type="checkbox";
    inputElement.id ="checkboxInput";
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("d-flex", "flex-row", "label-container");
    todoElement.appendChild(labelContainer); 

    let labelElement = document.createElement("label");
    //labelElement.htmlFor = "checkboxInput";
    labelElement.setAttribute("for","checkboxInput");
    labelElement.classList.add("checkbox-label");
    labelElement.textContent=todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("material-icons","delete-icon");
    deleteIcon.textContent="delete";
    deleteIconContainer.appendChild(deleteIcon);
} 

