let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let savedTodoButton = document.getElementById("saveTodoButton");

savedTodoButton.onclick = function(){
    localStorage.setItem("todoList",JSON.stringify(todoList));
}

function getTodoListFromLocalStorage(){
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if(parsedTodoList===null){
        return [];
    }
    else{
        return parsedTodoList;
    }
}

let todoList = getTodoListFromLocalStorage();

let todosCount = todoList.length;

function onAddTodo(){
    let UserInputElement = document.getElementById("todoUserInput");
    UserInputValue = UserInputElement.value;
    if(UserInputValue===""){
        alert("Enter valid text");
        return;
    }
    todosCount+=1; 
    let newTodo = {
        text:UserInputValue,
        uniqueNo:todosCount
    };
    todoList.push(newTodo);
    createAndAppendTodo(newTodo);
    UserInputValue = "";
}


addTodoButton.onclick = function(){
    onAddTodo();
}

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

    // if(checkboxElement.checked === true){
    //     labelElement.classList.add("checked");
    // }
    // else{
    //     labelElement.classList.remove("checked");
    // }
    labelElement.classList.toggle("checked");
}

function onDeleteTodo(todoId){
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement); 
    let deleteIndex = todoList.findIndex(function(eachTodo){
        let eachTodoId = "Todo"+eachTodo.uniqueNo;
        if(eachTodoId === todoId){
            return true;
        }
        else{
            return false;
        }
    });
    todoList.splice(deleteIndex,1);
    console.log(todoList);
}


//creating Reusable function to create multiple Todo tasks at a time
function createAndAppendTodo(todo){
    let todoId = "todo" + todo.uniqueNo;
    let todoElement =document.createElement('li');
    todoElement.id = todoId;
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
    deleteIcon.onclick = function(){
        onDeleteTodo(todoId);
    }
} 

