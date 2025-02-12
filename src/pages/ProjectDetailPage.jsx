import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../config/api";
import Loader from "../components/Loader";

function ProjectDetailPage() {
  const [project, setProject] = useState(null);
  const { projectId } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/projects/${projectId}`)
      .then((response) => {
        setProject(response.data);
      })
      .catch((e) => {
        console.log("Error", e);
      });
  }, []);

  if (project === null) {
    return <Loader />;
  }

  return (
    <div className="ProjectDetailsPage">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <Link to="/projects">
        <button>Back</button>
      </Link>
      <Link to={`/projects/edit/${projectId}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}

export default ProjectDetailPage;
