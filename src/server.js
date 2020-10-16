//IMPORT LIB
const express = require('express');
const path = require('path');

//INICIATE THE EXPRESS
const server = express()
server
//USING STATIC ARCHIVES
.use(express.static('public'))

//CREATE ROUT
.get('/',(request, response) => {
    return response.sendFile(path.join(__dirname, 'views', 'index.html'))
})

//TURN ON SERVER
server.listen(5500)