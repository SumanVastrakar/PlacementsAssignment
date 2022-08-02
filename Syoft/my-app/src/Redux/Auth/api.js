import axios from "axios";

const API = axios.create({baseURL:"http://5000/"});

export const signIn = (formData) => API.post("/users/signin", formData);

export const signUp = (formData) => API.post("/users/signup", formData);

export const product = (formData) => API.post("/users/postproduct", formData);
