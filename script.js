const Con = document.querySelector(".posts");
 let restorData = () => {
  let restor = localStorage.getItem(`${dataNum}`)
let container = document.querySelector('.formContainer')
container.insertAdjacentHTML("beforeend",restor)
console.log(dataNum +'dataTo restor!!')
}

restorData()
//console.log(container)


//console.log(restor_)
const addTask = () => {
  let postNum =Math.floor(Math.random() * 1000000)
  postNum = postNum.toString();
     
    const task = document.getElementById("taskIn").value
    const elementToAdd = ` <div class="post1 postNum${postNum} " >
    <div id="taskContainer" class="taskContainer">
        <h3 onclick="editTask(${postNum})"  class="textNum${postNum}" id="text">${task}</h3>
    </div>
      <div>
      <button>
            <img onclick="markAsDone(${postNum})" class="img" width="30px" src="assets/verified.png" alt="">
           </button>
      <button name="delete" onclick="deleteTask(${postNum})" >
      <img class="img" width="30px" src="assets/delete.png" alt="">
      </button>
  
      </div>
</div>`
if(task != ""){

  Con.insertAdjacentHTML("beforeend", elementToAdd)
}

let storeData = () => {
  let dataNum = Math.floor(Math.random() * 1000000)
  dataNum = dataNum.toString();
  localStorage.setItem(`${dataNum}`,elementToAdd)
  console.log(dataNum)
}
storeData(dataNum)
}

const  deleteTask = (x) => {
  
 let elementToDelete = document.querySelector(`.postNum${x}`)	;
 elementToDelete.remove();

}

let editTask = (x) => {
  let elementToEdit = document.querySelector(`.textNum${x}`)	;
  let anyWhere = document.querySelector('body')	;
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
    if (input.value == '') {deleteTask(x);}
    })
    input.addEventListener('keypress',(e) => {
      if(e.key === 'Enter' || e.key === 'enter'){

        input.style.display = 'none'
        elementToEdit.innerHTML = input.value;
        if (input.value == ''){deleteTask( x);};
      }
      
    }
    );
    };
  
// to do a button to make as done

const markAsDone = (x) => {
  let elementToMarkAsDone = document.querySelector(`.textNum${x}`)	;
  elementToMarkAsDone.classList.toggle('done');

  console.log(elementToMarkAsDone)
  
}