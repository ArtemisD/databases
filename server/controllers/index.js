var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(results) { // solved second test by fixing callback parameters.
        // need to handle errors here
        // res.json(results);
        console.log(results, 'controllers');
         res.end(JSON.stringify(results));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var arguments = [ req.body['message'], req.body['username'], req.body['roomname']];
      models.messages.post( arguments, function(err,results) {
        // need to handle errors here
        res.json(results);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err,results) {
        // need to handle errors here
        res.json(results);
      });
    },
    post: function (req, res) {
      var arguments = [ req.body['username']];
      models.users.post( arguments, function(err,results) {
        // need to handle errors here
        res.json(results);
      });
    }
  }
};
