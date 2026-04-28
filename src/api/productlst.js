// src/api/productApi.js
import axios from "axios";

const API = "http://localhost:8080/products";

export const getProducts = () => axios.get(API);