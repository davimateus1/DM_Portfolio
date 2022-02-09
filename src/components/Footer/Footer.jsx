import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.title}>
        <h2>Davi</h2>
      </div>

      <ul className={styles.social_list}>
        <li>
          <a href="https://www.instagram.com/davimateus1/" target="_blank">
            Inicio
          </a>
        </li>
        <li>
          <a href="https://github.com/davimateus1" target="_blank">
            Contate-me
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/davimateusg/" target="_blank">
            Social
          </a>
        </li>
      </ul>

      <ul className={styles.social_list_two}>
        <li>
          <a href="https://www.instagram.com/davimateus1/" target="_blank">
            Inicio
          </a>
        </li>
        <li>
          <a href="https://github.com/davimateus1" target="_blank">
            Contate-me
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/davimateusg/" target="_blank">
            Social
          </a>
        </li>
      </ul>

      <ul className={styles.social_list_three}>
        <li>
          <a href="https://www.instagram.com/davimateus1/" target="_blank">
            Inicio
          </a>
        </li>
        <li>
          <a href="https://github.com/davimateus1" target="_blank">
            Contate-me
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/davimateusg/" target="_blank">
            Social
          </a>
        </li>
      </ul>

      <br />
      <hr />

      <div className={styles.authorized}>
        <p>Davi &copy; 2021</p>
      </div>

    </footer>
  );
};

export default Footer;
