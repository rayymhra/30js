const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Please Fill The Field");
    }
    else{
        let li = document.createElement("li"); // deklarasi variabel li
        li.innerHTML = inputBox.value;  // li = isi dari input
        listContainer.appendChild(li); // appendchild: add a new child node to an existing parent node

        //add yg buat ngapus
        let span = document.createElement("span");
        span.innerHTML = "\u00d7" //add one cross icon in the span tag
        li.appendChild(span);
    }
    inputBox.value = ""; //clear the text in input box
    saveData(); // manggil fungsi saveData setiap kali nambah task baru
} 

listContainer.addEventListener("click", function(e){  //whenever we clicked the container that we store the task
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); // if it clicked on li, then it'll add the checked class name
        // if the checked class name is already there, it'll remove that cz we have added classlist.toggle from the target element LI
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); // if clicked on SPAN then it'll delete the parent element, the parent element is LI so it'll remove the LI so the task will be deleted 
        saveData();
    }
}, false)

// biar kalo di refresh the data wont be gone
function saveData(){ // bikin function nya
    localStorage.setItem("data", listContainer.innerHTML); // "data": the name . listContainer: value that we want to save in our browser
}

// untuk display data whenever we open the website again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); // localStorage.getItem("data"): biar it'll give all the content stored in the browser with the name of "data"
}
showTask();