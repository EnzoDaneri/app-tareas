document.getElementById('formTask').addEventListener('submit', saveTask );



function saveTask(e) {

 let title = document.getElementById('title').value;
 let description = document.getElementById('description').value;

const task = {
         title, // title: title, 
         description  // description: description
        
};

if (localStorage.getItem('tasks') === null) {
let tasks = [];
tasks.push(task);
localStorage.setItem('tasks', JSON.stringify(tasks));
} else {
let tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.push(task);
localStorage.setItem('tasks', JSON.stringify(tasks));

}

getTask();

document.getElementById('formTask').reset();
e.preventDefault();
}

function getTask(){
  let tasks =  JSON.parse( localStorage.getItem('tasks'));
  let taskView = document.getElementById('tasks');

  taskView.innerHTML = '';
  for( let i = 0; i < tasks.length; i ++) {
      let title = tasks[i].title;
      let description = tasks[i].description;

     taskView.innerHTML += `<div class="card mb-3">
     <div class="card-body">
     <p>${title} - ${description}</p>
     <button class="btn btn-danger" onClick="deleteTask('${title}')" >Borrar</button>
     </div>

     </div>`
  }
}


function deleteTask(title) {
let tasks = JSON.parse(localStorage.getItem('tasks'));
for(let i = 0; i < tasks.length; i ++){
    if(tasks[i].title == title) {
        tasks.splice(i, 1);
    }
}
localStorage.setItem('tasks', JSON.stringify(tasks));
getTask();
}

getTask();