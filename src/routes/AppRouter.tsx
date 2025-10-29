import { BrowserRouter, Route, Routes } from "react-router";
import App from "../App";
import { ProjectDetail } from "../components/screens/ProjectDetail/ProjectDetail";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
