var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      // db.query('query', function(err, ))
      db.query('SELECT messageBody, userID, roomID JOIN users ON messages.user_ID=users.userID JOIN rooms ON messages.room_ID=rooms.roomID', function(err, res) {
        if(err) {
          throw err;
        } else {
          cb(res);
        }
      });
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};
