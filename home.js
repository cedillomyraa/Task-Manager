var nonImportantClass = "far fa-star";
var importantClass = "Fas fa-star";
var isImportant = false;
var isFormVisible = true;

function toggleForm(){
    if(isFormVisible){
        //hide
        isFormVisible =false;
        $("#form").hide();
    }
    else {
        //show
        isFormVisible =true;
        $("#form").show();
    }
}

function toggleImportant(){
    console.log("icon-clicked");

    if(isImportant){
        //non important
        isImportant = false;
        $("#iImportant").removeClass(importantClass);
        $("#iImportant").addClass(nonImportantClass);
    }
    else{
        //important
        $("#iImportant").removeClass(nonImportantClass);
        $("#iImportant").addClass(importantClass);
        isImportant = true;
    }
}

function saveTask(){
    console.log("Task Saved");

    let title= $("#txtTitle").val();
    let dueDate= $("#txtDueDate").val();
    let participants= $("#txtParticipants").val();
    let location= $("#txtLocation").val();
    let notes= $("#txtNotes").val();
    let category= $("#txtCategory").val();
    let color= $("#txtColor").val();

    

    let taskObject = new Task(title,dueDate,participants,location,notes,category,color,isImportant);
    console.log(taskObject);

    displayTask(taskObject);
}

function displayTask(taskObject){
    //create the syntax and append an element to the screen
    let syntax=`<div class="task-object">
        <h2 class="task-title">${taskObject.title} </h2>

        <label class="due-date">${taskObject.dueDate} </label>
        <label class="people">${taskObject.participants} </label>
        <label class="location">${taskObject.location} </label>

        <p class="notes">${taskObject.notes} </p>

        <lable class"category">${taskObject.category} </label>
    
        <button onclick="deleteTask() " class="btn btn-sm btn-danger">Remove</button>
    </div>`;
    $("#task-list").append(syntax);
}

function deleteTask(){
    console.log("deleting  task");
}

function init(){
    console.log("Task manager");

    // events
    $("#iImportant").click(toggleImportant);
    //load data
    $("#btnToggleForm").click(toggleForm);
    $("#saveTask").click(saveTask)
    $("#btnSave").click(saveTask);
}
window.onload = init;


//create a button an if statment 















//NOTES 

// function init(){
//     console.log("Task manager");

//     //click for priority 
//     //$() find me an elament by ID, Class, or Tag
//     $("#iImportant").click(function(){
//         console.log("icon-clicked");
//     });
// }