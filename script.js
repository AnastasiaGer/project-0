const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const todoText = prompt("TODO text:");
  console.log(todoText);
  addToDo(todoText);
}

function getListItem() {
  var tempLi = document.createElement('li');
  tempLi.setAttribute("class", classNames["TODO_ITEM"]);
  var liID = itemCountSpan.innerHTML;
  tempLi.setAttribute("id", liID);
  return tempLi;
}

function getCheckbox(id) {
  var liCheckbox = document.createElement("input");
  liCheckbox.setAttribute("type", "checkbox");
  liCheckbox.setAttribute("id", "checkbox" + id);
  liCheckbox.setAttribute("class", classNames["TODO_CHECKBOX"]);
  liCheckbox.addEventListener("change", function() {
    if (this.checked) {
      uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) - 1;
    } else {
      uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) + 1;
    }
  });
  return liCheckbox;
}

function getSpan(text) {
  var liText = document.createElement("span");
  liText.setAttribute("class", classNames["TODO_TEXT"]);
  liText.innerText = text;
  return liText;
}

function getDeleteButton(id) {
  var deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", classNames["TODO_DELETE"]);
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", function() {
    itemCountSpan.innerHTML = Number(itemCountSpan.innerHTML) - 1;
    // only decrement unchec  ked count when todo is not checked
    if (!document.getElementById("checkbox" + id).checked) {
      uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) - 1;
    }
    list.removeChild(document.getElementById(id));
  });
  return deleteButton;
}

function addToDo(text) {
  var li = getListItem();
  li.appendChild(getCheckbox(li.id));
  li.appendChild(getSpan(text));
  li.appendChild(getDeleteButton(li.id));
  list.appendChild(li);
  itemCountSpan.innerHTML = Number(itemCountSpan.innerHTML) + 1;
  uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) + 1;
}
