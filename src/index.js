taskk=document.querySelector("#submitt123")
const taskList = document.getElementById('tasks');

taskk.onclick=function(event){
event.preventDefault()
const li = document.createElement("li")
x = document.getElementById("new-task-description").value;
li.textContent=x
taskList.appendChild(li)
const deleteButton = document.createElement('button')
deleteButton.innerText = 'Del';
deleteButton.addEventListener('click', () => {
taskList.removeChild(li);
});
li.appendChild(deleteButton)

console.log(event.target)
}
