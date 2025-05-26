import { Routes, Route } from "react-router-dom";
import { ProfileGithub } from "./pages/ProfileGithub";
import { ViewProject } from "./pages/ViewProject";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<ProfileGithub />} />
      <Route path="/viewProject" element={<ViewProject />} />
    </Routes>
  );
}
