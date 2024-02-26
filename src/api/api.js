import axios from "axios";
export const api_key = "2a39bb19397e1f5c3444277548b2c7ca";
export const api = axios.create({
  baseURL:'https://api.themoviedb.org/3'
});
