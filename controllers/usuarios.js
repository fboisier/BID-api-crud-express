const { faker } = require('@faker-js/faker');

let users = [];
const inicializar = (cantidad = 11) => {
    users = [];
    for (var i = 0; i < cantidad; i++){
        users.push({ firstName: faker.name.firstName(),  lastName: faker.name.lastName() });
    }
}
inicializar(10);


const reinicia = (req, res)=>{
    inicializar(req.params.cantidad);
    res.json( { status: `Se han creado los ${req.params.cantidad} usuarios.`} );
}

const listarUsuarios = (req, res) => {
    res.json( users );
}

const guardarUsuario = (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.json( { status: "ok" } );
}

const obtenerUsuario = (req, res) => {
    console.log(req.params.id);
    res.json( users[req.params.id] );
}

const actualizarUsuario = (req, res) => {
    const id = req.params.id;
    users[id] = req.body;
    res.json( { status: "ok" } );
}

const eliminarUsuario = (req, res) => {
    const id = req.params.id;
    users.splice(id, 1);
    res.json( { status: "ok" } );
}

module.exports = {
    reinicia,
    listarUsuarios,
    guardarUsuario,
    obtenerUsuario,
    actualizarUsuario,
    eliminarUsuario,
}