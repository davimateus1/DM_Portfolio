import { useEffect } from "react";
import { Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import Typing from "react-typing-animation";
import styles from "./ThankYouPage.module.css";

const ThankYouPage = () => {
  useEffect(() => {
    document.title = "Obrigado! :D";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <Zoom>
        <Typing speed={50}>
          <div className={styles.text}>
            <h1>Obrigado pelo contato! &#128512;</h1>
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
