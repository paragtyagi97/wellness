var express = require('express');
var mongojs = require('mongojs');
var Doctor = require('../models/doctor');
var mongo = require('mongodb');
var mongoose = require('mongoose');


module.exports = function(router){

  //  http://localhost:8080/api/search/doctordata
router.post('/doctordata',function(req,res){


    Doctor.findOne(req.body,function(err, result) {
      if (err) throw err;
      res.json({sucess:true, result: result});
      
    });


     
  });

return router;
}
