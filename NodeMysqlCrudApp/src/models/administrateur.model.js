'use strict';
var dbConn = require('./../../config/db.config');
//administrateur object create
var Administrateur = function(administrateur){
  this.id     = administrateur.id;
  this.login      = administrateur.login;
  this.mdp          = administrateur.mdp;

};
Administrateur.create = function (newAdmin, result) {
dbConn.query("INSERT INTO administrateur set ?", newAdmin, function (err, res) {
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
Administrateur.findById = function (id, result) {
dbConn.query("Select * from administrateur where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Administrateur.findAll = function (result) {
dbConn.query("Select * from administrateur ", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('administrateur : ', res);
  result(null, res);
}
});
};
Administrateur.update = function(id, administrateur, result){
dbConn.query("UPDATE administrateur SET login=?,mdp=? WHERE id = ?", [administrateur.login,administrateur.mdp, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Administrateur.delete = function(id, result){
dbConn.query("DELETE FROM administrateur WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};


Administrateur.findByLoginAndPassword = function (login, result) {
  dbConn.query("Select * from administrateur where login = ? ", login,function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(err, null);
  }
  else{
    result(null, res);
  }
  });
  };
module.exports= Administrateur;