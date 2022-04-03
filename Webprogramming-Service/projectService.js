// import modeules
const cors = require('cors');
const express = require("express");
const app = express();
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With ,Content-Type ,Accept');
    next();
})
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const exhdb = require('express-handlebars');

//router
const router = express.Router();
dotenv.config();

//handlebars
app.engine('handlebars', exhdb.engine({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.get('/',(req,res) =>{
    res.render('index',{
        title:'User',
    });
});

//Boby parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//SQL
const { append } = require("express/lib/response");
const mysql = require("mysql2")

let Connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});



Connection.connect(function (err) {
    if (err) throw err;
});

router.get("/", function (req, res) {
    return res.send({
        error: true,
        massage: "  "
    });
});


////////////////////
/* GET ALL method */
////////////////////

//------------------------- Artist -------------------------------

router.get("/artists", function (req, res) {
    Connection.query("SELECT * FROM artist ", function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results,
            massage: "artists list"
        });
    });
});
/*
@Test Case
URL:"http://localhost:3000/artists"
method :"GET all"
ิbody :{
    "error": false,
    "data": [
        {
            "ArtistID": "20000215",
            "ArtistName": "M2M",
            "ArtistPicture": "www.google.com",
            "ArtistDOB": "2013-01-23T17:00:00.000Z",
            "ArtistDesc": "testDesc"
        },
        {
            "ArtistID": "20081014",
            "ArtistName": "Katy Perry",
            "ArtistPicture": "www.google.com",
            "ArtistDOB": "2011-04-17T17:00:00.000Z",
            "ArtistDesc": "testDesc"
        },
        {
            "ArtistID": "20091111",
            "ArtistName": "2PM",
            "ArtistPicture": "www.google.com",
            "ArtistDOB": "2010-05-24T17:00:00.000Z",
            "ArtistDesc": "testDesc"
        },
        {
            "ArtistID": "20111103",
            "ArtistName": "CNBLUE",
            "ArtistPicture": "www.google.com",
            "ArtistDOB": "2020-09-25T17:00:00.000Z",
            "ArtistDesc": "testDesc"
        },
        {
            "ArtistID": "20187894",
            "ArtistName": "N.flying",
            "ArtistPicture": "www.google.com",
            "ArtistDOB": "2018-11-08T17:00:00.000Z",
            "ArtistDesc": "testDesc"
        },
        {
            "ArtistID": "20455980",
            "ArtistName": "Wonder girl",
            "ArtistPicture": "www.google.com",
            "ArtistDOB": "2007-02-11T17:00:00.000Z",
            "ArtistDesc": "testDesc"
        },
        {
            "ArtistID": "20645755",
            "ArtistName": "jay park",
            "ArtistPicture": "www.google.com",
            "ArtistDOB": "2022-12-11T17:00:00.000Z",
            "ArtistDesc": "testDesc"
        },
        {
            "ArtistID": "20657544",
            "ArtistName": "Maroon5",
            "ArtistPicture": "www.google.com",
            "ArtistDOB": "2021-10-01T17:00:00.000Z",
            "ArtistDesc": "testDesc"
        },
        {
            "ArtistID": "20657788",
            "ArtistName": "J.don",
            "ArtistPicture": "www.google.com",
            "ArtistDOB": "2015-07-11T17:00:00.000Z",
            "ArtistDesc": "testDesc"
        },
        {
            "ArtistID": "20879812",
            "ArtistName": "GOT7",
            "ArtistPicture": "www.google.com",
            "ArtistDOB": "2020-06-06T17:00:00.000Z",
            "ArtistDesc": "testDesc"
        }
    ],
    "massage": "artists list"
}
*/
//------------------------- Song -------------------------------

router.get("/songs", function (req, res) {
    Connection.query("SELECT * FROM song ", function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results,
            massage: "songs list"
        });
    });
});
/*
@Test Case
URL:"http://localhost:3000/songs"
method :"GET all"
ิbody :{
    "error": false,
    "data": [
        {
            "SongID": "14795680",
            "SongName": "Amnesia",
            "SongPicture": "www.songShazamGroup13_14795680",
            "SongReleaseDate": "2020-09-25T17:00:00.000Z",
            "ArtistID": "20111103",
            "SongDesc": "testDesc"
        },
        {
            "SongID": "16425930",
            "SongName": "Cant stop",
            "SongPicture": "www.songShazamGroup13_16425930",
            "SongReleaseDate": "2011-04-17T17:00:00.000Z",
            "ArtistID": "20081014",
            "SongDesc": "testDesc"
        },
        {
            "SongID": "18254424",
            "SongName": "Ganadara",
            "SongPicture": "www.songShazamGroup13_18254424",
            "SongReleaseDate": "2022-12-11T17:00:00.000Z",
            "ArtistID": "20645755",
            "SongDesc": "testDesc"
        },
        {
            "SongID": "44485299",
            "SongName": "Hard Carry",
            "SongPicture": "www.songShazamGroup13_44485299",
            "SongReleaseDate": "2021-10-01T17:00:00.000Z",
            "ArtistID": "20657544",
            "SongDesc": "testDesc"
        },
        {
            "SongID": "46518604",
            "SongName": "Nobody",
            "SongPicture": "www.songShazamGroup13_46518604",
            "SongReleaseDate": "2007-02-11T17:00:00.000Z",
            "ArtistID": "20455980",
            "SongDesc": "testDesc"
        },
        {
            "SongID": "48148935",
            "SongName": "Hot N Cold",
            "SongPicture": "www.songShazamGroup13_48148935",
            "SongReleaseDate": "2015-07-11T17:00:00.000Z",
            "ArtistID": "20657788",
            "SongDesc": "testDesc"
        },
        {
            "SongID": "52048757",
            "SongName": "Clicker",
            "SongPicture": "www.songShazamGroup13_52048757",
            "SongReleaseDate": "2018-11-08T17:00:00.000Z",
            "ArtistID": "20187894",
            "SongDesc": "testDesc"
        },
        {
            "SongID": "59175860",
            "SongName": "HeartBeat",
            "SongPicture": "www.songShazamGroup13_59175860",
            "SongReleaseDate": "2010-05-24T17:00:00.000Z",
            "ArtistID": "20091111",
            "SongDesc": "testDesc"
        },
        {
            "SongID": "63996461",
            "SongName": "Intution",
            "SongPicture": "www.songShazamGroup13_63996461",
            "SongReleaseDate": "2020-06-06T17:00:00.000Z",
            "ArtistID": "20879812",
            "SongDesc": "testDesc"
        },
        {
            "SongID": "66292904",
            "SongName": "Mirror Mirror",
            "SongPicture": "www.songShazamGroup13_66292904",
            "SongReleaseDate": "2013-01-23T17:00:00.000Z",
            "ArtistID": "20000215",
            "SongDesc": "testDesc"
        }
    ],
    "massage": "songs list"
}
*/
//------------------------- user_information -------------------------------

router.get("/user_information", function (req, res) {
    Connection.query("SELECT * FROM user_information ", function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results,
            massage: "user_information  list"
        });
    });
});
/*
@Test Case
URL:"http://localhost:3000/user_information"
method :"GET all"
ิbody :{
    "error": false,
    "data": [
        {
            "UserID": "37146800",
            "UserName": "user05",
            "UserPassword": "8q8gWZIw4zSa",
            "Firstname": "Jazmin",
            "Lastname": "Dickinson",
            "Email": "Jazmin_223@test.com",
            "Address": "Buri Ram,",
            "Age": 16,
            "UserRole": "user"
        },
        {
            "UserID": "37189890",
            "UserName": "user06",
            "UserPassword": "AI9i2YQSrool",
            "Firstname": "Orlaith",
            "Lastname": "Gomez",
            "Email": "Orl06_f@test.com",
            "Address": "Nakhon Si Thammarat,",
            "Age": 25,
            "UserRole": "user"
        },
        {
            "UserID": "38886985",
            "UserName": "user08",
            "UserPassword": "ZlMbHHuE5xYA",
            "Firstname": "Maja",
            "Lastname": "Wardle",
            "Email": "test@test.com",
            "Address": "Chiang Mai,",
            "Age": 28,
            "UserRole": "user"
        },
        {
            "UserID": "41350896",
            "UserName": "user02",
            "UserPassword": "hSWMsWropt6G",
            "Firstname": "Sorawanan",
            "Lastname": "Jeamjantarakhon",
            "Email": "Sorawanan@test.com",
            "Address": "Chiang Mai,",
            "Age": 20,
            "UserRole": "user"
        },
        {
            "UserID": "49094673",
            "UserName": "user01",
            "UserPassword": "v52xY2UP2eOY",
            "Firstname": "Kittipat",
            "Lastname": "Arpanon",
            "Email": "Kittipat@test.com",
            "Address": "Bangkok,",
            "Age": 20,
            "UserRole": "user"
        },
        {
            "UserID": "65409030",
            "UserName": "user04",
            "UserPassword": "5i6UgJf9wOSk",
            "Firstname": "Busarin",
            "Lastname": "Jensai",
            "Email": "Busarin@test.com",
            "Address": "Kanchanaburi,",
            "Age": 20,
            "UserRole": "user"
        },
        {
            "UserID": "68358768",
            "UserName": "user07",
            "UserPassword": "wxmu5EVMYbf1",
            "Firstname": "Pia",
            "Lastname": "Alston",
            "Email": "test@test.com",
            "Address": "Bangkok,",
            "Age": 32,
            "UserRole": "user"
        },
        {
            "UserID": "80801145",
            "UserName": "user03",
            "UserPassword": "4Fz0yjCUYnPx",
            "Firstname": "Danaidech",
            "Lastname": "Ardsamai",
            "Email": "Danaidech@test.com",
            "Address": "Pathum Thani,",
            "Age": 20,
            "UserRole": "user"
        },
        {
            "UserID": "85388336",
            "UserName": "user09",
            "UserPassword": "KXFu4AMNifDD",
            "Firstname": "Abbie",
            "Lastname": "Whelan",
            "Email": "test@test.com",
            "Address": "Yala,",
            "Age": 24,
            "UserRole": "user"
        },
        {
            "UserID": "99999999",
            "UserName": "Admin8",
            "UserPassword": "adminRxr!08]",
            "Firstname": "admin",
            "Lastname": "group8",
            "Email": "admin@admin.admin",
            "Address": "Nakhon Pathom,",
            "Age": 23,
            "UserRole": "admin"
        }
    ],
    "massage": "user_information  list"
}
*/
//------------------------- login_history -------------------------------

router.get("/login_history", function (req, res) {
    Connection.query("SELECT * FROM login_history ", function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results,
            massage: "login historys list"
        });
    });
});
/*
@Test Case
URL:"http://localhost:3000/login_history"
method :"GET all"
ิbody :{
    "error": false,
    "data": [
        {
            "HistoryID": "20765356",
            "UserID": "49094673",
            "UserName": "Kittipat",
            "UserRole": "user"
        },
        {
            "HistoryID": "22421076",
            "UserID": "65409030",
            "UserName": "Busarin",
            "UserRole": "user"
        },
        {
            "HistoryID": "46913165",
            "UserID": "85388336",
            "UserName": "Abbie",
            "UserRole": "user"
        },
        {
            "HistoryID": "49743434",
            "UserID": "37189890",
            "UserName": "Orlaith",
            "UserRole": "user"
        },
        {
            "HistoryID": "52933419",
            "UserID": "99999999",
            "UserName": "group8",
            "UserRole": "admin"
        },
        {
            "HistoryID": "54144910",
            "UserID": "68358768",
            "UserName": "Danaidech",
            "UserRole": "user"
        },
        {
            "HistoryID": "71897690",
            "UserID": "80801145",
            "UserName": "Jazmin",
            "UserRole": "user"
        },
        {
            "HistoryID": "78036602",
            "UserID": "38886985",
            "UserName": "Maja",
            "UserRole": "user"
        },
        {
            "HistoryID": "79473808",
            "UserID": "99999999",
            "UserName": "group8",
            "UserRole": "admin"
        },
        {
            "HistoryID": "86052197",
            "UserID": "41350896",
            "UserName": "Sorawanan",
            "UserRole": "user"
        }
    ],
    "massage": "login historys list"
}
*/

////////////////
/* GET method */
////////////////

//------------------------- Artist -------------------------------
// GET Artist ID
router.get("/artist/:id", function (req, res) {
    let artist = req.params.id;
    if (!artist) {
        return res.send({
            error: true,
            massage: "please provide artist id."
        });
    }

    Connection.query("SELECT * FROM artist WHERE ArtistID=?", artist, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "artist is not found."
            });
        return res.send({
            error: false,
            data: results[0],
            massage: "artist retrieved."
        });
    });
});
/*
@Test Case 1
URL:"http://localhost:3000/artist/20111103"
method :"GET"
ิbody :{
    "error": false,
    "data": {
        "ArtistID": "20111103",
        "ArtistName": "CNBLUE",
        "ArtistPicture": "www.google.com",
        "ArtistDOB": "2020-09-25T17:00:00.000Z",
        "ArtistDesc": "testDesc"
    },
    "massage": "artist retrieved."
}
*/
/*
@Test Case 2
URL:"http://localhost:3000/artist/20645755"
method :"GET"
ิbody :{
    "error": false,
    "data": {
        "ArtistID": "20645755",
        "ArtistName": "jay park",
        "ArtistPicture": "www.google.com",
        "ArtistDOB": "2022-12-11T17:00:00.000Z",
        "ArtistDesc": "testDesc"
    },
    "massage": "artist retrieved."
}
*/

//GET Artist Name
router.get("/artistname/:name", function (req, res) {
    let ArtistName = req.params.name;
    if (!ArtistName) {
        return res.send({
            error: true,
            massage: "please provide Artist Name."
        });
    }
    const sql = "SELECT * FROM artist WHERE ArtistName like '%"+ArtistName+"%'";

    Connection.query(sql, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "Artist Name is not found."
            });
        return res.send({
            error: false,
            data: results,
            massage: "ArtistName retrieved."
        });
    });
});
/*
@Test Case 1
URL:"http://localhost:3000/artistname/Maroon5"
method :"GET"
ิbody :{
    "error": false,
    "data": [
        {
            "ArtistID": "20657544",
            "ArtistName": "Maroon5",
            "ArtistPicture": "www.google.com",
            "ArtistDOB": "2021-10-01T17:00:00.000Z",
            "ArtistDesc": "testDesc"
        }
    ],
    "massage": "ArtistName retrieved."
}
*/
/*
@Test Case 2
URL:"http://localhost:3000/artistname/M2M"
method :"GET"
ิbody :{
    "error": false,
    "data": [
        {
            "ArtistID": "20000215",
            "ArtistName": "M2M",
            "ArtistPicture": "www.google.com",
            "ArtistDOB": "2013-01-23T17:00:00.000Z",
            "ArtistDesc": "testDesc"
        }
    ],
    "massage": "ArtistName retrieved."
}
*/
//GET Artist Picture
router.get("/artistpicture/:Picture", function (req, res) {
    let ArtistPicture = req.params.Picture;
    if (!ArtistPicture) {
        return res.send({
            error: true,
            massage: "please provide Artist Picture."
        });
    }

    Connection.query("SELECT * FROM artist WHERE ArtistPicture=?", ArtistPicture, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "Artist Picture is not found."
            });
        return res.send({
            error: false,
            data: results,
            massage: "ArtistName retrieved."
        });
    });
});

//GET Artist DOB
router.get("/artistdob/:DOB", function (req, res) {
    let ArtistDOB = req.params.DOB;
    if (!ArtistDOB) {
        return res.send({
            error: true,
            massage: "please provide ArtistDOB."
        });
    }

    Connection.query("SELECT * FROM artist WHERE ArtistDOB=?", ArtistDOB, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "ArtistDOB is not found."
            });
        return res.send({
            error: false,
            data: results,
            massage: "Artist retrieved."
        });
    });
});

//GET Artist Desc
router.get("/artistDesc/:Desc", function (req, res) {
    let ArtistDesc = req.params.Desc;
    if (!ArtistDesc) {
        return res.send({
            error: true,
            massage: "please provide ArtistDesc."
        });
    }

    Connection.query("SELECT * FROM artist WHERE ArtistDesc=?", ArtistDesc, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "ArtistDesc is not found."
            });
        return res.send({
            error: false,
            data: results,
            massage: "ArtistDesc retrieved."
        });
    });
});

//------------------------- Song -------------------------------
// GET Song ID
router.get("/songs/:id", function (req, res) {
    let SongID = req.params.id;
    if (!SongID) {
        return res.send({
            error: true,
            massage: "please provide SongID."
        });
    }

    Connection.query("SELECT * FROM song WHERE SongID=?", SongID, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "SongID is not found."
            });
        return res.send({
            error: false,
            data: results[0],
            massage: "Song retrieved."
        });
    });
});


// GET Song Name
router.get("/songsname/:name", function (req, res) {
    let SongName = req.params.name;
    if (!SongName) {
        return res.send({
            error: true,
            massage: "please provide SongName."
        });
    }

    const sql = "SELECT * FROM song WHERE SongName like '%"+SongName+"%'";

    Connection.query(sql, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "SongName is not found."
            });
        return res.send({
            error: false,
            result: results,
            massage: "Song retrieved."
        });
    });
});

// GET Song Picture
router.get("/songspicture/:picture", function (req, res) {
    let SongPicture = req.params.picture;
    if (!SongPicture) {
        return res.send({
            error: true,
            massage: "please provide SongPicture."
        });
    }

    Connection.query("SELECT * FROM song WHERE SongPicture=?", SongPicture, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "SongPicture is not found."
            });
        return res.send({
            error: false,
            data: results,
            massage: "Song retrieved."
        });
    });
});


//GET SongReleaseDate
router.get("/songsrelease/:release", function (req, res) {
    let SongReleaseDate = req.params.release;
    if (!SongReleaseDate) {
        return res.send({
            error: true,
            massage: "please provide SongReleaseDate."
        });
    }

    Connection.query("SELECT * FROM song WHERE SongReleaseDate=?", SongReleaseDate, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "SongReleaseDate is not found."
            });
        return res.send({
            error: false,
            data: results,
            massage: "Song retrieved."
        });
    });
});

//GET Artist ID
router.get("/songsartistID/:artistID", function (req, res) {
    let ArtistID = req.params.artistID;
    if (!ArtistID) {
        return res.send({
            error: true,
            massage: "please provide ArtistID."
        });
    }

    Connection.query("SELECT * FROM song WHERE ArtistID=?", ArtistID, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "ArtistID is not found."
            });
        return res.send({
            error: false,
            data: results,
            massage: "Song retrieved."
        });
    });
});

//GET SongDesc
router.get("/songsdesc/:desc", function (req, res) {
    let SongDesc = req.params.desc;
    if (!SongDesc) {
        return res.send({
            error: true,
            massage: "please provide SongDesc."
        });
    }

    Connection.query("SELECT * FROM song WHERE SongDesc=?", SongDesc, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "SongDesc is not found."
            });
        return res.send({
            error: false,
            data: results,
            massage: "Song retrieved."
        });
    });
});

//------------------------- user_information -------------------------------
//GET UserID
router.get("/user_info/:id", function (req, res) {
    let UserID = req.params.id;
    if (!UserID) {
        return res.send({
            error: true,
            massage: "please provide UserID."
        });
    }

    Connection.query("SELECT * FROM user_information WHERE UserID=?", UserID, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "UserID is not found."
            });
        return res.send({
            error: false,
            data: results[0],
            massage: "User retrieved."
        });
    });
});

router.get("/user_infoUsername/:Username", function (req, res) {
    let Username = req.params.Username;
    if (!Username) {
        return res.send({
            error: true,
            massage: "please provide Username."
        });
    }

    Connection.query("SELECT * FROM user_information WHERE UserName=?", Username, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "Username is not found."
            });
        return res.send({
            error: false,
            data: results,
            massage: "User retrieved."
        });
    });
});


router.get("/user_infoUserPassword/:UserPassword", function (req, res) {
    let UserPassword = req.params.UserPassword;
    if (!UserPassword) {
        return res.send({
            error: true,
            massage: "please provide UserPassword."
        });
    }

    Connection.query("SELECT * FROM user_information WHERE UserPassword=?", UserPassword, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "UserPassword is not found."
            });
        return res.send({
            error: false,
            data: results,
            massage: "User retrieved."
        });
    });
});
//GET User Firstname
router.get("/user_infoFname/:Fname", function (req, res) {
    let Firstname = req.params.Fname;
    if (!Firstname) {
        return res.send({
            error: true,
            massage: "please provide Firstname."
        });
    }

    Connection.query("SELECT * FROM user_information WHERE Firstname=?", Firstname, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "Firstname is not found."
            });
        return res.send({
            error: false,
            data: results,
            massage: "User retrieved."
        });
    });
});

//GET User Lastname
router.get("/user_infoLname/:Lname", function (req, res) {
    let Lastname = req.params.Lname;
    if (!Lastname) {
        return res.send({
            error: true,
            massage: "please provide Lastname."
        });
    }

    Connection.query("SELECT * FROM user_information WHERE Lastname=?", Lastname, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "Lastname is not found."
            });
        return res.send({
            error: false,
            data: results,
            massage: "User retrieved."
        });
    });
});
//GET User Email
router.get("/user_infoEmail/:Email", function (req, res) {
    let Email = req.params.Email;
    if (!Email) {
        return res.send({
            error: true,
            massage: "please provide Email."
        });
    }

    Connection.query("SELECT * FROM user_information WHERE Email=?", Email, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "Email is not found."
            });
        return res.send({
            error: false,
            data: results,
            massage: "User retrieved."
        });
    });
});

//GET User Address
router.get("/user_infoAddress/:Address", function (req, res) {
    let Address = req.params.Address;
    if (!Address) {
        return res.send({
            error: true,
            massage: "please provide Address."
        });
    }

    Connection.query("SELECT * FROM user_information WHERE Address=?", Address, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "Address is not found."
            });
        return res.send({
            error: false,
            data: results,
            massage: "User retrieved."
        });
    });
});

//GET User Age 
router.get("/user_infoAge/:Age", function (req, res) {
    let Age = req.params.Age;
    if (!Age) {
        return res.send({
            error: true,
            massage: "please provide Age."
        });
    }

    Connection.query("SELECT * FROM user_information WHERE Age=?", Age, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "Age is not found."
            });
        return res.send({
            error: false,
            data: results,
            massage: "User retrieved."
        });
    });
});

//GET User Role
router.get("/user_infoUserRole/:UserRole", function (req, res) {
    let UserRole = req.params.UserRole;
    if (!UserRole) {
        return res.send({
            error: true,
            massage: "please provide UserRole."
        });
    }

    Connection.query("SELECT * FROM user_information WHERE UserRole=?", UserRole, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "UserRole is not found."
            });
        return res.send({
            error: false,
            data: results,
            massage: "User retrieved."
        });
    });
});

//------------------------- login_history -------------------------------

//GET login_history HistoryID
router.get("/login_history/:HistoryID", function (req, res) {
    let HistoryID = req.params.HistoryID;
    if (!HistoryID) {
        return res.send({
            error: true,
            massage: "please provide HistoryID."
        });
    }

    Connection.query("SELECT * FROM login_history WHERE HistoryID=?", HistoryID, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "HistoryID is not found."
            });
        return res.send({
            error: false,
            data: results[0],
            massage: "History retrieved."
        });
    });
});

//GET login_history UserID
router.get("/login_historyUserID/:UserID", function (req, res) {
    let UserID = req.params.UserID;
    if (!UserID) {
        return res.send({
            error: true,
            massage: "please provide UserID."
        });
    }

    Connection.query("SELECT * FROM login_history WHERE UserID=?", UserID, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "UserID is not found."
            });
        return res.send({
            error: false,
            data: results,
            massage: "History retrieved."
        });
    });
});

//GET login_history UserName 
router.get("/login_historyUserName/:UserName", function (req, res) {
    let UserName = req.params.UserName;
    if (!UserName) {
        return res.send({
            error: true,
            massage: "please provide UserName."
        });
    }

    Connection.query("SELECT * FROM login_history WHERE UserName=?", UserName, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "UserName is not found."
            });
        return res.send({
            error: false,
            data: results,
            massage: "History retrieved."
        });
    });
});

//GET login_history UserRole
router.get("/login_historyRole/:Role", function (req, res) {
    let UserRole = req.params.Role;
    if (!UserRole) {
        return res.send({
            error: true,
            massage: "please provide UserRole."
        });
    }

    Connection.query("SELECT * FROM login_history WHERE UserRole=?", UserRole, function (error, results) {
        if (error || results.length === 0)
            return res.send({
                error: true,
                massage: "UserRole is not found."
            });
        return res.send({
            error: false,
            data: results,
            massage: "History retrieved."
        });
    });
});

////////////////
/* POST method */
////////////////
//------------------------- Artist -------------------------------
// upload artist
router.post("/upload_artist", function (req, res) {
    let artist = req.body.artist
    console.log(artist);
    if (!artist) {
        return res.status(400).send({
            error: true,
            massage: "Please provide artist information",
        });
    }

    Connection.query("INSERT INTO artist SET?", artist, function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            massage: "add done!",
        });
    });
});
/*
@Test Case 1
URL:"http://localhost:3000/upload_artist"
method :"POST"
ิInput body :{
    "artist":{
        "ArtistID":"20091256",
        "ArtistName":"Eminem",
        "ArtistPicture" : "www.google.com",
        "ArtistDOB": "2007-09-13 00:00:00",
        "ArtistDesc" : "testDesc"
    }
}
body: {
    "error": false,
    "data": 1,
    "massage": "add done!"
}

*/
/*
@Test Case 2
URL:"http://localhost:3000/upload_artist"
method :"POST"
ิInput body :{
    "artist":{
        "ArtistID":"20091864",
        "ArtistName":"Selena Gomez",
        "ArtistPicture" : "www.google.com",
        "ArtistDOB": "2007-09-13 00:00:00",
        "ArtistDesc" : "testDesc"
    }
}
body: {
    "error": false,
    "data": 1,
    "massage": "add done!"
}

*/
//--------------------------- Song ---------------------------------------
// upload song
router.post("/upload_song", function (req, res) {
    let song = req.body.song
    console.log(song);
    if (!song) {
        return res.status(400).send({
            error: true,
            massage: "Please provide song information",
        });
    }

    Connection.query("INSERT INTO song SET?", song, function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            massage: "add done!",
        });
    });
});
/*
@Test Case 1
URL:"http://localhost:3000/upload_song"
method :"POST"
ิInput body :{
    "song": {
        "SongID": "88695477",
        "SongName": "Pretty Boy",
        "SongPicture": "www.songShazamGroup13_88695477",
        "SongReleaseDate": "2014-01-23T17:00:00.000",
        "ArtistID": "20000215", 
        "SongDesc": "testDesc"
    }
}
body: {
    "error": false,
    "data": 1,
    "massage": "add done!"
}

*/
/*
@Test Case 2
URL:"http://localhost:3000/upload_song"
method :"POST"
ิInput body :{
    "song": {
        "SongID": "88695485",
        "SongName": "Never Ever",
        "SongPicture": "www.songShazamGroup13_88695485",
        "SongReleaseDate": "2018-03-23T17:00:00.000",
        "ArtistID": "20879812", 
        "SongDesc": "testDesc"
    }
}
body: {
    "error": false,
    "data": 1,
    "massage": "add done!"
}

*/
//------------------------- user_information ---------------------------
// upload user information
router.post("/upload_user_information", function (req, res) {
    let user_information = req.body.user_information
    console.log(user_information);
    if (!user_information) {
        return res.status(400).send({
            error: true,
            massage: "Please provide user information",
        });
    }

    Connection.query("INSERT INTO user_information SET?", user_information, function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            massage: "add done!",
        });
    });
});
/*
@Test Case 1
URL:"http://localhost:3000/upload_user_information"
method :"POST"
ิInput body :{
     "user_information":{
            "UserID": "37146835",
            "UserName": "user10",
            "UserPassword": "6IVklNyjDboO",
            "Firstname": "postman",
            "Lastname": "vpnmana",
            "Email": "pos589UY@test.com",
            "Address": "Buri Ram,",
            "Age": 30,
            "UserRole": "user"
        }
}
body: {
    "error": false,
    "data": 1,
    "massage": "add done!"
}

*/
/*
@Test Case 2
URL:""
method :"POST"
ิInput body :{
     "user_information":{
            "UserID": "37146866",
            "UserName": "user11",
            "UserPassword": "5qkEC5cmBbFk",
            "Firstname": "Ganerer",
            "Lastname": "netword",
            "Email": "Bbfk68KKK@test.com",
            "Address": "Lamphun,",
            "Age": 28,
            "UserRole": "user"
        }
}
body: {
    "error": false,
    "data": 1,
    "massage": "add done!"
}

*/
//------------------------- login_history ---------------------------
//upload loginhistory
router.post("/upload_login_history", function (req, res) {
    let login_history = req.body.user_information
    console.log(user_information);
    if (!user_information) {
        return res.status(400).send({
            error: true,
            massage: "Please provide user information",
        });
    }

    Connection.query("INSERT INTO user_information SET?", user_information, function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            massage: "add done!",
        });
    });
});


////////////////////
/* Delete method */
///////////////////
//------------------------- Artist -------------------------------
//delete artist
router.delete("/delete_artist", function (req, res) {
    let ArtistID = req.body.ArtistID;

    if (!ArtistID) {
        return res.status(400).send({
            error: true,
            message: "Please provide ArtistID"
        });
    }

    Connection.query("DELETE FROM artist WHERE ArtistID=?", ArtistID, function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            message: "ArtistID has been deleted successfully."
        });
    });
});
/*
@Test Case 1
URL:"http://localhost:3000/delete_artist"
method :"DELETE"
ิInput body :{
     "ArtistID":"20091864"
}
body: {
    "error": false,
    "data": 1,
    "message": "ArtistID has been deleted successfully."
}

*/
/*
@Test Case 2
URL:"http://localhost:3000/delete_artist"
method :"DELETE"
ิInput body :{
  "ArtistID":"20091256"
}
body: {
    "error": false,
    "data": 1,
    "message": "ArtistID has been deleted successfully."
}

*/

//delete song
router.delete("/delete_song", function (req, res) {
    let SongID = req.body.SongID;

    if (!SongID) {
        return res.status(400).send({
            error: true,
            message: "Please provide SongID"
        });
    }

    Connection.query("DELETE FROM song WHERE SongID=?", SongID, function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            message: "SongID has been deleted successfully."
        });
    });
});
/*
@Test Case 1
URL:"http://localhost:3000/delete_song"
method :"DELETE"
ิInput body :{
     "SongID": "88695485"
}
body: {
    "error": false,
    "data": 1,
    "message": "SongID has been deleted successfully."
}

*/
/*
@Test Case 2
URL:"http://localhost:3000/delete_song"
method :"DELETE"
ิInput body :{
     "SongID": "88695477"
}
body: {
    "error": false,
    "data": 1,
    "message": "SongID has been deleted successfully."
}

*/

//delete user infos
router.delete("/delete_user_infos", function (req, res) {
    let UserID = req.body.UserID;

    if (!UserID) {
        return res.status(400).send({
            error: true,
            message: "Please provide userID"
        });
    }

    Connection.query("DELETE FROM user_information WHERE UserID=?", UserID, function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            message: "UserID has been deleted successfully."
        });
    });
});
/*
@Test Case 1
URL:"http://localhost:3000/delete_user_infos"
method :"DELETE"
ิInput body :{
    "UserID": "37146835"
}
body: {
    "error": false,
    "data": 1,
    "message": "UserID has been deleted successfully."
}

*/
/*
@Test Case 2
URL:"http://localhost:3000/delete_user_infos"
method :"DELETE"
ิInput body :{
   "UserID": "37146866"
}
body: {
    "error": false,
    "data": 1,
    "message": "UserID has been deleted successfully."
}

*/
//delete history
router.delete("/delete_history", function (req, res) {
    let HistoryID = req.body.HistoryID;

    if (!HistoryID) {
        return res.status(400).send({
            error: true,
            message: "Please provide HistoryID"
        });
    }

    Connection.query("DELETE FROM login_history WHERE HistoryID=?", HistoryID, function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            message: "HistoryID has been deleted successfully."
        });
    });
});
//------------------------- Artist -------------------------------



////////////////////
/* UPDAET method */
///////////////////
//------------------------- Artist -------------------------------
// update artist
router.put("/update_artist", function (req, res) {
    let artist_ID = req.body.artist.ArtistID;
    let artist = req.body.artist;

    if (!artist_ID || !artist) {
        return res.status(400).send({
            error: true,
            message: "Please provide Artist ID"
        });
    }

    Connection.query("UPDATE artist SET ? WHERE ArtistID=?", [artist, artist_ID], function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            message: "Artist ID has been updated successfully."
        });
    });
});
/*
@Test Case 1
URL:"http://localhost:3000/update_artist"
method :"PUT"
ิInput body :{
    "artist":{
        "ArtistID": "20000215",
        "ArtistName": "M2M",
        "ArtistPicture": "www.google.com",
        "ArtistDOB": "2008-02-13 00:00:00",
        "ArtistDesc": "testDesc"
    }
}
body:{
    "error": false,
    "data": 1,
    "message": "Artist ID has been updated successfully."
} 
*/
/*
@Test Case 2
URL:"http://localhost:3000/update_artist"
method :"PUT"
ิInput body :{
    "artist":{
        "ArtistID": "20111103",
        "ArtistName": "CNBLUE",
        "ArtistPicture": "www.google.com",
        "ArtistDOB": "2012-02-13 00:00:00",
        "ArtistDesc": "testDesc"
    }
}
body: {
    "error": false,
    "data": 1,
    "message": "Artist ID has been updated successfully."
}
*/

// update song

router.put("/update_song", function (req, res) {
    let song_id = req.body.song.SongID;
    let song = req.body.song;

    if (!song_id || !song) {
        return res.status(400).send({
            error: true,
            message: "Please provide Song ID"
        });
    }

    Connection.query("UPDATE song SET ? WHERE SongID=?", [song, song_id], function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            message: "Song ID has been updated successfully."
        });
    });
});

/*
@Test Case 1
URL:"http://localhost:3000/update_song"
method :"PUT"
ิInput body :{
    "song": {
         "SongID": "14795680",
            "SongName": "Amnesia",
            "SongPicture": "www.songShazamGroup13_14795680",
            "SongReleaseDate": "2022-09-25T17:00:00.000",
            "ArtistID": "20111103",
            "SongDesc": "testDesc"
    }
}
body:{
    "error": false,
    "data": 1,
    "message": "Song ID has been updated successfully."
}
*/
/*
@Test Case 2
URL:"http://localhost:3000/update_song"
method :"PUT"
ิInput body :{
    "song": {
         "SongID": "14795680",
            "SongName": "Amnesia",
            "SongPicture": "www.songShazamGroup13_14795680",
            "SongReleaseDate": "2022-09-25T18:00:00.000",
            "ArtistID": "20111103",
            "SongDesc": "testDesc"
    }
}
body: {
    "error": false,
    "data": 1,
    "message": "Song ID has been updated successfully."
}
*/
// update user_information
router.put("/update_user", function (req, res) {
    let user_id = req.body.user.UserID;
    let user = req.body.user;

    if (!user_id|| !user ) {
        return res.status(400).send({
            error: true,
            message: "Please provide User ID"
        });
    }

    Connection.query("UPDATE user_information SET ? WHERE UserID=?", [user, user_id], function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            message: "User ID has been updated successfully."
        });
    });
});

/*
@Test Case 1
URL:"http://localhost:3000/update_user"
method :"PUT"
ิInput body :
body:
*/
/*
@Test Case 2
URL:"http://localhost:3000/update_user"
method :"PUT"
ิInput body :
body: 
*/

// login
router.post("/user/login", function (req, res) {
    let email = req.body.email;
    let password = req.body.password;

    let sql = "select * FROM user_information WHERE Email='"+email+"' AND UserPassword='"+password+"'";

    Connection.query(sql, function (error, results) {
        if (error) throw error;

        if(results != 0){
            return res.send({
                sql: sql,
                result: results,
                message: "login successfully."
            });
        }else{
            return res.send({
                sql: sql,
                result: results,
                message: "login failed."
            });
        }
        
    });
});



app.use(router);
app.listen(process.env.PORT, () => {
    console.log("sever istening port at", process.env.PORT);
});

