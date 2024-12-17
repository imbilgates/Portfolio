import { useState } from "react";
import "./AddProject.css"; 
import { projects } from '../../portfolio'

const AddProject = () => {
    const [formData, setFormData] = useState(projects);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        projects.push(formData);
        alert("Project added successfully!");
    };

    return (
        <form onSubmit={handleSubmit} className="add-project-form">
            <input
                name="name"
                onChange={handleChange}
                placeholder="Project Name"
                value={formData.name}
            />
            <input
                name="description"
                onChange={handleChange}
                placeholder="Description"
                value={formData.description}
            />
            <input
                name="stack"
                onChange={handleChange}
                placeholder="(e.g., React, JavaScript)"
                value={formData.stack}
            />
            <input
                name="sourceCode"
                onChange={handleChange}
                placeholder="Source Code Link"
                value={formData.sourceCode}
            />
            <input
                name="livePreview"
                onChange={handleChange}
                placeholder="Live Preview Link"
                value={formData.livePreview}
            />
            <button type="submit">Add Project</button>
        </form>
    );
};

export default AddProject;
