DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/

  /* messageID primary id
     userID - reference to a user in the user table
     messageBody
     roomID - reference to a room */
     id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
     text varchar(140),
     userid int NOT NULL,
     roomname varchar(20) NOT NULL
     /*FOREIGN KEY (user_ID) REFERENCES users (userID),
     FOREIGN KEY (room_ID) REFERENCES rooms (roomID)*/

);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  /* Describe your table here.*/

  /* username & userID (Primary Key) */
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(20) NOT NULL DEFAULT 'anonymous'

);

-- ALTER TABLE messages ADD FOREIGN KEY (user_ID) REFERENCES users (userID);
-- ALTER TABLE messages ADD FOREIGN KEY (room_ID) REFERENCES rooms (roomID);

-- ALTER TABLE messages ADD FOREIGN KEY (username) REFERENCES users (userName);
-- ALTER TABLE messages ADD FOREIGN KEY (roomname) REFERENCES rooms (roomName);

-- insert into users (username) values ('apple'), ('banana'), ('orange');
-- insert into rooms (roomName) values ('lobby'), ('lobby2');
-- insert into messages (messageBody, user_ID, room_ID) values
-- ('test1', 1, 1),
-- ('test2', 1, 2),
-- ('test3', 2, 1),
-- ('test4', 3, 1),
-- ('test5', 3, 2);
-- ('test5', 4, 2);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/