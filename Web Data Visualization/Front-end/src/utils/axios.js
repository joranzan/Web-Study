import axios from 'axios';

const api = axios.create({
baseURL: "http://localhost:8081",   //api 요청할때마다 붙어서 나감
});

export const dataLab = {
    get: () => {
      return api.get("/data");
    },
    post: (data) => {
        return api.post("/data", data);
    },
    delete: () => {
     return api.delete("/data");
    },
};