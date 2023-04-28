const Con = document.querySelector(".posts");

let retrieveData = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('post')) {
      const elementToAdd = localStorage.getItem(key);
      Con.insertAdjacentHTML('afterbegin', elementToAdd);
    }
  }
}

retrieveData();
let taskInput = document.getElementById("taskIn");
taskInput.addEventListener("keydown", (e) => {
  if (e.key === 'enter' || e.key === 'Enter') {
    addTask();
    taskInput.input.value = ""; // not working
  }
});

const addTask = () => {
  let postNum = Math.floor(Math.random() * 1000000);
  postNum = postNum.toString();

  const task = document.getElementById("taskIn").value;
  const dataNum = Math.floor(Math.random() * 1000000);
  const elementToAdd = ` <div class="post1 postNum${postNum}" id="post${dataNum}">
    <div id="taskContainer" class="taskContainer">
      <h3 onclick="editTask(${postNum})" class="textNum${postNum}" id="text">${task}</h3>
    </div>
    <div class="buttons">
      <button>
        <img onclick="markAsDone(${postNum})" class="img" width="30px" src="assets/verified.png" alt="">
      </button>
      <button name="delete" onclick="deleteTask(${postNum})">
        <img class="img" width="30px" src="assets/delete.png" alt="">
      </button>
    </div>
  </div>`;

  if (task != "") {
    Con.insertAdjacentHTML("beforeend", elementToAdd);
  }

  storeData(elementToAdd, `post${dataNum}`);
 
}


const storeData = (elementToAdd, key) => {
  localStorage.setItem(key, elementToAdd);
  console.log(`Data stored with key ${key}`);
  deleteTask(key);
}

const deleteTask = (x) => {
  const dataNum = document.querySelector(`.postNum${x}`).id.slice(4);
  let elementToDelete = document.querySelector(`.postNum${x}`);
  elementToDelete.remove();
  localStorage.removeItem(`post${dataNum}`);
  console.log('this is the key : post' + dataNum);
  
}

let editTask = (x) => {
  let elementToEdit = document.querySelector(`.textNum${x}`);
  let input = document.createElement('input');

  input.type = 'text';
  input.classList.add('taskIn');
  input.value = elementToEdit.innerHTML;
  input.id = 'taskIn';
  input.name = 'inputToEdit';
  elementToEdit.innerHTML = '';
  elementToEdit.appendChild(input);

  input.focus();
  input.addEventListener('click', () => {
    elementToEdit.innerHTML = input.value;
    if (input.value == '') {
      deleteTask(x);
    } else {
      updateTask(x, input.value);
    }
  });

  input.addEventListener('keypress', (e) => {
    if (e.key === 'enter' || e.key === 'Enter') {
      input.style.display = 'none';
      elementToEdit.innerHTML = input.value;
      if (input.value == '') {
        deleteTask(x);
      } else {
        updateTask(x, input.value);
      }
    }
  });
};

const updateTask = (x, newValue) => {
  const dataNum = document.querySelector(`.postNum${x}`).id.slice(4);
  const key = `post${dataNum}`;
  const elementToUpdate = localStorage.getItem(key);
  const updatedElement = elementToUpdate.replace(/<h3.*?>(.*?)<\/h3>/, `<h3 onclick="editTask(${x})" class="textNum${x}" id="text">${newValue}</h3>`);
  localStorage.setItem(key, updatedElement);
};

const markAsDone = (x) => {
  let elementToMarkAsDone = document.querySelector(`.textNum${x}`);
  elementToMarkAsDone.classList.toggle('done');
  const dataNum = document.querySelector(`.postNum${x}`).id.slice(4);
  const key = `post${dataNum}`;
  const elementToUpdate = localStorage.getItem(key);
  const isDone = elementToMarkAsDone.classList.contains('done');
  const updatedElement = elementToUpdate.replace(/<h3.*?>(.*?)<\/h3>/, `<h3 onclick="editTask(${x})" class="textNum${x} ${isDone ? 'done' : ''}" id="text">${elementToMarkAsDone.innerHTML}</h3>`);
  localStorage.setItem(key, updatedElement);
};
