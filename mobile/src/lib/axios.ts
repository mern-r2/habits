import axios from "axios";

// to test on device we need the IP, expo prints it when starting
// may need to add this IP as the host server-side explicitly
export const api = axios.create({
  baseURL: 'http://localhost:3333'
})