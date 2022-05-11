'use strict';
const Etudiant = require('../models/etudiant.model');
exports.findAll = function(req, res) {
Etudiant.findAll(function(err,  etudiant) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', etudiant);
  res.send(etudiant);
});
};
exports.create = function(req, res) {
  console.log(req.body)
const new_etud = new Etudiant(req.body);
//handles null errorhh@gmail.com"
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Etudiant.create(new_etud, function(err, etudiant) {
  if (err)
  res.send(err);
  res.json({error:false,message:"etudiant  added successfully!",data:etudiant});
});
}
};
exports.findById = function(req, res) {
Etudiant.findById(req.params.id, function(err, etudiant) {
  if (err)
  res.send(err);
  res.json(etudiant);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Etudiant.update(req.params.id, new Etudiant(req.body), function(err, etudiant) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'etudiant  successfully updated' });
});
}
};
exports.delete = function(req, res) {
Etudiant.delete( req.params.id, function(err, etudiant) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'etudiant successfully deleted' });
});
};

exports.login = function(req, res) {
  const data =req.body
 

  Etudiant.findByLoginAndPassword( [data.login], function(err, etudiant) {
    if (err)
    res.send(err);

    
    if(etudiant.length==1){

      if(etudiant[0].mdp===data.password){
        res.json({ error:false, message: 'etudiant  exist' });
      }
      else{
        res.json({ error:true, message: 'password dont match' });
      }

    }
    else{
      res.json({ error:true, message: 'etudiant not exist' });

    }
   
  });
  };