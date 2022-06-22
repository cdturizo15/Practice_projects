var okbtn = document.getElementById("add-btn");
var inputText = document.getElementById("input-todo");
var list = document.getElementById("list-container");
var trash
okbtn.addEventListener("click", addToList );
inputText.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        addToList()
    }
})

function addToList(){
    
    if(inputText.value == null || inputText.value == undefined || inputText.value == ""){
        alert("Accion no puede estar vacia")
    }
    else{
        let action = document.createTextNode(inputText.value); 
        let myAction = document.createElement('li')
        let deletebtn = document.createElement('span')
        deletebtn.innerHTML = "delete"
        deletebtn.id = "delete" + (list.childElementCount + 1);
        myActionContainer = document.createElement('div')
        myActionContainer.classList.add("action-container")
        deletebtn.classList.add("material-symbols-outlined")
        myAction.appendChild(action)
        myAction.classList.add("action")
        myActionContainer.appendChild(myAction)
        myActionContainer.appendChild(deletebtn)
        myActionContainer.id = "container" + (list.childElementCount + 1)
        list.appendChild(myActionContainer)
        inputText.value = ""
        deletebtn.addEventListener("click",()=>{
            div = deletebtn.parentNode
            list.removeChild(div)
        }) 
        
    }  
}

 
