const Con = document.querySelector(".posts");

var postNum = 1

const addTask = () => {
     postNum++;
    const task = document.getElementById("taskIn").value
    const elementToAdd = ` <div class="post1 postNum${postNum} " >
    <div id="taskContainer" class="taskContainer">
        <h3  id="text postNum${postNum}">${task}</h3>
    </div>
      <div>
      <button name="delete" onclick="deleteTask(${postNum})" >
      <img class="img" width="30px" src="assets/delete.png" alt="">
  </button>
        <img class="img" width="30px" src="assets/edit.png" alt=""> 
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
const  edit = (task) => {
  let elementToEdit = task.replace(" ","")
  elementToEdit.	;
  
}