document.addEventListener("DOMContentLoaded", () => {


  let taskList = document.querySelector('#tasks')
  const taskForm = document.querySelector('#create-task-form');
  taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let value = e.target.querySelector('#new-task-description').value;
    let listItem = document.createElement('li')
    listItem.innerText = value
    taskList.appendChild(listItem)
  })

});