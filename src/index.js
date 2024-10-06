const myarray=[]
document.addEventListener("DOMContentLoaded", () => {
  mysubmitt();
  
});

function mysubmitt(event){
  event.preventDefault()
  const formDataa=new FormData(event.target)
  const x=Object.fromEntries(formDataa.entries())
  console.log(x)

}
document.getElementById("create-task-form").addEventListener('submit',mysubmitt)
//console.log(myarray)