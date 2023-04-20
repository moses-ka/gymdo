const Con = document.querySelector(".posts");

var postNum = 0

const addTask = () => {
     postNum++;
    const task = document.getElementById("taskIn").value
    const elementToAdd = ` <div class="post1 postNum${postNum} " >
    <div id="taskContainer" class="taskContainer">
        <h3 onclick="editTask()" class="textNum${postNum}" id="text">${task}</h3>
    </div>
      <div>
      <button>
            <img onclick="markAsDone()" class="img" width="30px" src="assets/verified.png" alt="">
           </button>
      <button name="delete" onclick="deleteTask(${postNum})" >
      <img class="img" width="30px" src="assets/delete.png" alt="">
      </button>
  
      </div>
</div>`
if(task != ""){

  Con.insertAdjacentHTML("beforeend", elementToAdd)
}
}
const  deleteTask = (x) => {
  
 let elementToDelete = document.querySelector(`.postNum${postNum}`)	;
 elementToDelete.remove();

}
// to do add input to edit the text of h3 and save it 

let editTask = () => {
  let elementToEdit = document.querySelector(`.textNum${postNum}`)	;
  
  let input = document.createElement('input');
  
  input.type = 'text';
  input.classList.add('taskIn');
  input.value = elementToEdit.innerHTML;
  input.onchange = '';
  input.id = 'taskIn';
  input.name = 'inputToEdit';
  elementToEdit.innerHTML = '';
  elementToEdit.appendChild(input);
  
  input.focus();
  input.addEventListener('blur', () => {
    elementToEdit.innerHTML = input.value;
    if (input.value == '') {
      deleteTask(postNum);
    }
  });
}
// to do a button to make as done
const markAsDone = () => {
  let elementToMarkAsDone = document.querySelector(`.textNum${postNum}`)	;
  elementToMarkAsDone.classList.add('done');
}
// to do a button that directs to a link 

  // let button = document.querySelector(".button")
  // button.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   console.log("form submitted");  
    
  // })

