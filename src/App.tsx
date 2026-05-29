import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HomePage } from "@/pages/HomePage";
import { WhoWeArePage } from "@/pages/WhoWeArePage";
import { ServicesPage } from "@/pages/ServicesPage";
import { TrainingPage } from "@/pages/TrainingPage";
import { ResourcesPage } from "@/pages/ResourcesPage";
import { ContactPage } from "@/pages/ContactPage";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/who-we-are" element={<WhoWeArePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
