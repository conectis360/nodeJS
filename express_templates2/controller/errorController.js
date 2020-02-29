const httpStatus = require("http-status-codes");

exports.respondNoResourceFound = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.sendFile(`./views/${errorCode}.html`,{
      root: "./"
    });
};

exports.respondInternalError = (error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`Ocorreu o Erro: ${error.stack}`)
    res.status(errorCode);
    res.send(`${errorCode} | Desculpe, nossa aplicação está com problemas.`)
};

exports.logErrors = (error, req, res, next) => {
  console.error(error.stack);
  next(error);
};