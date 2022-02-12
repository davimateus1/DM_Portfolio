import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Davi</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">
            <a>Sobre mim</a>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <a>Projetos</a>
          </Link>
        </li>
      </ul>
      <Link to="/contact">
        <button>Contate-me</button>
      </Link>
    </nav>
  );
};

export default Navbar;
