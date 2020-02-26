exports.cadastrarUsuario = (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("Usuário cadastrado com sucesso.");
}