import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle, onDelete }) {
    if (!tasks.length) return <p className="text-muted">Aucune tâche pour l'instant.</p>;

    return (
        <>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </>
    );
}
