import "./App.css";
import "./styles/style.scss";
import { Routes, Route } from "react-router-dom";
import Interduction from "./pages/IntroPage";
import PortfolioPage from "./pages/PortfolioPage";
import MyAccount from "./pages/MyAccount";
import Panel from "./pages/PanelPage";
import Test from "./components/Test";
import CompanyInformation from "./components/my account page/comany information/CompanyInformation";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Interduction />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/panel/:name" element={<Panel />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<h1>not found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
