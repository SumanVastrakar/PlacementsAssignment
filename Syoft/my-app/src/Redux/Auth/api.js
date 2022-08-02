import axios from "axios";

const API = axios.create({baseURL:"https://suman-backendnodemyappquiz.herokuapp.com/"});

export const signIn = (formData) => API.post("/users/signin", formData);

export const signUp = (formData) => API.post("/users/signup", formData);

export const product = (formData) => API.post("/users/postproduct", formData);
