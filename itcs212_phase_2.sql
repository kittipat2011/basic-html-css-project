DROP DATABASE IF EXISTS itcs212_phase_2;
CREATE DATABASE IF NOT EXISTS  itcs212_phase_2;
USE itcs212_phase_2;

DROP TABLE IF EXISTS artist;
CREATE TABLE artist (
	ArtistID 		CHAR(8)  		PRIMARY KEY,
    ArtistName		VARCHAR(30)		NOT NULL,
    ArtistPicture	VARCHAR(30)		NOT NULL,
    ArtistDOB		DATETIME		NOT NULL,
    ArtistDesc		VARCHAR(200)
);
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
);
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
);
DROP TABLE IF EXISTS login_history;
CREATE TABLE login_history (	
	HistoryID		VARCHAR(8)		PRIMARY KEY,
    UserID			CHAR(30)		NOT NULL,
    UserName		VARCHAR(30)		NOT NULL,
    UserRole		VARCHAR(10)		NOT NULL,
	CONSTRAINT		FK_history	FOREIGN KEY (UserID) REFERENCES	user_information (UserID)
);

INSERT INTO artist(ArtistID, ArtistName, ArtistPicture, ArtistDOB, ArtistDesc)
VALUE	(20455980,'Wonder girl','www.google.com','2007-02-12 00:00:00', 'testDesc'),
	(20091111,'2PM','www.google.com','2010-05-25 00:00:00', 'testDesc'),
	(20657788,'J.don','www.google.com','2015-07-12 00:00:00', 'testDesc'),
	(20879812,'GOT7','www.google.com','2020-06-07 00:00:00', 'testDesc'),
	(20657544,'Maroon5','www.google.com','2021-10-02 00:00:00', 'testDesc'),
	(20187894,'N.flying','www.google.com','2018-11-09 00:00:00', 'testDesc'),
	(20645755,'jay park', 'www.google.com','2022-12-12 00:00:00', 'testDesc'),
	(20081014,'Katy Perry','www.google.com','2011-04-18 00:00:00', 'testDesc'),
	(20111103,'CNBLUE','www.google.com','2020-09-26 00:00:00', 'testDesc'),
	(20000215,'M2M', 'www.google.com','2013-01-24 00:00:00', 'testDesc');

INSERT INTO song(SongID, SongName, SongPicture, SongreleaseDate, ArtistID, SongDesc)
VALUE	(46518604,'Nobody','www.songShazamGroup13_46518604','2007-02-12 00:00:00',20455980,'testDesc'),
	(59175860,'HeartBeat','www.songShazamGroup13_59175860','2010-05-25 00:00:00',20091111,'testDesc'),
	(48148935,'Hot N Cold','www.songShazamGroup13_48148935','2015-07-12 00:00:00',20657788,'testDesc'),
	(63996461,'Intution','www.songShazamGroup13_63996461','2020-06-07 00:00:00',20879812,'testDesc'),
	(44485299,'Hard Carry','www.songShazamGroup13_44485299','2021-10-02 00:00:00',20657544,'testDesc'),
	(52048757,'Clicker','www.songShazamGroup13_52048757','2018-11-09 00:00:00',20187894,'testDesc'),
	(18254424,'Ganadara','www.songShazamGroup13_18254424','2022-12-12 00:00:00',20645755,'testDesc'),
	(16425930,'Cant stop','www.songShazamGroup13_16425930','2011-04-18 00:00:00',20081014,'testDesc'),
	(14795680,'Amnesia','www.songShazamGroup13_14795680','2020-09-26 00:00:00',20111103,'testDesc'),
	(66292904,'Mirror Mirror','www.songShazamGroup13_66292904','2013-01-24 00:00:00',20000215,'testDesc');
    
INSERT INTO user_information(UserID, UserName, UserPassword, Firstname, Lastname, Email, Address, Age, UserRole)
VALUE (49094673,'user01','v52xY2UP2eOY','Kittipat','Arpanon','Kittipat@test.com','Bangkok,', 20, 'user'),
(41350896,'user02','hSWMsWropt6G','Sorawanan','Jeamjantarakhon','Sorawanan@test.com','Chiang Mai,', 20, 'user'),
(80801145,'user03','4Fz0yjCUYnPx','Danaidech','Ardsamai','Danaidech@test.com','Pathum Thani,', 20, 'user'),
(65409030,'user04','5i6UgJf9wOSk','Busarin','Jensai','Busarin@test.com','Kanchanaburi,', 20, 'user'),
(37146800,'user05','8q8gWZIw4zSa','Jazmin','Dickinson','Jazmin_223@test.com','Buri Ram,', 16, 'user'),
(37189890,'user06','AI9i2YQSrool','Orlaith','Gomez','Orl06_f@test.com','Nakhon Si Thammarat,', 25, 'user'),
(68358768,'user07','wxmu5EVMYbf1','Pia','Alston','test@test.com','Bangkok,', 32, 'user'),
(38886985,'user08','ZlMbHHuE5xYA','Maja','Wardle','test@test.com','Chiang Mai,', 28, 'user'),
(85388336,'user09','KXFu4AMNifDD','Abbie','Whelan','test@test.com','Yala,', 24, 'user'),
(99999999,'Admin8','adminRxr!08]','admin','group8','admin@admin.admin','Nakhon Pathom,', 23, 'admin');

INSERT INTO login_history(HistoryID, UserID, UserName, UserRole)
VALUE (52933419,99999999,'group8','admin'),
(46913165,85388336,'Abbie','user'),
(20765356,49094673,'Kittipat','user'),
(49743434,37189890,'Orlaith','user'),
(78036602,38886985,'Maja','user'),
(86052197,41350896,'Sorawanan','user'),
(54144910,68358768,'Danaidech','user'),
(71897690,80801145,'Jazmin','user'),
(79473808,99999999,'group8','admin'),
(22421076,65409030,'Busarin','user');