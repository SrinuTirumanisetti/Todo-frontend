let todoItemsContainer = document.getElementById("todoItemsContainer");

let todoList = [
    {
        text:"Learn HTML",
        uniqueNo:1
    },
    {
        text:"Learn CSS",
        uniqueNo:2
    },
    {
        text:"Learn Javascript",
        uniqueNo:3
    },
    {
        text:"Learn React",
        uniqueNo:4
    }
];

// createAndAppendTodo(todoList[0]);
// createAndAppendTodo(todoList[1]);
// createAndAppendTodo(todoList[2]);

//lets decrease duplication of above lines using loops
for(let todo of todoList){
    createAndAppendTodo(todo);
} 

function onTodoStatusChange(checkboxId,labelId){
    let checkboxElement = document.getElementById(checkboxId);
    console.log(checkboxElement.checked);

    let labelElement = document.getElementById(labelId);

    if(checkboxElement.checked === true){
        labelElement.classList.add("checked");
    }
    else{
        labelElement.classList.remove("checked");
    }
}

//creating Reusable function to create multiple Todo tasks at a time
function createAndAppendTodo(todo){
    let todoElement =document.createElement('li');
    todoElement.classList.add("todo-item-container","d-flex","flex-row");
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    let checkboxId="checkbox"+todo.uniqueNo;
    let labelId = "label"+todo.uniqueNo;
    inputElement.type="checkbox";
    inputElement.id =checkboxId;
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function(){
        onTodoStatusChange(checkboxId,labelId);
    }
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("d-flex", "flex-row", "label-container");
    todoElement.appendChild(labelContainer); 

    let labelElement = document.createElement("label");
    //labelElement.htmlFor = "checkboxInput";
    labelElement.setAttribute("for",checkboxId);
    labelElement.id = labelId;
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

