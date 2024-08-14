import axios from "axios";
require('dotenv').config()
const API =  axios.create({
    baseURL: `http://localhost:${REACT_APP_PORT}/api/`,
});

export const UserSignUp = async (data) => API.post("/user/signup", data);
export const UserSignIn = async (data) => API.post("/user/signin", data);

export const getDashboardDetails = async (token) => API.get("/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
});

export const getWorkouts = async (token, date) => await API.get(`/user/workout${date}`, {
    headers: { Authorization: `Bearer ${token}` },
});

export const addWorkout = async (token, data) => await API.post(`/user/workout`, data, {
    headers: { Authorization: `Bearer ${token}` },
});