//import { apiEndpoint } from "../config.json";
import http from "./httpInterceptor";

const apiEndpoint = "http://localhost:8080/v1/";
//login form
export function login(object) {
  const api = apiEndpoint + "users/login";
  return http.post(api, object);
}
//get user
export function getAll() {
  const api = apiEndpoint + "users";
  return http.get(api);
}

//post user
export function post(object) {
  const api = apiEndpoint + "users";
  return http.post(api, object);
}
// register
export function register(object) {
  const api = apiEndpoint + "users";
  return http.post(api, object);
}

//get one user
export function get(id) {
  const api = apiEndpoint + `users/${id}`;
  return http.get(api);
}

// update user w
export function put(id, object) {
  const api = apiEndpoint + `users/${id}`;
  return http.put(api, object);
}
