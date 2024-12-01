const inputbox = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');

function addTodo () {
    if(inputbox.value === ""){
        alert('Please Enter Your Todo');
    }
    else {
        let li = document.createElement("li");
        li.textContent = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement('span')
        span
    }

}