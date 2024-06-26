const carouselDiv = document.querySelectorAll('.carouselDiv')

for (let i = 0; i < carouselDiv.length; i++) {
    carouselDiv[i].style.left = `${i * 100}%`
}

const carouselBTN = document.querySelectorAll('.carouselBTN')
const leftCarouselBTN = document.querySelector('#left')
const rightCarouselBTN = document.querySelector('#right')
const carousel = document.querySelector('#carousel')

carousel.addEventListener('mouseover', () => {
    carouselBTN.forEach(btn => {
        btn.style.opacity = 1
    })
})

carousel.addEventListener('mouseout', () => {
    carouselBTN.forEach(btn => {
        btn.style.opacity = 0
    })
})
function changeCarouselDivs() {
    let tempIndex = carouselIndex
    carouselDiv.forEach(div => {
        div.style.left = `${tempIndex * 100}%`
        tempIndex++
    })
}

let carouselIndex = 0

leftCarouselBTN.addEventListener('click', () => {
    if (carouselIndex < 0) {
        carouselIndex++
        changeCarouselDivs()
    }
    else {
        carouselIndex = -1 * (carouselDiv.length - 1)
        changeCarouselDivs()
    }
})

rightCarouselBTN.addEventListener('click', () => {
    if ((carouselIndex * -1) < carouselDiv.length - 1) {
        carouselIndex--
        changeCarouselDivs()
    }
    else {
        carouselIndex = 0
        changeCarouselDivs()
    }
})


// CAROUSEL WILL WORK AUTOMATIC 
setInterval(() => {
    if ((carouselIndex * -1) < carouselDiv.length - 1) {
        carouselIndex--
        changeCarouselDivs()
    }
    else {
        carouselIndex = 0
        changeCarouselDivs()
    }
}, 3000);



















const RecipeData = [
    {
        "name": "Burger",
        "img": "./images/burger-bg.jpg",
        "href": "./burger.html"
    },
    {
        "name": "Sushi",
        "img": "./images/recipe-page-sushi-bg-1.jpg",
        "href": "./sushi.html"
    },
    {
        "name": "Mango Juice",
        "img": "./images/mango-juice-bg.jpg",
        "href": "./mango-juice.html"
    },
    {
        "name": "Omelette",
        "img": "./images/omelette-bg.jpg",
        "href": "./omelette.html"
    },
]





const searchResult = document.querySelector('#searchResult')
const searchInput = document.querySelector('#searchInput input')
searchInput.addEventListener('keyup', () => {
    if (searchInput.value == '') {
        searchResult.style.display = 'none'
    }
    else {
        searchResult.style.display = 'block'
        var result = RecipeData.filter(item => item.name.toLowerCase().includes(searchInput.value));
        searchResult.innerHTML = ""
        result.forEach(data => {
            let a = document.createElement('a')
            let img = document.createElement('img')
            let h3 = document.createElement('h3')
            a.href = data.href
            img.src = data.img
            h3.textContent = data.name
            a.appendChild(img)
            a.appendChild(h3)
            searchResult.append(a)
        })
    }
})