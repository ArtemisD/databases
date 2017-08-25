var db = require('../db');

module.exports = {
  messages: {
    get: function(cb) {
      var query = 'SELECT * FROM messages';

      // var potentialQuery= 'SELECT messages.id, messages.text, messages.roomname, users.username FROM messages \
      //              left outer join users on (messages.userid = users.id) \
      //              order by messages.id desc';
      db.query(query, function(err, res){
        if(err) {
          console.log(err);
        }
        cb(res);
        console.log(res);
      });

    }, // a function which produces all the messages
    post: function(args, cb) {
      var query = 'insert into messages(text, userid, roomname) \
                  values(?, (SELECT id FROM users WHERE username = ? limit 1), ?)';
      db.query(query, args, function(err, res){
        cb(res);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function(cb) {
      db.query('SELECT * FROM users', function(err, res){
        cb(res);
      });
    },
    post: function(args, cb) {
      db.query('insert into users(username) values(?)', args, function(err, res){
        cb(res);
      });
    }
  }
};
