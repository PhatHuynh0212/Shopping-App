const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const header = $('header')
const imgContainer = $(".aspect-ratio-169");
const imgPosition = $$(".aspect-ratio-169 img");
const dotItem = $$('.dot')

let imgNumber = imgPosition.length
let index = 0;

// Change slide when click dots
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

// Menu fixed

window.addEventListener('scroll', function() {
    x = window.scrollY
    if (x > 0) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
})

// Menu sidebar category

const itemsSidebar = $$('.category-left-li')
itemsSidebar.forEach(function(menu, index) {
    menu.addEventListener('click', function() {
        menu.classList.toggle('block')
    })
})

// Products

// Click image o=in product

const bigImg = $('.product-content-left-big-img img')
const smallImg = $$('.product-content-left-small-img img')

smallImg.forEach(function(img) {
    img.addEventListener('click', function() {
        bigImg.src = img.src
    })
})

// Tab UI

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

// Phải tiến hành lấy chiều dài của tab item để set đường gạch dưới
const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

// Line ở tab-item active : React
line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function () {
        $(".tab-item.active").classList.remove("active");
        $(".tab-pane.active").classList.remove("active");

        this.classList.add("active");
        pane.classList.add("active");

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";
    };
});


