var options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//CREATE MAP
var map = L.map('mapid', options).setView([-27.220369,-49.6525051], 15);

//CREATE AND ADD TILELAYER
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//CREATE ICON
var icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})


// CREATE AND ADD MARKER
L
.marker([-27.220369,-49.6525051], { icon })
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