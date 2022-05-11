'use strict';
const Enseignant = require('../models/enseignant.model');
exports.findAll = function (req, res) {
  Enseignant.findAll(function (err, enseignant) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', enseignant);
    res.send(enseignant);
  });
};
exports.create = function (req, res) {
  console.log(req.body)
  const new_ens = new Enseignant(req.body);
  //handles null errorhh@gmail.com"
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Enseignant.create(new_ens, function (err, enseignant) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "enseignant  added successfully!", data: enseignant });
    });
  }
};
exports.findById = function (req, res) {
  Enseignant.findById(req.params.id, function (err, enseignant) {
    if (err)
      res.send(err);
    res.json(enseignant);
  });
};
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Enseignant.update(req.params.id, new Enseignant(req.body), function (err, enseignant) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'enseignant  successfully updated' });
    });
  }
};
exports.delete = function (req, res) {
  Enseignant.delete(req.params.id, function (err, enseignant) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'enseignant successfully deleted' });
  });
};

exports.login = function (req, res) {
  const data = req.body

  Enseignant.findByLoginAndPassword([data.login], function (err, enseignant) {
    if (err)
      res.send(err);

    console.log(enseignant)
    if (enseignant.length == 1) {

      if (enseignant[0].mdp === data.password) {
        res.json({ error: false, message: 'enseignant  exist' });
      }
      else {
        res.json({ error: true, message: 'password dont match' });
      }

    }
    else {
      res.json({ error: true, message: 'enseignant not exist' });

    }

  });
};