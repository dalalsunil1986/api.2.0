'use strict';


module.exports.verifyMobile = function verifyMobile (req, res, next) {
  // Code necessary to consume the Weather API and respond

  var mobileNumber = req.body.mobileNumber;

  var response = "Successfully send verify code to" + mobileNumber;

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));

};



module.exports.verified = function verified (req, res, next) {
  // Code necessary to consume the Weather API and respond

  var mobileNumber = req.body.verifcationCode;

  var response = "Successfully verify";

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));

};


module.exports.save = function save (req, res, next) {
  // Code necessary to consume the Weather API and respond

  var mobileNumber = req.body.user.mobileNumber;
  var firstName = req.body.user.firstName;
  var lastName = req.body.user.lastName;
  var address = req.body.user.address;
  var email = req.body.user.email;
  var company = req.body.user.company;

  var response = "Successfully Save Profile";
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('x-auth-token', 'adfasdfadsfdsafadfasdf');
  //  res.status(201).send('succesfully Save.');
    res.end(JSON.stringify(response));

};

module.exports.update = function update (req, res, next) {
  // Code necessary to consume the Weather API and respond

  var mobileNumber = req.body.user.mobileNumber;
  var firstName = req.body.user.firstName;
  var lastName = req.body.user.lastName;
  var address = req.body.user.address;
  var email = req.body.user.email;
  var company = req.body.user.company;

  var response = "Successfully Update Profile";
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('x-auth-token', 'adfasdfadsfdsafadfasdf');
  //  res.status(204).send('succesfully Update.');
    res.end(JSON.stringify(response));

};

module.exports.get = function get (req, res, next) {
  // Code necessary to consume the Weather API and respond

  //var mobileNumber = req.path.mobileNumber;

  var user = {
    mobileNumber : "080123123123",
    firstName : "John",
    lastName : "Deo",
    address : "adfasdf",
    email : "john@gmail.com",
    company : "idama pvt ltd"
  };


  var response = "Successfully Update Profile";
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('x-auth-token', 'adfasdfadsfdsafadfasdf');
  //  res.status(204).send('succesfully Update.');
    res.end(JSON.stringify(user));

};

module.exports.getSkills = function getSkills (req, res, next) {
  // Code necessary to consume the Weather API and respond

  //var mobileNumber = req.path.mobileNumber;
  var skills = [];
  var skill = {
    id : "1",
    title : "Painting",
    description : "this is servuce icon",
    isActive : false,
    iconUrl : "http://cdn.sdfsd/stst.jpg",
  };

  var skill1 = {
    id : "1",
    title : "Painting",
    description : "this is servuce icon",
    isActive : false,
    iconUrl : "http://cdn.sdfsd/stst.jpg",
  };
  skills[0] = skill;
  skills[1] = skill1;



  var response = "Successfully Update Profile";
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('x-auth-token', 'adfasdfadsfdsafadfasdf');
  //  res.status(204).send('succesfully Update.');
    res.end(JSON.stringify(skills));

};
