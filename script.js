const addTask = () => {
    const task = document.getElementById("taskIn").value
    let divAdded = `<div class="post1">
    <div id="taskContainer" class="taskContainer">
        <h3 id="text">${task}</h3>
    </div>
      <div>
        <img class="img" width="30px" src="assets/delete.png" alt="">
        <img class="img" width="30px" src="assets/edit.png" alt="">
          <!-- <button class="buttonEdit" id="addBtn" >Edit</button>
          <button class="buttonDelet" id="addBtn" >Delet</button> -->
      </div>
 </div>`
   
}