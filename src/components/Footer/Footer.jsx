import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a href="https://www.instagram.com/davimateus1/" target="_blank">
            {/* <FaInstagram /> */}
            Inicio
          </a>
        </li>
        <li>
          <a href="https://github.com/davimateus1" target="_blank">
            {/* <FaGithub /> */}
            Contate-me
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/davimateusg/" target="_blank">
            {/* <FaLinkedin /> */}
            Social
          </a>
        </li>
      </ul>
      <ul className={styles.social_list}>
        <li>
          <a href="https://www.instagram.com/davimateus1/" target="_blank">
            {/* <FaInstagram /> */}
            Inicio
          </a>
        </li>
        <li>
          <a href="https://github.com/davimateus1" target="_blank">
            {/* <FaGithub /> */}
            Contate-me
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/davimateusg/" target="_blank">
            {/* <FaLinkedin /> */}
            Social
          </a>
        </li>
      </ul>
      <br/>
      <hr />
      &copy;
    </footer>
  );
};

export default Footer;
