'use strict';
var dbConn = require('./../../config/db.config');
//matiere object create
var Matiere = function(matiere){
  this.libelleMat     = matiere.libelleMat;
  this.idem      = matiere.idem;
 

};
Matiere.create = function (newMat, result) {
dbConn.query("INSERT INTO matiere set ?", newMat, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Matiere.findById = function (libelleMat , result) {
dbConn.query("Select * from matiere where libelleMat = ? ", libelleMat , function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Matiere.findAll = function (result) {
dbConn.query("Select * from matiere ", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('matiere : ', res);
  result(null, res);
}
});
};
Matiere.update = function(libelleMat, matiere, result){
dbConn.query("UPDATE matiere SET idem=? ,libelleMat=? WHERE libelleMat = ?", [matiere.idem, matiere.libelleMat, libelleMat], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Matiere.delete = function(libelleMat, result){
dbConn.query("DELETE FROM matiere WHERE libelleMat = ?", [libelleMat], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Matiere;