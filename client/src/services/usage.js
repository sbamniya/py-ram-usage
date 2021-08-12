import axios from "axios";

const httpRequest = axios.create({
  baseURL: "http://localhost:5000",
});

export const getCpuUsage = async () => (await httpRequest.get("/cpu")).data;

export const getRamUsage = async () => (await httpRequest.get("/ram")).data;
