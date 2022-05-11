'use strict';
const Administrateur = require('../models/administrateur.model');
exports.findAll = function (req, res) {
  Administrateur.findAll(function (err, administrateur) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', administrateur);
    res.send(administrateur);
  });
};
exports.create = function (req, res) {
 
  const new_admin = new Administrateur(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Administrateur.create(new_admin, function (err, administrateur) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "Administrateur added successfully!", data: administrateur });
    });
  }
};
exports.findById = function (req, res) {
  Administrateur.findById(req.params.id, function (err, administrateur) {
    if (err)
      res.send(err);
    res.json(administrateur);
  });
};
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Administrateur.update(req.params.id, new Administrateur(req.body), function (err, administrateur) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'Administrateur successfully updated' });
    });
  }
};
exports.delete = function (req, res) {
  Administrateur.delete(req.params.id, function (err, administrateur) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'Administrateur successfully deleted' });
  });
};

exports.login = function (req, res) {
  const data = req.body


  Administrateur.findByLoginAndPassword([data.login], function(err, administrateur) {
    if (err)
      res.send(err);


    if (administrateur.length==1) {

      if (administrateur[0].mdp===data.password) {
        res.json({ error: false, message: 'administrateur  exist' });
      }
      else {
        res.json({ error: true, message: 'password dont match' });
      }

    }
    else {
      res.json({ error: true, message: 'administrateur not exist' });

    }

  });
};