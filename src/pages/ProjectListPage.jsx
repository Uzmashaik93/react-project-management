import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

import { API_URL } from "../config/api";
import { Link } from "react-router-dom";

function ProjectListPage() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/projects`)
      .then((response) => {
        const projectsArr = response.data.toReversed();
        setProjects(projectsArr);
      })
      .catch((e) => {
        "Error", e;
      });
  }, []);

  if (projects === null) {
    return <Loader />;
  }

  return (
    <div>
      {projects.map((projectObj) => {
        return (
          <div key={projectObj.id} className="card">
            <Link to={`/projects/${projectObj.id}`}>
              <h4>{projectObj.title}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default ProjectListPage;
