DROP DATABASE IF EXISTS itcs212_phase_2;
CREATE DATABASE IF NOT EXISTS  itcs212_phase_2 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE itcs212_phase_2;


DROP TABLE IF EXISTS artist;
CREATE TABLE artist (
	ArtistID 		CHAR(8)  		PRIMARY KEY,
    ArtistName		VARCHAR(30)		NOT NULL,
    ArtistPicture	VARCHAR(30)		NOT NULL,
    ArtistDOB		DATETIME		NOT NULL,
    ArtistDesc		VARCHAR(200)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
DROP TABLE IF EXISTS song;
CREATE TABLE song(
	SongID			CHAR(8)			PRIMARY KEY,
    SongName		VARCHAR(30)		NOT NULL,
    SongPicture		VARCHAR(30)		NOT NULL,
    SongReleaseDate	DATETIME		NOT NULL,
    ArtistID		CHAR(8)			NOT NULL,
    SongDesc		VARCHAR(200),
	CONSTRAINT		FK_Song	FOREIGN KEY (ArtistID)
    REFERENCES		Artist (ArtistID)
)ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
DROP TABLE IF EXISTS user_information;
CREATE TABLE user_information (
	UserID			CHAR(8)			PRIMARY KEY,
    UserName		VARCHAR(30)		NOT NULL,
    UserPassword	VARCHAR(30)		NOT NULL,
    Firstname		VARCHAR(30)		NOT NULL,
    Lastname		VARCHAR(30)		NOT NULL,
    Email			VARCHAR(50)		NOT NULL,
    Address			VARCHAR(100)	NOT NULL,
    Age				INT				NOT NULL,
    UserRole		VARCHAR(10)		NOT NULL
)ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
DROP TABLE IF EXISTS login_history;
CREATE TABLE login_history (	
	HistoryID		VARCHAR(8)		PRIMARY KEY,
    UserID			CHAR(30)		NOT NULL,
    UserName		VARCHAR(30)		NOT NULL,
    UserRole		VARCHAR(10)		NOT NULL,
	CONSTRAINT		FK_history	FOREIGN KEY (UserID) REFERENCES	user_information (UserID)
)ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO artist(ArtistID, ArtistName, ArtistPicture, ArtistDOB, ArtistDesc)
VALUE	(20455980,'Wonder girl','www.google.com','2007-02-13 00:00:00', 'testDesc'),
	(20091111,'2PM','www.google.com','2007-02-13 00:00:00', 'testDesc'),
	(20657788,'J.don','www.google.com','2007-02-13 00:00:00', 'testDesc'),
	(20879812,'GOT7','www.google.com','2007-02-13 00:00:00', 'testDesc'),
	(20657544,'Maroon5','www.google.com','2007-02-13 00:00:00', 'testDesc'),
	(20187894,'N.flying','www.google.com','2007-02-13 00:00:00', 'testDesc'),
	(20645755,'Stephen Yoon', 'www.google.com','2007-02-13 00:00:00', 'testDesc'),
	(20081014,'Katy Perry','www.google.com','2007-02-13 00:00:00', 'testDesc'),
	(20111103,'CNBLUE','www.google.com','2007-02-13 00:00:00', 'testDesc'),
	(20000215,'M2M', 'www.google.com','2007-02-13 00:00:00', 'testDesc');

INSERT INTO song(SongID, SongName, SongPicture, SongreleaseDate, ArtistID, SongDesc)
VALUE	(46518604,'Nobody','www.songShazamGroup13/46518604','2007-02-13 00:00:00',20455980,'testDesc'),
	(59175860,'HeartBeat','www.songShazamGroup13/59175860','2007-02-13 00:00:00',20091111,'testDesc'),
	(48148935,'Hot N Cold','www.songShazamGroup13/48148935','2007-02-13 00:00:00',20657788,'testDesc'),
	(63996461,'Intution','www.songShazamGroup13/63996461','2007-02-13 00:00:00',20879812,'testDesc'),
	(44485299,'Hard Carry','www.songShazamGroup13/44485299','2007-02-13 00:00:00',20657544,'testDesc'),
	(52048757,'Clicker','www.songShazamGroup13/52048757','2007-02-13 00:00:00',20187894,'testDesc'),
	(18254424,'Animal','www.songShazamGroup13/18254424','2007-02-13 00:00:00',20645755,'testDesc'),
	(16425930,'Cant stop','www.songShazamGroup13/16425930','2007-02-13 00:00:00',20081014,'testDesc'),
	(14795680,'Amnesia','www.songShazamGroup13/14795680','2007-02-13 00:00:00',20111103,'testDesc'),
	(66292904,'Mirror Mirror','www.songShazamGroup13/66292904','2007-02-13 00:00:00',20000215,'testDesc');
    
INSERT INTO user_information(UserID, UserName, UserPassword, Firstname, Lastname, Email, Address, Age, UserRole)
VALUE (49094673,'user01','password01','Isla-Grace','Bellamy','test@test.test','BKK,', 20, 'user'),
(41350896,'user02','password02','Riccardo','Kerr','test@test.test','BKK,', 20, 'user'),
(80801145,'user03','password03','Rhia','Milner','test@test.test','BKK,', 20, 'user'),
(65409030,'user04','password04','Coen','Donaldson','test@test.test','BKK,', 20, 'user'),
(37146800,'user05','password05','Jazmin','Dickinson','test@test.test','BKK,', 20, 'user'),
(37189890,'user06','password06','Orlaith','Gomez','test@test.test','BKK,', 20, 'user'),
(68358768,'user07','password07','Pia','Alston','test@test.test','BKK,', 20, 'user'),
(38886985,'user08','password08','Maja','Wardle','test@test.test','BKK,', 20, 'user'),
(85388336,'user09','password09','Abbie','Whelan','test@test.test','BKK,', 20, 'user'),
(99999999,'admin','admin','Danaidech','Ardsamai','admin@admin.admin','BKK,', 20, 'admin');

INSERT INTO login_history(HistoryID, UserID, UserName, UserRole)
VALUE (52933419,99999999,'Danaidech','admin'),
(46913165,85388336,'Abbie','user'),
(20765356,68358768,'Pia','user'),
(86052197,85388336,'Abbie','user'),
(49743434,68358768,'Pia','user'),
(78036602,85388336,'Abbie','user'),
(54144910,68358768,'Pia','user'),
(71897690,85388336,'Abbie','user'),
(79473808,68358768,'Pia','user'),
(22421076,85388336,'Abbie','user');