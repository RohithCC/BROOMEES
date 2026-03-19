import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import AllRounders from "./pages/AllRounders";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />  
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services_all" element={<Services />} />
        <Route path="/allrounder" element={<AllRounders />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;