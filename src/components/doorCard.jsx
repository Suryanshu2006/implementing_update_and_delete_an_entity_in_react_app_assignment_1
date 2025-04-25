import React from 'react'
import axios from "axios";

// Removed unused imports
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

const doorCard = ({door}) => {
    async function handleEdit() {
        try {
            const response = await axios.put(`${API_URI}/${door.id}`, door);
            alert("Item updated successfully!");
            console.log(response.data);
        } catch (error) {
            console.error("Error editing door:", error);
            alert("Error editing door. Please try again later.");
        }
    }

    async function handleDelete() {
        try {
            await axios.delete(`${API_URI}/${door.id}`);
            alert("Item deleted successfully!");
        } catch (error) {
            console.error("Error deleting door:", error);
            alert("Error deleting door. Please try again later.");
        }
    }

  return (
    <div>
        <h3>Name: {door.name}</h3>
        <p>Status: {door.status}</p>
        <div
        style={{
            display: "flex",
            justifyContent: "space-between",
        }}>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
}

export default doorCard