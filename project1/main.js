let btn = document.querySelector(".container .header .btn");
let input = document.querySelector(".container .header .input");
let div = document.querySelector(".container .tasks");
btn.addEventListener("click", () => {
  if (input.value === "") {
    window.alert("enter name of task");
  } else {
    createTask(input.value);
    input.value = "";
  }
  let deleteBtn = document.querySelectorAll("span:last-child");
  // console.log(deleteBtn);
  deleteBtn.forEach((d) => {
    d.addEventListener("click", () => {
      d.parentNode.remove();
    });
  });
  let tasks = document.querySelectorAll(".container .tasks .task");
  tasks.forEach((task) => {
    task.addEventListener("click", () => {
      task.classList.add("done");
    });
  });
});

function createTask(name) {
  let task = document.createElement("div");
  task.classList.add("task");
  let taskName = document.createElement("span");
  let del = document.createElement("span");
  del.appendChild(document.createTextNode("X"));
  taskName.appendChild(document.createTextNode(name));
  task.appendChild(taskName);
  task.appendChild(del);
  div.appendChild(task);
}
