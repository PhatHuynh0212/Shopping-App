const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const header = $('header')
const imgContainer = $(".aspect-ratio-169");
const imgPosition = $$(".aspect-ratio-169 img");
const dotItem = $$('.dot')

let imgNumber = imgPosition.length
let index = 0;

// Chuyển slide khi bấm vào dot
imgPosition.forEach(function (img, index) {
    img.style.left = index * 100 + "%";
    dotItem[index].onclick = function() {
        slideChange(index)
    }
});

function imgSlide() {
    index++;
    if (index >= imgNumber) {
        index = 0
    }
    slideChange(index)
}

function slideChange(index) {
    imgContainer.style.left = "-" + index * 100 + "%"
    const dotActive = $('.dot.active')
    dotActive.classList.remove('active')
    dotItem[index].classList.add('active')
}

window.addEventListener('scroll', function() {
    x = window.scrollY
    if (x > 0) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
})
