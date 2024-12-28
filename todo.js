const mineform = document.getElementById("mineform");
const mineinput = document.getElementById("mineinput");
const minelist = document.getElementById("minelist");

const mineArray = [];

const addTask = (task) => {
    mineArray.push(task);
};

const renderTasks = (mineArray) => {

    let content = "<ul>";
    for (i = 0 ; i < mineArray.length; i++){
    content =
      content +
      `
      <li>
        <span>${mineArray[i].text}</span>
        <button class="delete-btn">Delete</button>
      </li>
    `;

    }
    minelist.innerHTML = content + "</ul>";   
 
};


mineform.addEventListener("submit", function (e) {
    e.preventDefault();
    let inputValue = mineinput.value;
    addTask({
        id: mineArray.length +1,
        text: inputValue,
        completed: false,

        }

    );
    renderTasks(mineArray);
    mineinput.value = "";


});