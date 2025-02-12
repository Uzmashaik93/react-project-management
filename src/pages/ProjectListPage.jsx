import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

import { API_URL } from "../config/api";

function ProjectListPage() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/projects`)
      .then((response) => {
        setProjects(response.data);
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
            <h4>{projectObj.title}</h4>
          </div>
        );
      })}
    </div>
  );
}
export default ProjectListPage;
