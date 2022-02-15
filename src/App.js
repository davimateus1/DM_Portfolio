import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ThankYouPage from "./pages/ThankYouPage/ThankYouPage";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<HomePage />} exact path="/" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<ProjectsPage />} path="/projects" />
          <Route element={<ContactPage />} path="/contact" />
          <Route element={<ThankYouPage />} path="/thanks" />
          <Route element={<ThankYouPage />} path="/thanks" />
          <Route element={<ErrorPage />} path="/*" />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
