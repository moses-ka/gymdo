const Con = document.querySelector(".posts");



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
console.log(postNum)
}
const  deleteTask = (x) => {
  
 let elementToDelete = document.querySelector(`.postNum${x}`)	;
 elementToDelete.remove();
 

}
// to do add input to edit the text of h3 and save it 

// let elementToEdit = document.querySelector(`.textNum${x}`)	;
// console.log(elementToEdit)
// elementToEdit.addEventListener('click', () => {
//   let input = document.createElement('input');
  
//   input.type = 'text';
//   input.classList.add('taskIn');
//   input.value = elementToEdit.innerHTML;
  
//   input.id = 'taskIn';
//   input.name = 'inputToEdit';
//   elementToEdit.innerHTML = '';
//   elementToEdit.appendChild(input);
//   input.focus();


//   if (input.value == '') {
//     deleteTask(x+'toEdit');
//   }
// });
let editTask = (x) => {
  let elementToEdit = document.querySelector(`.textNum${x}`)	;
  
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
      input.onblur = () => {
        input.remove();
      }
    
    }
  });
}
// to do a button to make as done
const markAsDone = (x) => {
  let elementToMarkAsDone = document.querySelector(`.textNum${x}`)	;
  elementToMarkAsDone.classList.add('done');
}
//

