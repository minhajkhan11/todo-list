let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function addTask() {
  
  if (inputBox.value == "") {
    alert("Enter task first!")
  } else {
    let li = document.createElement("li")
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span")
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = ''
  saveTask();
}

listContainer.addEventListener("click",(e)=>{
  if(e.target.tagName == "LI"){
    e.target.classList.toggle("checked");
      saveTask();
  }else if(e.target.tagName == "SPAN"){
    e.target.parentElement.remove();
      saveTask();
  }
})

function saveTask(){
  localStorage.setItem("data",listContainer.innerHTML)
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data")
}

showTask();