const express = require('express');
const fisevro = require('../models/Fisevro');

//GET ALL
exports.listar_todos_fisevros = function(req, res) {
    fisevro.find({}, function(err, fisevro) {
        if(err) {
            res.send(err)
        }
        res.json(fisevro)
    })
}

//GET ID
exports.listar_um_fisevro = function(req, res) {
    fisevro.find({"_id": req.params.fisevroId}, function(err, fisevro) {
        if(err) {
            res.send(err)
        }
        res.json(fisevro)
    })
}

//POST
exports.adicionar_um_fisevro = function(req, res) {
   novo_fisevro = new fisevro(req.body)
   novo_fisevro.save(function(err, fisevro){
        if(err) {
            res.send(err)
        }
        res.json(fisevro)
   })
}

//PUT 
exports.atualiza_um_fisevro = function(req, res) {
   fisevro.findOneAndUpdate({_id: req.params.fisevroId}, req.body, {new: true},
   function(err, fisevro){
        if(err) {
            res.send(err)
        }
        res.json(fisevros)
   })
}


//DELETE 
exports.remover_um_fisevro = function(req, res) {
    fisevro.remove({_id: req.params.fisevroId}, function(err, fisevro){
         if(err) {
            res.send(err)
        }
        res.json(fisevros)
    })
}