import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./dashboardPages/Dashboard";
import Login from "./login/Login";
import ProtectedRoute from "./ProtectedRoute";
import WeatherPage from "./dashboardPages/components/sidebarComponents/WeatherPage";
import ChartPage from "./dashboardPages/components/sidebarComponents/ChartPage";
import PhotoPage from "./dashboardPages/components/sidebarComponents/PhotoPage";
import ProfilePage from "./dashboardPages/components/sidebarComponents/ProfilePage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/pic" element={<PhotoPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/chart" element={<ChartPage />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
