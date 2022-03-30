const slider = document.getElementById('slider');
const img = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];
for (i=0; i<img.length; i++){
    slider.innerHTML += `
    <div class="box">
        <img src="${img[i]}" alt="">
    </div>`
}
const aside = document.createElement('div')
aside.classList.add('aside')
slider.append(aside)
for (i=0; i<img.length; i++){
    aside.innerHTML += `
        <img src="${img[i]}" alt="">`
}

const box = document.getElementsByClassName('box')
const down = document.querySelector('.fa-angle-down')
let counter = 0
down.addEventListener('click', function(){
    box[counter].classList.remove('show')
    if (counter == 5){
        counter = -1
    }
    counter = counter + 1
    box[counter].classList.add('show')
})

const up = document.querySelector('.fa-angle-up')
up.addEventListener('click', function(){
    box[counter].classList.remove('show')
    if (counter == 5){
        counter = 1
    }
    counter = counter - 1
    box[counter].classList.add('show')
})

