const input = document.getElementById("addtask");
const button = document.getElementById("addtaskbtn");
const list = document.getElementById("tasklist");

// Stores all tasks. This array is the source of truth.
let tasks = [];

// Runs whenever the Add Task button is clicked.
button.addEventListener("click", function () {

    // .value gets the text entered in an <input>.
    const task = (input.value).trim();
    // Remove whitespace from the beginning and end of the string.

    // Stop the function if the input is empty.
    if (task === "") {
        return;
    }

    // push() adds a new object to the end of the array.
    tasks.push({
        text: task,
        completed: false,
    });

    // Clear the input after adding the task.
    input.value = "";

    // Update the task list on the screen.
    renderTasks();
});

function renderTasks() {

    //we used textcontent becuase list is a dom elemnt but not a string 
    list.textContent = "";

    
    for (let i = 0; i < tasks.length; i++) {

        // Create a new <li> element in memory.
        const li = document.createElement("li");

        // Display the text of the current task.
        li.textContent = tasks[i].text;
        //create a button for each task to delete it and 
        //each butto will have a click event listener that will remove the task from the array and re-render the list
        //// This button remembers the current value of i (closure).
        //so when the button is clicked it will remove the correct task from the array
    
        const delbutton=document.createElement("button");
        delbutton.style.cursor="pointer";
        delbutton.textContent="Delete";
        delbutton.addEventListener("click",function(){
            tasks.splice(i,1);
            renderTasks();
        });
        
        
        const checkbox=document.createElement("input");
        checkbox.checked=tasks[i].completed;
        checkbox.type="checkbox";

        if(tasks[i].completed){
            li.style.textDecoration="line-through";
                li.style.color="lightgreen";
        }

        checkbox.addEventListener("change",function(){
            tasks[i].completed=checkbox.checked;
            tasks[i].completed = checkbox.checked;
                renderTasks();
                });

       
        list.appendChild(li);
        
        li.appendChild(checkbox);
        li.appendChild(delbutton);

        // Add the newly created <li> inside the <ul>.
        
    }
}