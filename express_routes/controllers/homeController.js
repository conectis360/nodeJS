exports.enviaReqParametro = (req, res) => {
    let veg = req.params.vegetable;
    res.send(`essa página é para o: ${veg}`);
};

exports.reqLogCaminho = (req, res, next) => {
    console.log(`requisição feita para: ${req.url}`)
    next();
};

exports.postHome = (req, res) =>{
    console.log(req.body);
    console.log(req.query);
    res.send("Postado com sucesso, após mover para controller.");
};