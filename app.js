/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const router = express.Router();
const corsUtils = require("./utils/cors.js");
const app = express();
app.disable("x-powered-by");

const robotoController = require("./controllers/robotoController.js");

app.use(bodyParser.json());
app.use(cookieParser());
app.use(corsUtils.crossOrigin);

router.post("/numero/:numero/:mensagem", robotoController.sendMesageToNumber);

app.use("/wpp", router);

app.listen(4200, function () {
  console.log("OK");
});
