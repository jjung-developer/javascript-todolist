const todo = [];
const todoList = document.querySelector("#todo-list");
const addlistbtn = document.querySelector(".input-todo-button");

const getUserstodo = () => {
  const ListItem = document.createElement("li");
  const todoText = document.querySelector(".input-todo").value;
  //const tododelectBtn = document.createElement("button");
  const todoobj = {
    txt: todoText,
    done: false,
    id: todo.length + 1
  };
  
  todo.push(todoobj);
  console.log(todo);
  //ListItem.appendChild(todoText);
  //todoList.appendChild(ListItem);
};

addlistbtn.addEventListener("click", getUserstodo);