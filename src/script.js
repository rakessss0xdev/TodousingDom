const inputbox = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');

function addTodo() {
    if (inputbox.value === "") {
        alert('Please Enter Your Todo');
    } else {
        let li = document.createElement("li");
        li.textContent = inputbox.value;

        let span = document.createElement('span');
        span.innerHTML = '\u00d7'; // Unicode for '×'
        span.className = 'close';

        // Add event listener for the close button
        span.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(span);
        listcontainer.appendChild(li);
    }

    inputbox.value = '';
}
