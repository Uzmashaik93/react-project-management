import axios from "axios";
import { useState } from "react";
import { API_URL } from "../config/api";
import { useNavigate } from "react-router-dom";

function CreatePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      title, //title:title
      description, //description:description
    };

    axios
      .post(`${API_URL}/projects`, newProject)
      .then((response) => {
        console.log("created....");
        navigate("/projects");
      })
      .catch((e) => {
        console.log("Error", e);
      });
  };

  return (
    <div className="CreateProjectPage">
      <h3>Add projects</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            placeholder="enter the title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            placeholder="enter the description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button>Create</button>
      </form>
    </div>
  );
}
export default CreatePage;
