let title = document.getElementById("title");
let description = document.getElementById("description");
let deadline = document.getElementById("date");
let priority = document.getElementById("priority");
let title_error =  document.getElementById("title_error");
let description_error =  document.getElementById("description_error");
let deadline_error =  document.getElementById("deadline_error");
let priority_error =  document.getElementById("priority_error");
let listtask = document.getElementById("listtask")




// // Array Section
const todoArray = [];


// //  Add section
const todoAddTask = (task) => {
    todoArray.push(task)
    
}


// Rendering Section
const renderTasks = (todoArray) => {
    let content = "<ul>";
    for (i = 0; i < todoArray.length; i++){
        content = content + 
        `
      <li>
        
        <h3> ${todoArray[i].title}</h3>
                <p>${todoArray[i].description} </p>
                <p>${todoArray[i].deadline}</p>
                <p>${todoArray[i].priority}</p>
         
      </li>
    `;

    }
    listtask.innerHTML = content + "</ul>";


}




// Event listener for validation
form.addEventListener('submit',  (e) => 
{
    e.preventDefault();
    // validation
    if (title.value === "" || title.value === null)
    {
        // e.preventDefault();
        title_error.innerHTML = "Title is required."

    }
    else {
        title_error.innerHTML = ""

    }
    if (description.value === "" || description.value === null)
        {
            // e.preventDefault();
            description_error.innerHTML = "Description is required."
    
        }
        else {
            description_error.innerHTML = ""
    
        }
   
    if (description.value === "" || description.value === null)
    {
        // e.preventDefault();
        description_error.innerHTML = "Task description is required.";
      
    }
    else {
        description_error.innerHTML = "";
    }

    if (deadline.value === "" || deadline.value === null)
    {
        // e.preventDefault();
        deadline_error.innerHTML = "Set your task deadline";

    }
    else{
        deadline_error.innerHTML = ""

    }
    if (priority.value === "" || priority.value === null) {
        // e.preventDefault();
        priority_error.innerHTML = "Priority is required"

        
    }
    else{
        priority_error.innerHTML = "";
    }

// Todo function 
    
        let titleValue = title.value;
        let descriptionValue = description.value;
        let deadlineValue = deadline.value;
        let priorityValue = priority.value

       
        
        todoAddTask(
        {
            // id: todoArray.length + 1,
           title: titleValue,
           description: descriptionValue,
           deadline: deadlineValue,
           priority: priorityValue,
        }
        )
        renderTasks(todoArray);
        title.value = "";
        description.value = "";
        deadline.value = "" ;
        priority.value = "";

})









   







// form.addEventListener('submit', (e) => 
//         {
        
        
//             let email_match = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        
//             if (surname.value === "" || surname.value == null)
//             {
//                 e.preventDefault();
                
//                 error.innerHTML = "Surname is required";
//             }
//             // else{
//             //     error.innerHTML = ""; allthough not neccesary here but take note in others
//             // }
        
//             if (firstname.value === '' || firstname.value == null)
//             {
//                 e.preventDefault();
//                 f_error.innerHTML = "Firstname is required"
//             }
//             // else{
//             //     f_error.innerHTML = ""; allthough not neccesary here but take note in other
//             // }
//             if (othernames.value === '' || othernames.value == null)
//             {
//                 e.preventDefault();
//                 o_error.innerHTML = "Othername is required"
//             }
//             // else{
//             //     o_error.innerHTML = ""; allthough not neccesary here but take note in other
//             // }
//             if (!email.value.match(email_match))
//             {
//                 e_error.innerHTML = "email is required"
        
//             }
            
//             if (password.value.length <= 5)
//             {
//                 e.preventDefault();
//                 p_error.innerHTML = "Password must not be less than five characters";
        
//             }
//             if (password.value.length >= 20)
//             {
//                 e.preventDefault();
//                 p_error.innerHTML = "Password must not be greater than 20 characters"
//             }
//             if (password.value === "password")
//             {
//                 e.preventDefault()
//                 p_error.innerHTML ="Password cannot be password"
//             }
                
            
        
//         })
        