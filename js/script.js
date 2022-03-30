// creo i box con le immagini
const slider = document.getElementById('slider');
const img = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];
for (i = 0; i < img.length; i++) {
    slider.innerHTML += `
    <div class="box ${i == 0 ? 'show':''}">
        <img src="${img[i]}" alt="">
    </div>`
}
// creo i box per le immagini laterali
const aside = document.createElement('div')
aside.classList.add('aside')
slider.append(aside)
for (i = 0; i < img.length; i++) {
    aside.innerHTML += `
        <div class="filler ${i == 0 ? 'active':''}">
        <img src="${img[i]}" alt="">
        </div>`
}
// creo i nomi di città
const title = ['Amsterdam', 'Svizzera', 'Londra', 'Costantinopoli', 'Hawaii']
for (i = 0; i < title.length; i++) {
    slider.innerHTML += `
    <div class="title ${i == 0 ? 'show':''}">
    <p>${title[i]}</p>
    <p class="sub">Lorem Ipsium</p>
    </div>`
}
// costanti per l'evento
const box = document.getElementsByClassName('box')
const filler = document.getElementsByClassName('filler')
const down = document.querySelector('.fa-angle-down')
const city = document.getElementsByClassName('title')
let counter = 0
down.addEventListener('click', function () {
    // rimuovo la classe attivante
    filler[counter].classList.remove('active')
    city[counter].classList.remove('show')
    box[counter].classList.remove('show')
    // aumento il contatore
    counter = counter + 1
    // if di controllo
    if (counter == 5) {counter = 0}
    // aggiungo la classe attivante
    filler[counter].classList.add('active')
    city[counter].classList.add('show')
    box[counter].classList.add('show')
})

const up = document.querySelector('.fa-angle-up')
up.addEventListener('click', function () {
    filler[counter].classList.remove('active')
    city[counter].classList.remove('show')
    box[counter].classList.remove('show')
    counter = counter - 1
    if (counter == -1) {counter = 4}
    filler[counter].classList.add('active')
    city[counter].classList.add('show')
    box[counter].classList.add('show')
})

