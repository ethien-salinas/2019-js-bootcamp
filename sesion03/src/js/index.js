// elementos para agregar nueva tarea
let addInput =  document.querySelector('.container>p>input')
let addButton =  document.querySelector('.container>p>button')
// contenedores de tareas
let incompleteTasksHolder = document.querySelector('.container>ul')
let completeTasksHolder = document.querySelectorAll('.container>ul')[1]

let createNewTaskElement = function(taskString){
    let listItem = document.createElement('li')
    let checkBox = document.createElement('input')
    let label = document.createElement('label')
    // todo: agregar input to edit
    let editButton = document.createElement('button')
    let deleteButton = document.createElement('button')

    // update type
    checkBox.type = 'checkbox'

    editButton.innerText = 'Edit'
    deleteButton.innerText = 'Delete'

    label.innerText = taskString

    listItem.appendChild(checkBox)
    listItem.appendChild(label)
    listItem.appendChild(editButton)
    listItem.appendChild(deleteButton)

    return listItem
}

// Add new task
let addTask = function(){
    console.log('*** addTask ***')
    let listItem = createNewTaskElement(addInput.value)
    incompleteTasksHolder.appendChild(listItem)
    addInput.value = ""
}

addButton.addEventListener("click", addTask)