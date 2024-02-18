import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SideMenu from "./components/sidemenu/SideMenu";
import AlertsPage from "./pages/alerts page/alertsPage";
import TrainingPage from "./pages/training page/TrainingPage";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <SideMenu />
      <div className="main">
        <Routes>
          <Route path="/" element={<AlertsPage />} />
          <Route path="/Alerts" element={<AlertsPage />} />
          <Route path="/Training" element={<TrainingPage />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
