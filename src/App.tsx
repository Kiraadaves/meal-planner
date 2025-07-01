import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <>
      <Router>
        <AOSWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </AOSWrapper>
      </Router>
    </>
  );
}

export default App;
