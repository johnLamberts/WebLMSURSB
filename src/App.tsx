import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ThemeSettings from "./components/Settings/ThemeSettings";
import ThemeProvider from "./theme/ThemeProvider";
import Page404 from "./pages/404";
import GeneralApp from "./pages/GeneralApp";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <ThemeProvider>
      <ThemeSettings>
        <Router>
          <Routes>
            <Route element={<AdminLayout />}>
              <Route index path="/" element={<Dashboard />} />
              <Route path="/app" element={<GeneralApp />} />
              <Route path="*" element={<Page404 />} />
            </Route>
          </Routes>
        </Router>
      </ThemeSettings>
    </ThemeProvider>
  );
}

export default App;
