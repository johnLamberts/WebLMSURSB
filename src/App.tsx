import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ThemeSettings from "./components/Settings/ThemeSettings";
import ThemeProvider from "./theme/ThemeProvider";
import Page404 from "./pages/404";
// import GeneralApp from "./pages/GeneralApp";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Students from "./pages/Students/Students";
import GeneralApp from "./pages/GeneralApp";

function App() {
  return (
    <ThemeProvider>
      <ThemeSettings>
        <Router>
          <Routes>
            <Route path="/" element={<AdminLayout />}>
              <Route index path="/app" element={<Dashboard />} />
              <Route path="/sample" element={<GeneralApp />} />
              <Route path="/students" element={<Students />} />
            </Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Router>
      </ThemeSettings>
    </ThemeProvider>
  );
}

export default App;
