const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
  authStrategy: new LocalAuth({ clientId: "DALVAN" }),
  puppeteer: {
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--unhandled-rejections=strict",
    ],
  },
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

function senMessageGrupo() {
  client.getChats().then((chats) => {
    let myGroupName = "Casa do Dalvan";
    let myGroup = chats.find((chat) => chat.name === myGroupName);
    client.sendMessage(myGroup.id._serialized, "por grupo");
  });
}

exports.sendMessageToNumber = function (number, mensagem) {
  //const number_details = "554699375951@c.us";

  number = number + "@c.us";
  console.log("Enviando mensagem para: " + number);

  client.isRegisteredUser(number).then(function (isRegistered) {
    if (isRegistered) {
      client.sendMessage(number, mensagem);
    } else {
      console.log("sendMessageToNumber -> Is not Registered");
    }
  });
};

client.on("message", (msg) => {
  if (msg.body == "Oi") {
    msg.reply("Oi");
  }
});

client.initialize();
