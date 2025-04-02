// Add All Id

let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let button = document.querySelector('#delete_data');
let fillter = document.querySelector('#task_fillter');
let newInput = document.querySelector('#new_task');

// All loded eventListner
loadEventListeners();


// Define event listeners
function loadEventListeners() {
  document.addEventListener('DOMContentLodaded', getTasks);
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', remove);
  button.addEventListener('click', clear);
  fillter.addEventListener('keyup', filterTasks);
}

// Get Tasks from LS
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
  });
}


// Add Task
function addTask(e) {
  if (newInput.value === '') {
    alert('Add a task.');
  } else {
    // Create li element
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(newInput.value + " "));

    let link = document.createElement('a');
    link.setAttribute('href', '#');
    link.innerHTML = 'x';
    li.appendChild(link);
    taskList.appendChild(li);

    // Store in LS
    storeTaskInLocalStorage(newInput.value);

    // Clear input
    newInput.value = '';
  }
  e.preventDefault();
}


// Store Task
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task

function remove(e) {
  if (e.target.hasAttribute("href")) {
    if (confirm('Are you sure?')) {
      let ele = e.target.parentElement;
      ele.remove();
      console.log(ele);
    }

  }

}

// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Task

function clear(e) {
  if (confirm('Remove from List')) {
    taskList.innerHTML = "";
  }
  localStorage.clear();
  // Clear from LS
  clearTasksFromLocalStorage();
}

// Clear Tasks from LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// Fillter Task

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('li').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
