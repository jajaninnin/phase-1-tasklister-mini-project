document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector("#create-task-form");
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target["new-task-description"].value)
  })
});
function buildToDo(todo) {
  let p = document.createElement("p")
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  p.textContent = `${todo} `
  btn.textContent = " x"
  p.appendChild(btn)
  const list = document.querySelector("#list");
  list.appendChild(p);
  let select = document.createElement("select")
  select.addEventListener('change', function(e) {
    console.log(e.target.value)
    if (e.target.value === "high priority") {
      p.style.color = "red";
    } else if (e.target.value === "medium priority") {
      p.style.color = "yellow";
    } else {
      p.style.color = "green"
    }
  })
  let red = document.createElement("option")
  let yellow = document.createElement("option")
  let green = document.createElement("option")
  red.textContent = "high priority"
  yellow.textContent = "medium priority"
  green.textContent= "low priority"
  select.append(red, yellow, green)
  p.appendChild(select)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}
