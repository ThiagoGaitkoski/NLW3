//IMPORT LIB
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

//INICIATE THE EXPRESS
const server = express()
server
    //USING STATIC ARCHIVES
    .use(express.static('public'))

    //CONFIGURE TEMPLATE ENGINE
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    //ROUTS OF APLICATION
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)

//TURN ON SERVER
server.listen(5500)