const fs = require("fs"),
httpStatus = require("http-status-codes"),
contentTypes = require("./contentTypes");

module.exports = {
    getFile: (file, res) => {
        fs.readFile(`./${file}`, (error, data) => {
            if (error) {
                res.writeHead(httpStatus.INTERNAL_SERVER_ERROR,
                    contentTypes.html);
                    res.end("Houve um erro ao servir o conteúdo");
            }
            res.end(data);
        })
    }
};