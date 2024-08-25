const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes"); //if notes is there in the browser then it will be displayed on the web page
}
showNotes();


function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML); //wathaver written in the container html will be stored in the browser name "notes"
}



createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "pict/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img); //the input box will be displayed inside this notes container. then the img will be displayed inside the p tag (input box)
    updateStorage();
})

notesContainer.addEventListener("click", function(e){ //when clicking this notes container
    if(e.target.tagName === "IMG"){ //and if the target element is IMG
        e.target.parentElement.remove(); //then it'll remove that parent element
        updateStorage()
    }
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){  //if click enter then it will 
        document.execCommand("insertLineBreak"); // add one line in the p tag
        event.preventDefault(); //and it will prevent the default of the enter key
    }
})