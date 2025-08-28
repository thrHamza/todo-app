import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
});

export const fetchTasks = async () => {
    const res = await API.get("/tasks");
    return res.data;
};

export const createTask = async (task) => {
    const res = await API.post("/tasks", task);
    return res.data;
};

export const updateTask = async (id, data) => {
    const res = await API.put(`/tasks/${id}`, data);
    return res.data;
};

export const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
};
