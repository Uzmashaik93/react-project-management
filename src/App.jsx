import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import ProjectListPage from "./pages/ProjectListPage";

function App() {
  return (
    <>
      <h1>Welcome to Project Management App</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectListPage />} />
      </Routes>
    </>
  );
}

export default App;
