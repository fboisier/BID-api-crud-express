const express = require("express");
const { reinicia, listarUsuarios, guardarUsuario, obtenerUsuario, actualizarUsuario, eliminarUsuario } = require("../controllers/usuarios");
const app = express();


app.get("/api/reiniciar/:cantidad", reinicia);
app.get("/api/users", listarUsuarios);
app.post("/api/users", guardarUsuario);
app.get("/api/users/:id", obtenerUsuario);
app.put("/api/users/:id", actualizarUsuario);
app.delete("/api/users/:id", eliminarUsuario);

module.exports = app;