import styles from "./Footer.module.css";

import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.title}>
        <h2>Davi </h2>
      </div>

      <ul className={styles.social_list}>
        <li className={styles.titles}>Inicio</li>
        <li className={styles.click}>Sobre mim</li>
        <li className={styles.click}>Projetos</li>
      </ul>

      <ul className={styles.social_list_two}>
        <li className={styles.titles}>Contate-me</li>
        <li className={styles.click}>
          <a
            href="https://api.whatsapp.com/send?phone=5587988476864&text=Enviar%20mensagem%20para%20Davi%20Mateus"
            target="_blank"
            rel="noreferrer"
          >
            Whatsapp
          </a>
        </li>
        <li className={styles.click}>
          <a
            href="mailto:davimateusga@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
        </li>
      </ul>

      <ul className={styles.social_list_three}>
        <li className={styles.titles}>Social</li>
        <li>
          <a
            href="https://github.com/davimateus1"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/davimateusg/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.instagram.com/davimateus1/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
        </li>
      </ul>
      <hr />
      <div className={styles.authorized}>
        <p>Davi &copy; 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
