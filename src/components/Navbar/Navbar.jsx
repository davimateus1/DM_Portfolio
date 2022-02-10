import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Davi</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <a>Inicio</a>
        </li>
        <li>
          <a>Sobre mim</a>
        </li>
        <li>
          <a>Projetos</a>
        </li>
      </ul>
      <button>Contate-me</button>
    </nav>
  );
};

export default Navbar;
