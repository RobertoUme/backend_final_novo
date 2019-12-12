const Cliente = require("../models/Cliente");
module.exports = {
  async store(req, res) {
    if (await Cliente.findOne({cpf: req.body.cpf })){
      return res.status(400).json({error: "Esse CPF já foi cadastrado"});
    }
    const cliente = await Cliente.create(req.body);
    return res.json(cliente);
  },
  async list(req, res) {
    const cliente = await Cliente.find({});
    return res.json(cliente);
  },
  async index(req, res) {
    const cliente = await Cliente.findOne({ cpf: req.params.cpf });
    return res.json(cliente);
  },
  async update(req, res) {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id ,req.body,{new:true});
    return res.json(cliente);
  },
  async destroy(req, res){
    await cliente.deleteOne({_id: req.params.id});
    return res.json({message:"Exclusão realizada com sucesso!"});
  }
};