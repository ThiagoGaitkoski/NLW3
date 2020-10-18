const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

    //insert data into the table
    await saveOrphanage(db, {
        lat: "-27.220369",
        lng: '-49.6525051',
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "31232133",
        images: [
            "https://images.unsplash.com/photo-1598137203972-e8cb7fc24345?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1597730945481-f35a5cf39021?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    })

    //query table data
    const selectedOrphanages =  await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //Consult 1 orphanage by id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    //delete data from table
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
})