const express = require("express");

const routes = express.Router();
const UserController = require("./controllers/UserController");
const ClienteController = require("./controllers/ClienteController");
const ServiceController = require("./controllers/ServiceController");
const SessionController = require("./controllers/SessionController");
const authMiddleware = require("./middlewares/auth");

routes.post("/usuario", UserController.store);
routes.post("/sessions", SessionController.store);
routes.use(authMiddleware);


routes.post("/cliente", ClienteController.store);
routes.get("/cliente", ClienteController.list);

routes.post("/service", ServiceController.store);
routes.get("/service", ServiceController.index);
routes.get("/usuario", UserController.list);
routes.get("teste", (req, res) => res.json({ ok: true }));
module.exports = routes;
