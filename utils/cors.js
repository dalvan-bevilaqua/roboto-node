exports.crossOrigin = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "localhost:3000");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};
