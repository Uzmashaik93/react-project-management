import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import ProjectListPage from "./pages/ProjectListPage";
import CreatePage from "./components/CreateProjectPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

function App() {
  return (
    <>
      <h1>Welcome to Project Management App</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/projects/create" element={<CreatePage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
