import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<HomePage />} exact path="/" />
          <Route element={<AboutPage />} exact path="/about" />
          <Route element={<ProjectsPage />} exact path="/projects" />
          <Route element={<ContactPage />} exact path="/contact" />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
