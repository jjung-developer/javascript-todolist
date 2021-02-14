let todos = [];
const todoList = document.querySelector("#todo-list");
const addlistbtn = document.querySelector(".input-todo-button");
const todoText = document.querySelector(".input-todo");

let new_id = 0;

const makeElement = (todo) => {
  const li = document.createElement("li");
  const deletebtn = document.createElement("button");
  const todotxt = document.createElement("p");
  const doneicon = document.createElement("span");

  deletebtn.textContent = "삭제";
  doneicon.textContent = todo.done ? "O" : "X";
  todotxt.textContent = todo.txt;

  todotxt.addEventListener("click", () => {
    toggleTodo(todo.id);
  });

  deletebtn.addEventListener("click", () => {
    deleteTodo(todo.id);
  });

  li.appendChild(todotxt);
  li.appendChild(deletebtn);
  li.appendChild(doneicon);
  todoList.appendChild(li);
};

const resetTodos = () => {
  while (todoList.hasChildNodes()) {
    todoList.removeChild(todoList.firstChild);
  }
};

const deleteTodo = (id) => {
  const deletedTodo = todos.filter((todo) => {
    if (todo.id !== id) {
      return true;
    } else {
      return false;
    }
  });
  todos = deletedTodo;

  printtodos();
};

const toggleTodo = (id) => {
  const result = todos.map((todo) => {
    if (todo.id === id) {
      todo.done = !todo.done;
    }
    return todo;
  });
  todos = result;

  printtodos();
};

const addTodo = () => {
  const value = todoText.value;
  const todoobj = {
    txt: value,
    done: false,
    id: new_id++,
  };
  todos.push(todoobj);
  printtodos();
};

const printtodos = () => {
  resetTodos();
  todos.forEach((todo) => {
    makeElement(todo);
  });
};

addlistbtn.addEventListener("click", addTodos);
