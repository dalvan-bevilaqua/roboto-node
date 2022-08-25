const whatsAppProvider = require("../service/whatsAppProvider");

exports.sendMesageToNumber = function (req, res) {
  console.log(req.body);
  whatsAppProvider.sendMessageToNumber(req.params.numero, req.params.mensagem);
  res.send();
};
