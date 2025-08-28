export default function TaskItem({ task, onToggle, onDelete }) {
    return (
        <div className="d-flex justify-content-between align-items-center border rounded p-2 mb-2 bg-white">

            {/* Checkbox + Description */}
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task)}
                    id={`task-${task.id}`}
                />
                <label
                    className="form-check-label"
                    htmlFor={`task-${task.id}`}
                    style={{ textDecoration: task.completed ? "line-through" : "none" }}
                >
                    {task.description}
                </label>
            </div>

            {/* Delete Button */}
            <button className="btn btn-sm btn-danger" onClick={() => onDelete(task.id)}>
                Supprimer
            </button>
        </div>
    );
}
