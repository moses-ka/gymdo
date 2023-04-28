const Con = document.querySelector(".posts");

let retrieveData = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('post')) {
      const elementToAdd = localStorage.getItem(key);
      Con.insertAdjacentHTML('beforeend', elementToAdd);
    }
  }
}

retrieveData();

const addTask = () => {
  let postNum = Math.floor(Math.random() * 1000000);
  postNum = postNum.toString();

  const task = document.getElementById("taskIn").value;
  const elementToAdd = ` <div class="post1 postNum${postNum}">
    <div id="taskContainer" class="taskContainer">
      <h3 onclick="editTask(${postNum})" class="textNum${postNum}" id="text">${task}</h3>
    </div>
    <div>
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

  storeData(elementToAdd);
}

const storeData = (elementToAdd) => {
  const dataNum = Math.floor(Math.random() * 1000000);
  const key = `post${dataNum}`;
  localStorage.setItem(key, elementToAdd);
  console.log(`Data stored with key ${key}`);
}

const deleteTask = (x) => {
  let elementToDelete = document.querySelector(`.postNum${x}`);
  elementToDelete.remove();
}

let editTask = (x) => {
  let elementToEdit = document.querySelector(`.textNum${x}`);
  let anyWhere = document.querySelector('body');
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
    }
  });

  input.addEventListener('keypress', (e) => {
    if (e.key === 'enter' || e.key === 'Enter') {
      input.style.display = 'none';
      elementToEdit.innerHTML = input.value;
      if (input.value == '') {
        deleteTask(x);
      }
    }
  });
};

const markAsDone = (x) => {
  let elementToMarkAsDone = document.querySelector(`.textNum${x}`);
  elementToMarkAsDone.classList.toggle('done');
  console.log(elementToMarkAsDone);
}
