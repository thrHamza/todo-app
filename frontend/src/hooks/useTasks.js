import { useState, useEffect } from "react";
import { fetchTasks, createTask, updateTask, deleteTask } from "../api/tasks";

export default function useTasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Load tasks on mount
    useEffect(() => {
        const loadTasks = async () => {
            try {
                const data = await fetchTasks();
                setTasks(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        loadTasks();
    }, []);

    const addTask = async (task) => {
        const newTask = await createTask(task);
        setTasks((prev) => [newTask, ...prev]);
    };

    const toggleTask = async (task) => {
        const updated = await updateTask(task.id, { completed: !task.completed });
        setTasks((prev) =>
            prev.map((t) => (t.id === task.id ? updated : t))
        );
    };

    const removeTask = async (id) => {
        await deleteTask(id);
        setTasks((prev) => prev.filter((t) => t.id !== id));
    };

    return { tasks, loading, error, addTask, toggleTask, removeTask };
}
