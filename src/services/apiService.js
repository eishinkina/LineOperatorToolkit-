import axios from "axios";

const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  getMedals() {
    return apiClient.get("/medals.json");
  },
  getResistance() {
    return apiClient.get("/resistance.json");
  },
  getRoot() {
    return apiClient.get("/root.json");
  },
  getWorkingNna() {
    return apiClient.get("/workingNna.json");
  },
  getWorkingCollection() {
    return apiClient.get("/workingCollection.json");
  },
};
