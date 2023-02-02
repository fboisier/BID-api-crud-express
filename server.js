const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

let users = [];
const inicializar = (cantidad = 11) => {
    users = [];
    for (var i = 0; i < cantidad; i++){
        users.push({ firstName: faker.name.firstName(),  lastName: faker.name.lastName() });
    }
}

inicializar(10);

app.get("/api/reiniciar/:cantidad", (req, res)=>{
    inicializar(req.params.cantidad);
    res.json( { status: `Se han creado los ${req.params.cantidad} usuarios.`} );
})
    
app.get("/api/users", (req, res) => {
    res.json( users );
});

app.post("/api/users", (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.json( { status: "ok" } );
});

app.get("/api/users/:id", (req, res) => {
    console.log(req.params.id);
    res.json( users[req.params.id] );
});

app.put("/api/users/:id", (req, res) => {
    const id = req.params.id;
    users[id] = req.body;
    res.json( { status: "ok" } );
});

app.delete("/api/users/:id", (req, res) => {
    const id = req.params.id;
    users.splice(id, 1);
    res.json( { status: "ok" } );
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );