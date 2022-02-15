import { useEffect } from "react";
import { Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import Typing from "react-typing-animation";
import styles from "./ErrorPage.module.css";

const ThankYouPage = () => {
  useEffect(() => {
    document.title = "Erro 404 :(";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <Zoom>
        <Typing speed={150}>
          <div className={styles.text}>
            <h1>ERRO 404 :(</h1>
            <p>Página não encontrada</p>
          </div>
        </Typing>
        <Typing>
          <Typing.Delay ms={30} />
          <Link to="/">
            <button>Voltar para o Inicio</button>
          </Link>
        </Typing>
      </Zoom>
    </div>
  );
};

export default ThankYouPage;
