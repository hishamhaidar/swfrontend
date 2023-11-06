import axios from "axios";

const swApi = axios.create({ baseURL: "https://swapi-3e9w.onrender.com/" });

export { swApi };
