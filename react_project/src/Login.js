import React from "react";
import axios from "axios";
import Main from "./Main";

function Login() {
  var userName = "";

  var loginStatus = false;

  function onLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const loginData = {
      email: email,
      password: password,
    };

    axios.post("http://localhost:3000/user/login", loginData).then((res) => {
      if(res.data.message === "login successfully."){
        const info = res.data.result;
        userName = info[0].Firstname + " " + info[0].Lastname;
        loginStatus = true;
        document.getElementById("title").innerHTML = "Welcome "+userName;
        document.getElementById("loginForm").style.display = "none";
      }else{
        alert(res.data.message);
      }
    });
  }

  return (
    <div class="w-100">
      <div>
        <div class="w-100">
          <h1 id="title">Login</h1>
          <div id="loginForm" class="my-4 text-start">
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
              />
            </div>
            <button onClick={onLogin} class="btn btn-success mt-5 w-100">
              Login
            </button>
          </div>
        </div>
      </div>
      <Main id="mainPage" />
    </div>
  );
}

export default Login;
