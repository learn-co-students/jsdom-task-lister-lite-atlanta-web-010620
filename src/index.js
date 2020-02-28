document.addEventListener("DOMContentLoaded", () => {

function myTasks() {
  let createTasks = document.querySelector('#create_task_form')
  createTasks.addEventListener('click', function(e) {
  e.preventDefault()
  let newTask = document.querySelector('#new_task_description')
  let li = document.createElement('li')
  li.innerText = newTask.value
  let listTask = document.querySelector('#tasks')
  listTask.appendChild(li)
  })
}
  

})