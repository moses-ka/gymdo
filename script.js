const Con = document.querySelector(".posts");


const addTask = () => {
    const task = document.getElementById("taskIn").value
    const elementToAdd = ` <div class="post1">
    <div id="taskContainer" class="taskContainer">
        <h3 id="text">${task}</h3>
    </div>
      <div>
        <img class="img" width="30px" src="assets/delete.png" alt="">
        <img class="img" width="30px" src="assets/edit.png" alt=""> 
      </div>
</div>`
Con.insertAdjacentHTML("afterend", elementToAdd)
}