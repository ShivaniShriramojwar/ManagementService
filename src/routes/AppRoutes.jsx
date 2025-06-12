import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Services from "../pages/Services";
import Incidents from "../pages/Incidents";
import PublicStatus from "../pages/PublicStatus";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/services" element={<Services />} />
    <Route path="/incidents" element={<Incidents />} />
    <Route path="/status" element={<PublicStatus />} />
  </Routes>
);

export default AppRoutes;
