let btn =  document.querySelector(".add-task-btn");
let input = document.querySelector(".task-input");
let parent =  document.querySelector(".list");


btn.addEventListener("click", function(e) {
    let task = input.value;
    if (task) {
        let li = document.createElement("li");
        li.classList.add("task-item");
        li.innerText = task.trim();
        parent.appendChild(li);
        input.value = ""; // Clear the input field after adding the task

        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerText = "Delete";
        li.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", function(){
            li.remove();
            
        })
    }else{
        alert("Please enter a task");
    }

})