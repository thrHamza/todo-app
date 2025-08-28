import { useState } from "react";

export default function TaskForm({ onAdd }) {
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description.trim()) return;
        onAdd({ description });
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex mb-3">
            <input
                type="text"
                className="form-control me-2"
                placeholder="Ajouter une nouvelle tâche..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Ajouter</button>
        </form>
    );
}
