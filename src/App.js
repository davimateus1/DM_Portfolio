import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<HomePage />} exact path="/" />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
