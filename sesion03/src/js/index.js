// elementos para agregar nueva tarea
let addInput = document.querySelector('.container>p>input')
let addButton = document.querySelector('.container>p>button')
// contenedores de tareas
let incompleteTasksHolder = document.querySelector('.container>ul')
let completeTasksHolder = document.querySelector('.container>ul:nth-of-type(2n)')
// let completeTasksHolder = document.querySelectorAll('.container>ul')[1]

let createNewTaskElement = function (taskString) {
    let listItem = document.createElement('li')
    let checkBox = document.createElement('input')
    let label = document.createElement('label')
    // todo: agregar input to edit
    let editInput = document.createElement('input')
    let editButton = document.createElement('button')
    let deleteButton = document.createElement('button')

    // update type
    checkBox.type = 'checkbox'
    editInput.type = 'text'

    editButton.innerText = 'Edit'
    editButton.classList.add('edit')
    deleteButton.innerText = 'Delete'
    deleteButton.classList.add('delete')

    label.innerText = taskString

    listItem.appendChild(checkBox)
    listItem.appendChild(label)
    listItem.appendChild(editInput)
    listItem.appendChild(editButton)
    listItem.appendChild(deleteButton)

    return listItem
}

// Add new task
let addTask = function () {
    console.log('*** addTask ***')
    let listItem = createNewTaskElement(addInput.value)
    incompleteTasksHolder.appendChild(listItem)
    bindTaskEvents(listItem, taskComplete)
    addInput.value = ""
}

// Mark as complete
let taskComplete = function () {
    console.log('*** task complete ***')
    let listItem = this.parentNode
    completeTasksHolder.appendChild(listItem)
    bindTaskEvents(listItem, taskIncomplete)
}

// Mark as incomplete
let taskIncomplete = function () {
    console.log('*** task incomplete ***')
    let listItem = this.parentNode
    incompleteTasksHolder.appendChild(listItem)
    bindTaskEvents(listItem, taskComplete)
}


let bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
    console.log('*** bind list item events ***')
    let checkBox = taskListItem.querySelector('input[type=checkbox]')
    let editButton = taskListItem.querySelector('button.edit')
    let deleteButton = taskListItem.querySelector('button.delete')

    //bind events
    // editButton.onclick = editTask
    // deleteButton.onclick = deleteTask
    editButton.addEventListener('click', editTask)
    deleteButton.addEventListener('click', deleteTask)
    checkBox.onchange = checkBoxEventHandler
}

let editTask = function () {
    console.log('*** editTask ***')
    let listItem = this.parentNode // li
    let editInput = listItem.querySelector('input[type=text]')
    let label = listItem.querySelector('label')
    let containsClass = listItem.classList.contains('editMode')

    if (containsClass) {
        label.innerText = editInput.value
    } else {
        editInput.value = label.innerText
    }

    listItem.classList.toggle('editMode')
}

let deleteTask = function () {
    console.log('*** deleteTask ***')
    let listItem = this.parentNode
    let ulContainer = listItem.parentNode
    ulContainer.removeChild(listItem)
}

addButton.addEventListener("click", addTask)

// inicializar bind de eventos
for (let i = 0; i < completeTasksHolder.children.length; i++) {
    bindTaskEvents(completeTasksHolder.children[i], taskIncomplete);
}
for (let i = 0; i < incompleteTasksHolder.children.length; i++) {
    bindTaskEvents(incompleteTasksHolder.children[i], taskComplete);
}