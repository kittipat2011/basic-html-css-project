const express = require('express');
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv').config();

const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
//Connection
// call binary 
const {append} = require("express/lib/response");
const mysql = require("mysql2")

let Connection = mysql.createConnection({
    host    :process.env.DB_HOST,
    user    :process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
});

//checking
Connection.connect(function(err){
    if(err) throw err;
    console.log("Connected DB: "+process.env.DB_NAME);
})

//ฐานข้อมูลไปหน้าเว็บ(เส้นทาง)

//Boby parser middleware
app.use(bodyParser.json()); //ตัวกลางฐานข้อมูลให้เป็นภาษาคน
app.use(bodyParser.urlencoded({extended:true}));
app.use(router);


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/css', express.static(path.join(__dirname, '/static')));
app.use('/js', express.static(path.join(__dirname, '/static/js')));

// http://localhost:3000/
app.get('/login', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/login.html'));
});
app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/static/login.css', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/static/login.css'));
});
app.get('/static/index.css', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/static/index.css'));
});
app.get('/static/js/main.js', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/static/js/main.js'));
});




// http://localhost:3000/auth
app.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		Connection.query('SELECT * FROM user_information WHERE Email = ? AND UserPassword = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

// http://localhost:3000/home
app.get('/index', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	response.end();
});
app.listen(3000);