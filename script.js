"use strict";

const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

function clearInput() {
  let inputNew = document.querySelector(".input");
  inputNew.value = "";
}

function addDiv() {
  let inputValue = document.querySelector(".input").value;
  let todoDiv = document.createElement("div");
  let myButton = document.createElement("button");
  let icon = document.createElement("img");
  icon.setAttribute("src", "./images/trash.png");
  todoDiv.classList.add("todo-body");
  myButton.classList.add("btn-icon");
  icon.classList.add("icon");
  container.append(todoDiv);
  todoDiv.textContent = inputValue;
  todoDiv.append(myButton);
  myButton.append(icon);
  myButton.addEventListener("click", function () {
    todoDiv.remove();
  });
}

btn.addEventListener("click", () => {
  addDiv();
  clearInput();
});
