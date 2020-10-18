const Database = require('./db');

Database.then(async db => {
    //insert data into the table
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-27.220369",
            "-49.6525051",
            "Lar dos meninos",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
            "5959595532"
            "https://images.unsplash.com/photo-1598137203972-e8cb7fc24345?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar",
            "Horário de visitas Das 18h até 8h",
            "0"
        );
    `)

    //query table data
    const selectedOrphanages =  await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages);

    //Consult 1 orphanage by id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage);
})