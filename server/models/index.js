var db = require('../db');

module.exports = {
  messages: {
    get: function(cb) {
      // db.query('query', function(err, ))
      db.connect();
      db.query('SELECT messageBody, userID, roomID JOIN users ON messages.user_ID=users.userID JOIN rooms ON messages.room_ID=rooms.roomID', function(err, res) {
        if (err) {
          throw err;
        } else {
          console.log('😎😎😎 GET WORKING');
          cb(res);
        }
      });
    }, // a function which produces all the messages
    post: function(message, cb) {
      db.connect();
      db.query('INSERT INTO messages (messageBody, username, roomname) values ("'+ message.message +'", "' +message.username+ '", + "' +message.roomname+ '");',
        function(err, res) {
          if (err) {
            console.log("didn't work :(");
            throw err;
          } else {
            cb(res);
            console.log('❤️❤️❤️ POST WORKING');
          }
        });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function() {
      db.connect();

    },
    post: function() {}
  }
};
