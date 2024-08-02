
const input = document.getElementById('input');
const button = document.getElementById('button');
const taskList = document.getElementById('taskList');
let taskId = 0;

function getInput() {
    if (input.value === '') {
        alert('Add a new task');
        return;
    }
    
    const newTask = document.createElement('div');
    newTask.setAttribute('data-task-id', taskId); 
    newTask.innerHTML = `
        <div class="listitems my-4 justify-between flex items-center rounded-md h-14 px-4">
            <div class=" flex gap-4 items-center">
                <input  onclick="toggleStrikeThrough(${taskId})" class=" cursor-pointer" type="checkbox">
                <p id="task-${taskId}" class=" select-none">${input.value}</p>
            </div>
            <div class=" cursor-pointer flex justify-center items-center w-8 h-8 bg-[#A03D7E] rounded-full" onclick="removeTask(${taskId})">
                <span class="material-symbols-outlined text-white">
                    delete
                </span>
            </div>
        </div>
    `;
    
    taskList.appendChild(newTask);
    input.value = '';
    taskId++;
}
function toggleStrikeThrough(id){

        const taskText = document.getElementById(`task-${id}`);
        if (taskText) {
            taskText.classList.toggle('strikethrough');
        }
    
}
function removeTask(id) {
    const taskToRemove = document.querySelector(`[data-task-id='${id}']`);
    if (taskToRemove) {
        taskList.removeChild(taskToRemove);
    }
}

button.addEventListener('click', getInput);
