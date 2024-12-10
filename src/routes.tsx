import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivatePage from "./Exercise3/Screens/PrivatePage/PrivatePage";
import Login from "./Exercise3/Screens/Login/Login";

const RoutesComponent = () => {
  const isAuthenticated = localStorage.getItem("auth_token");

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <PrivatePage /> : <Login />}
        />
        <Route
          path="/private"
          element={isAuthenticated ? <PrivatePage /> : <Login />}
        />
        <Route
          path="/"
          element={isAuthenticated ? <PrivatePage /> : <Login />}
        />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
