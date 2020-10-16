//CREATE MAP
var map = L.map('mapid').setView([-27.220369,-49.6525051], 15);

//CREATE AND ADD TILELAYER
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//CREATE ICON
var icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})

let marker;

// CREATE AND ADD MARKER
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //REMOVE ICON
    marker && map.removeLayer(marker)

    //ADD ICON LAYER
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

//ADD PHOTOS CAMP
function addPhotoField(){

    //GET CONTAINER PHOTOS #images
    const container = document.querySelector('#images')

    //GET CONTAINER FOR DUPLICATE .new-upload
    const fieldContainer = document.querySelectorAll('.new-upload')

    //DO DE CLONE FOR THE LAST IMAGE ADDED
    const newFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(true)

    //CHECK IF THE FIELD IS EMPTY, IF YES, DO NOT ADD IT TO THE IMAGE CONTAINER
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }

    //CLEAN THE FIELD BEFORE ADD TO CONTAINER OF IMAGE
    input.value = ""

    //ADD THE COLHE TO CONTAINER #images
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldContainer = document.querySelectorAll('.new-upload')

    if(fieldContainer.length < 2){
        //CLEAN FIELD
        span.parentNode.children[0].value = ""
        return
    }

    //DELETE FIELD
    span.parentNode.remove()
}
