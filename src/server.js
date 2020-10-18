//IMPORT LIB
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

//INICIATE THE EXPRESS
const server = express()
server
    //USING BODY REQ
    .use(express.urlencoded({ extended: true }))
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
    .post('/save-orphanage', pages.saveOrphanage)

//TURN ON SERVER
server.listen(5500)