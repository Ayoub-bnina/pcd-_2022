'use strict';
const Matiere = require('../models/matiere.model');
exports.findAll = function(req, res) {
Matiere.findAll(function(err, matiere) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', matiere);
  res.send(matiere);
});
};
exports.create = function(req, res) {
const new_mat = new Matiere(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Matiere.create(new_mat, function(err, matiere) {
  if (err)
  res.send(err);
  res.json({error:false,message:"matiere added successfully!",data:matiere});
});
}
};
exports.findById = function(req, res) {
Matiere.findById(req.params.libelleMat, function(err, matiere) {
  if (err)
  res.send(err);
  res.json(matiere);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Matiere.update(req.params.libelleMat, new Matiere(req.body), function(err, matiere) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Matiere successfully updated' });
});
}
};
exports.delete = function(req, res) {
    Matiere.delete( req.params.libelleMat, function(err, matiere) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Matiere successfully deleted' });
});
};