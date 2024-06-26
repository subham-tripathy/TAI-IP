// IMAGE SLIDER PROJECT BY SUBHAM

const sliderContainer = document.querySelector('#sliderContainer')
const sliderIMG = document.querySelectorAll('.sliderIMG')
const prevBTN = document.getElementById('prev')
const nextBTN = document.getElementById('next')



for (let i = 0; i < sliderIMG.length; i++) {
    sliderIMG[i].style.left = `${i}` * 100 + '%'
}



sliderIMG.forEach(e => {
    let sliderContainerWidth = sliderContainer.clientWidth
    const marginToBalance = parseInt((sliderContainerWidth - e.clientWidth) / 2)
    e.style.marginLeft = `${marginToBalance}` + 'px'
    e.style.marginRight = `${marginToBalance}` + 'px'
})


window.onresize = () => {
    sliderIMG.forEach(e => {
        let sliderContainerWidth = sliderContainer.clientWidth
        const marginToBalance = parseInt((sliderContainerWidth - e.clientWidth) / 2)
        e.style.marginLeft = `${marginToBalance}` + 'px'
        e.style.marginRight = `${marginToBalance}` + 'px'
    })
}





function checkBTNcolor() {
    if (counter <= 0) {
        prevBTN.style.opacity = 0.4;
    }
    if (counter > 0) {
        prevBTN.style.opacity = 1;
    }
    if (counter >= sliderIMG.length - 1) {
        nextBTN.style.opacity = 0.4;
    }
    if (counter < sliderIMG.length - 1) {
        nextBTN.style.opacity = 1;
    }
}


let counter = 0

prevBTN.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        sliderIMG.forEach(e => {
            e.style.left = (parseInt((e.style.left).replace('%', '')) + 100) + '%'
        })
    }
    checkBTNcolor()
})

nextBTN.addEventListener('click', () => {
    if (counter < sliderIMG.length - 1) {
        counter++;
        sliderIMG.forEach(e => {
            e.style.left = (parseInt((e.style.left).replace('%', '')) - 100) + '%'
        })
    }
    checkBTNcolor()
})