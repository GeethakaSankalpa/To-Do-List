// variables to get inputs and button
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === '' ){
        alert("You Must write something!")
    } else {
        let li = document.createElement("li");  // create HTML element
        li.innerHTML = inputBox.value;  // add to the input field
        listContainer.appendChild(li);      // add the input at the end      
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    } 
    inputBox.value = '';    // clear input box
    saveData();
}

listContainer.addEventListener("click", function(e){
    //  name of the element where the event occurred:
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();