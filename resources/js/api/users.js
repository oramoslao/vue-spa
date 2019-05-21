import axios from "axios";

const client = axios.create({
    baseURL: "/api"
});

export default {
    all(params) {
        // return axios.get("/api/users");
        return client.get('users', params);
    },
    find(id) {
        // return axios.get(`/api/users/${id}`);
        return client.get(`users/${id}`);
    },
    update(id, data) {
        // return axios.put(`/api/users/${id}`, data);
        return client.put(`users/${id}`, data);
    },
    delete(id){
        // return axios.delete(`/api/users/${id}`);
        return client.delete(`users/${id}`);
    }
};
