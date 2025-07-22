let todoItemsContainer = document.getElementById("todoItemsContainer")

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
labelElement.textContent="Learn HTML";
labelContainer.appendChild(labelElement);

let deleteIconContainer = document.createElement("div");
deleteIconContainer.classList.add("delete-icon-container");
labelContainer.appendChild(deleteIconContainer);

let deleteIcon = document.createElement("i");
deleteIcon.classList.add("material-icons","delete-icon");
deleteIcon.textContent="delete";
deleteIconContainer.appendChild(deleteIcon);