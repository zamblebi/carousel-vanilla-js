let element = document.querySelector('.main')
let allElement = document.querySelectorAll('.carousel-item')

var i;
for(i = 0; i < allElement.length; i++){
    allElement[i].style.position = "absolute"
}

var per = 0



console.log(element.style)
element.addEventListener("click", (e)=> {
    // element.style.transform = `translate3d(-${ per === 300 ? null : per += 100}%)`
    element.style.transform = `translateX(-${ per === 300 ? null : per += 100}%)`
    console.log('click')
})