import { call } from "./http.service";

function login({ userName, password }) {
  return call({
    uri: "auth/login",
    method: "POST",
    body: { userName: userName, password: password },
  });
}

function register({ userName, password, email }) {
  return call({
    uri: "auth",
    method: "POST",
    body: { userName: userName, password: password, email: email },
  });
}

function logOut() {
  return call({ uri: "auth", method: "DELETE" });
}

function getProfile() {
  return call({ uri: "profile", method: "GET" });
}

export { login, logOut, getProfile, register };
