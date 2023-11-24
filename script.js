 const inputBox = document.getElementById("input-box");
 const listCon = document.getElementById("list-con");
function AddTask(){
    if(inputBox.value === ''){
        alert("you must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listCon.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    inputBox.value ="";
    saveData();
}
listCon.addEventListener("click",function(e){
    if(e.target.tarName ==="LI"){
        e.target.classList.toggle("unchecked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",listCon.innerHTML);

}
function showTask(){
    listCon.innerHTML = localStorage.getItem("data");
}
showTask();