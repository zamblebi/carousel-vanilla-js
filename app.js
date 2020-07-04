let element = document.querySelector('.main')
let allElement = document.querySelectorAll('.carousel-item')
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')



//add absolute to all carousel elements
var i;
for(i = 0; i < allElement.length; i++){
    allElement[i].style.position = "absolute"
}

//transition element
// function transitionCarousel(e){
//     // element.style.transform = `translate3d(-${ per === 300 ? null : per += 100}%)`
//     element.style.transform = `translateX(-${ per === 300 ? null : per += 100}%)`
//     console.log('click')
// }


var per = 0
// element.addEventListener("click", transitionCarousel(e))


//prev and next button

next.addEventListener('click', (e) => {
        element.style.transform = `translateX(-${ per === 300 ? per = 0 : per += 100}%)`
})

prev.addEventListener('click', (e) => {
    element.style.transform = `translateX(-${ per === 0 ? per = 300 : per -= 100}%)`
})