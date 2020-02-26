document.addEventListener("DOMContentLoaded", () => {
  // your code here
  createNewTask();
  
});

function createNewTask() {
  const newForm = document.querySelector('#create-task-form');
  const inputTask = document.querySelector('#new-task-description');
  const taskUl = document.getElementById('tasks');
  // const divList = document.getElementById('list');
  
  
  newForm.addEventListener('submit', function(e) {
    // debugger
    e.preventDefault();
    const newLi = document.createElement('li');
    newLi.innerText = inputTask.value;
    taskUl.appendChild(newLi);
    
    e.target.reset();
    
  })
  
}




 
 
      
 

      