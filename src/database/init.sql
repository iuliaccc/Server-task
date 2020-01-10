-- https://www.db-fiddle.com/

CREATE TABLE note (
  id integer primary key autoincrement,
  title varchar(50) not null,
  content text
);

CREATE TABLE users (
  id integer primary key autoincrement,
  name varchar(255) not null UNIQUE,
  email varchar(255) not null UNIQUE,
  password varchar(255)
);

CREATE TABLE games (
  id integer primary key autoincrement,
  name varchar(255) not null
);

CREATE TABLE score (
  id integer primary key autoincrement,
  userID integer,
  gameID integer,
  val integer,
  FOREIGN KEY(userID) REFERENCES users(id),
  FOREIGN KEY(gameID) REFERENCES games(id)
);

INSERT INTO note (title,content) VALUES ('note title 1', 'note content 1');
INSERT INTO note (title,content) VALUES ('note title 2', 'note content 2');
INSERT INTO note (id,title,content) VALUES (5,'note title 3', 'note content 3');
INSERT INTO note (title,content) VALUES ('note title 4', 'note content 4');
INSERT INTO note (title,content) VALUES ('note title 5', 'note content 5');

INSERT INTO users (name,email, password) VALUES ('iulia', 'iuli.centea@gmail.com', '123');
INSERT INTO users (name,email, password) VALUES ('diana', 'diana.mocanu@gmail.com', '456');
INSERT INTO users (name,email, password) VALUES ('andrei', 'andrei.b@gmail.com', 'aaa');
INSERT INTO users (name,email, password) VALUES ('chris', 'chris.e@gmail.com', 'abc');
INSERT INTO users (name,email, password) VALUES ('cris', 'cris.h@gmail.com', '345');
INSERT INTO users (name,email, password) VALUES ('lala', 'lala.gg@gmail.com', '789');
INSERT INTO users (name,email, password) VALUES ('riri', 'riri.k@gmail.com', '45t');
INSERT INTO users (name,email, password) VALUES ('lola', 'lola.o@gmail.com', 'hhh');
INSERT INTO users (name,email, password) VALUES ('hannah', 'hannah.montana@gmail.com', 'ty6');
INSERT INTO users (name,email, password) VALUES ('viorica', 'viorica.dancila@gmail.com', '2ert');
INSERT INTO games (name) VALUES ('hangman');
INSERT INTO games (name) VALUES ('battleship');
INSERT INTO games (name) VALUES ('minecraft');
INSERT INTO games (name) VALUES ('lol');
INSERT INTO games (name) VALUES ('wow');
INSERT INTO games (name) VALUES ('block');
INSERT INTO games (name) VALUES ('bomberman');
INSERT INTO games (name) VALUES ('metin');
INSERT INTO games (name) VALUES ('csgo');
INSERT INTO games (name) VALUES ('dota');
INSERT INTO score (userID,gameID,val) VALUES('1','1','10');
INSERT INTO score (userID,gameID,val) VALUES('3','1','55');
INSERT INTO score (userID,gameID,val) VALUES('5','1','66');
INSERT INTO score (userID,gameID,val) VALUES('2','2','11');
INSERT INTO score (userID,gameID,val) VALUES('3','3','56');
INSERT INTO score (userID,gameID,val) VALUES('4','4','88');
INSERT INTO score (userID,gameID,val) VALUES('5','5','39');
INSERT INTO score (userID,gameID,val) VALUES('6','6','35');
INSERT INTO score (userID,gameID,val) VALUES('7','7','42');
INSERT INTO score (userID,gameID,val) VALUES('8','8','63');
INSERT INTO score (userID,gameID,val) VALUES('9','9','126');
INSERT INTO score (userID,gameID,val) VALUES('10','10','144');
