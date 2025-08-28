import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import useTasks from "../hooks/useTasks";

export default function TodoPage() {
    const { tasks, loading, error, addTask, toggleTask, removeTask } = useTasks();

    if (loading) return <p>Chargement...</p>;
    if (error) return <p className="text-danger">Erreur lors du chargement des tâches</p>;

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Todo Liste</h1>
            <TaskForm onAdd={addTask} />
            <TaskList tasks={tasks} onToggle={toggleTask} onDelete={removeTask} />
        </div>
    );
}
