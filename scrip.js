const taskInput = document.getElementById("taskInput");
const descriptionInput = document.getElementById("descriptionInput");

const Addtask = document.getElementById("Addtask btn");
const TaskList = document.getElementById("TaskList");

let task = JSON(localStorage.getItem("task")) || []
 
function saveTask(){
    localStorage.setItem("task",JSON.stringify(task));
}

function Addtask ((Task,description)){

   constnewtask={
    id=Date.now()
     TaskList :task,
    description: deactiption,
   }
   task.push(new task);
   saveTask();
   displaytask();
}
 function EditTask(taskId){
    const task=task.find((u)=>u.id===taskId);
    const newtask=promp("Edittask:";Task.Task)

 }
 function displaytask(){
    TaskList.innerHTML="";
    task.foreach((task)=>{
        const row=documentcreateTask("tr")
        row.innerHTML=
        <td>
            <td>${task.taskname}</td>
             <td>${task.description}</td>
        


    

    <button class="btn btn-warning btn-5m" onclick="edittask(${task.id})">edit</button>


    <button class="btn btn-Danger btn-5m" onclick="deletetask(${task.id})">delete</button>
     </td>
     ;
     TaskList.appendChild(row);
});
 }


 
     





 