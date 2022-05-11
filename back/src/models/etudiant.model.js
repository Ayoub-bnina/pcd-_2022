'use strict';
var dbConn = require('./../../config/db.config');
//Employee object create
var Etudiant = function(etudiant){
  this.id     = etudiant.id;
  this.login      = etudiant.login;
  this.mdp          = etudiant.mdp;

};
Etudiant.create = function (newEtud, result) {
dbConn.query("INSERT INTO etudiant set ?", newEtud, function (err, res) {
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
Etudiant.findById = function (id, result) {
dbConn.query("Select * from etudiant where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Etudiant.findAll = function (result) {
dbConn.query("Select * from etudiant  ", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('etudiant : ', res);
  result(null, res);
}
});
};
Etudiant.update = function(id, etudiant, result){
dbConn.query("UPDATE etudiant  SET login=?,mdp=? WHERE id = ?", [etudiant.login,etudiant.mdp, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Etudiant.delete = function(id, result){
dbConn.query("DELETE FROM etudiant  WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};

Etudiant.findByLoginAndPassword = function (login, result) {
  dbConn.query("Select * from etudiant where login = ? ", login,function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(err, null);
  }
  else{
    result(null, res);
  }
  });
  };



module.exports= Etudiant ;