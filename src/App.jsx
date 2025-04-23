import HomePage from "./components/HomePage/HomePage";
import AISolution from "./components/Service/Pages/AISolution";
import ITSupport from "./components/Service/Pages/ITSupport";
import WebDev from "./components/Service/Pages/WebDev";
import WebMain from "./components/Service/Pages/WebMain";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
import FAQ from "./components/FAQ";
import TermsPolicy from "./components/TermsPolicy";
import HassendMail from "./components/HassendMail";

function App() {
  return (
    <div className="bg-primary min-h-screen">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service/web-main" element={<WebMain />} />
        <Route path="/service/web-dev" element={<WebDev />} />
        <Route path="/service/it-support" element={<ITSupport />} />
        <Route path="/service/ai-solution" element={<AISolution />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/termspolicy" element={<TermsPolicy />} />
        <Route path="/hassendmail" element={<HassendMail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
