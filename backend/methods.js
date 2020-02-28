const data = require('./data.js');

module.exports = {
    async create(req, res){
        return res.send('EAE');
    },

    async index(req, res){
        return res.send(data);
    },

    async getMembersByAge(req,res){
        return res.send( data.filter( curr => curr.idade === Number(req.params.age)) )
    }
}