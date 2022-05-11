'use strict';
var dbConn = require('./../../config/db.config');
//Employee object create
var Enseignant = function(enseignant){
  this.id     = enseignant.id;
  this.login      = enseignant.login;
  this.mdp          = enseignant.mdp;

};
Enseignant.create = function (newEns, result) {
dbConn.query("INSERT INTO enseignant set ?", newEns, function (err, res) {
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
Enseignant.findById = function (id, result) {
dbConn.query("Select * from enseignant where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Enseignant.findAll = function (result) {
dbConn.query("Select * from enseignant  ", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('enseignant : ', res);
  result(null, res);
}
});
};
Enseignant.update = function(id, enseignant, result){
dbConn.query("UPDATE enseignant  SET id =?, login=?,mdp=? WHERE id = ?", [enseignant.id, enseignant.login,enseignant.mdp, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Enseignant.delete = function(id, result){
dbConn.query("DELETE FROM enseignant  WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};


Enseignant.findByLoginAndPassword = function (login, result) {
  dbConn.query("Select * from enseignant where login = ? ", login,function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(err, null);
  }
  else{
    result(null, res);
  }
  });
  };


module.exports= Enseignant ;