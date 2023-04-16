const Con = document.querySelector(".posts");

var postNum = 1

const addTask = () => {
     postNum++;
    const task = document.getElementById("taskIn").value
    const elementToAdd = ` <div class="post1 postNum${postNum} " >
    <div id="taskContainer" class="taskContainer">
        <h3 on click id="text postNum${postNum}">${task}</h3>
    </div>
      <div>
      <button name="delete" onclick="deleteTask(${postNum})" >
      <img class="img" width="30px" src="assets/delete.png" alt="">
  </button>
  <button onclick="edit(task)">
  <img class="img" width="30px" src="assets/edit.png" alt=""> 
</button>
      </div>
</div>`
if(task != ""){

  Con.insertAdjacentHTML("beforeend", elementToAdd)
}
}
const  deleteTask = (x) => {
  
 let elementToDelete = document.querySelector(`.postNum${x}`)	;
 elementToDelete.remove();

}
// to do add input to edit the text of h3 and save it 
const  edit = () => {
  let elementToEdit = document.querySelector(`.postNum${postNum}`)
  elementToEdit.innerHTML = "hello";	
  
} 
// to do a button to make as done