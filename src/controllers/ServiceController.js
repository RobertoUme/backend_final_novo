const Servico = require("../models/Servico");
const Cliente = require("../models/Cliente");
module.exports = {
  async store(req, res) {
    
    const servico = await Servico.create(req.body);
    return res.json(servico);
  },

  async index(req, res) {
    const servico = await Servico.find({}).populate('cliente');

    return res.json(servico);
  },

  async list(req, res) {
    const servico = await Servico.find({});
    return res.json(servico);
  }
};