const http = require("http");
const controller = require("./controllers/app_controller");
http.createServer(controller).listen(3000);
