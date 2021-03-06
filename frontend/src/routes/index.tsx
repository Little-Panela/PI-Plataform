import { Routes, Route } from "react-router-dom";

import { Main } from "../pages/Main";
import { Dashboard } from "../pages/Dashboard";

export const AppRoutes = () => (
  //@ts-ignore
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/results" element={<Dashboard />} />
    </Routes>
);
