import axios from "axios";

const AUTH_BASE_URL="http://localhost:8080/api/auth"

export const  registerAPICall=(registerObj) =>  axios.post(AUTH_BASE_URL + '/register' , registerObj)

// eslint-disable-next-line no-undef
export const loginAPICall=(usernameOrEmail, password) => axios.post(AUTH_BASE_URL + '/login', {usernameOrEmail, password})

export const storeToken=(token) => localStorage.setItem("token", token)

export const getToken=() => localStorage.getItem("token")