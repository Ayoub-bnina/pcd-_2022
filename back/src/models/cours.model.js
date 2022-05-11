'use strict';
var dbConn = require('./../../config/db.config');
//cours object create
var Cours = function(cours ){
  this.idcours   = cours.idcours;
  this.libelleCours  = cours.libelleCours;
  this.libelleMat    = cours.libelleMat;

};
Cours.create = function (newCours, result) {
dbConn.query("INSERT INTO cours set ?", newCours, function (err, res) {
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
Cours.findById = function (idcours, result) {
dbConn.query("Select * from cours where idcours = ? ", idcours, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Cours.findAll = function (result) {
dbConn.query("Select * from cours ", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('cours : ', res);
  result(null, res);
}
});
};
Cours.update = function(idcours, cours , result){
dbConn.query("UPDATE cours SET  idcours = ?, libelleCours=?,libelleMat=? WHERE idcours = ?", [cours.idcours,cours.libelleCours, cours.libelleMat, idcours], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Cours.delete = function(idcours, result){
dbConn.query("DELETE FROM cours WHERE idcours = ?", [idcours], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Cours;