var options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//CREATE MAP
var map = L.map('mapid', options).setView([lat, lng], 15);

//CREATE AND ADD TILELAYER
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//CREATE ICON
var icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})


// CREATE AND ADD MARKER
L
.marker([lat, lng], { icon })
.addTo(map)


// GALERY IMAGE

function selectImage(event){
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove("active")
    })

    //selecionar imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")


    //atualizar o container de imagem
    imageContainer.src = image.src


    //adicionar a classe .active para o botao clicado
    button.classList.add("active")

}