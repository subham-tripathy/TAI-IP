let taskCounter = 0

document.addEventListener('DOMContentLoaded', () => {
    loadTasks()
})

const taskDiv = document.querySelector('#taskDiv')
const taskInput = document.querySelector('#input input')
const addTaskBTN = document.querySelector('#input button')
addTaskBTN.addEventListener('click', () => {
    if (taskInput.value == '') {
        alert('Empty Task Cannot be Added !!!')
    }
    else {
        taskCounter++
        let div = document.createElement('div')
        let p = document.createElement('p')
        let button1 = document.createElement('button')
        let button2 = document.createElement('button')
        let img1 = document.createElement('img')
        let img2 = document.createElement('img')

        img1.src = './images/tick.png'
        img2.src = './images/bin.png'
        button1.appendChild(img1)
        button2.appendChild(img2)
        button1.classList.add('task' + taskCounter)
        button2.classList.add('task' + taskCounter)
        button1.addEventListener('click', () => { doneFunc(button1) })
        button2.addEventListener('click', () => { deleleFunc(button2) })
        p.addEventListener('click', () => { editTask(p) })
        p.textContent = taskInput.value
        p.classList.add('task' + taskCounter)
        div.appendChild(p)
        div.appendChild(button1)
        div.appendChild(button2)
        div.classList.add('task' + taskCounter)
        div.classList.add('task')
        taskDiv.appendChild(div)
        taskInput.value = '';
        savelocally();
    }
})













function doneFunc(btn) {
    let targetP = document.querySelector('p.' + btn.classList[0])
    let targetDiv = document.querySelector('div.' + btn.classList[0])
    if (targetP.classList.contains('completed')) {
        targetP.classList.remove('completed')
        targetDiv.style.opacity = '1'
    }
    else {
        targetP.classList.add('completed')
        targetDiv.style.opacity = '0.5'
    }
    savelocally()
}


function deleleFunc(btn) {
    let deleteDiv = document.querySelector('div.' + btn.classList[0])
    deleteDiv.style.position = "relative"
    deleteDiv.style.left = "-70%"
    setTimeout(() => {
        deleteDiv.parentNode.removeChild(deleteDiv)
        savelocally()
    }, 1000);
}

function editTask(targetP) {
    const className = targetP.classList[0]
    targetP.style.display = 'none'
    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.classList.add(className)
    targetP.parentNode.appendChild(newInput)
    newInput.addEventListener('keyup', (e) => {
        if (e.key == 'Enter') {
            targetP.textContent = newInput.value
            targetP.style.display = 'block'
            newInput.parentNode.removeChild(newInput)
            savelocally()
        }
    })
}




















function savelocally() {
    const tasks = []
    const todoText = document.querySelectorAll('.task p')
    todoText.forEach(p => {
        tasks.push({
            text: p.textContent,
            taskNo: p.classList[0],
            completed: p.classList.contains('completed')
        })
    })
    localStorage.setItem('subham-todo-tasks', JSON.stringify(tasks))
}


function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('subham-todo-tasks')) || []
    let tempCounter = 1
    taskCounter = tasks.length
    tasks.forEach(task => {
        let div = document.createElement('div')
        let p = document.createElement('p')
        let button1 = document.createElement('button')
        let button2 = document.createElement('button')
        let img1 = document.createElement('img')
        let img2 = document.createElement('img')

        img1.src = './images/tick.png'
        img2.src = './images/bin.png'
        button1.appendChild(img1)
        button2.appendChild(img2)
        button1.classList.add(`task${tempCounter}`)
        button2.classList.add(`task${tempCounter}`)
        button1.addEventListener('click', () => { doneFunc(button1) })
        button2.addEventListener('click', () => { deleleFunc(button2) })
        p.addEventListener('click', () => { editTask(p) })
        p.textContent = task.text
        p.classList.add(`task${tempCounter}`)
        if (task.completed) {
            p.classList.add('completed')
            div.style.opacity = '0.5'
        }
        div.appendChild(p)
        div.appendChild(button1)
        div.appendChild(button2)
        div.classList.add(`task${tempCounter}`)
        div.classList.add('task')
        taskDiv.appendChild(div)
        savelocally()
        tempCounter++
    })
}







const helpBTN = document.querySelector('#helpBTN')
const helpBox = document.querySelector('#helpBox')
helpBTN.addEventListener('click', () => {
    helpBox.style.right = '2%'
    helpBox.style.left = '2%'
    helpBox.style.top = '5%'
    helpBox.style.bottom = '5%'
})

document.querySelector('body').addEventListener('keyup', (e) => {
    if(e.key == 'Escape'){
        helpBox.style.right = '100%'
        helpBox.style.left = '-100%'
    }
})
