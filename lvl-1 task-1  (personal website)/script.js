const navBTN = document.querySelectorAll('nav button')
navBTN.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('section>div').forEach(e => {
            e.style.display = 'none'
        })
        const targetID = btn.textContent.toLowerCase()
        if (targetID == 'skills') {
            document.querySelector(`#${targetID}`).style.display = 'block'
        }
        else {
            document.querySelector(`#${targetID}`).style.display = 'flex'
        }
        document.querySelectorAll('.active').forEach(e => {
            e.classList.remove('active')
        })
        btn.classList.add('active')
    })
})