import { Link } from "react-router-dom";
import Typing from "react-typing-animation";
import styles from "./ThankYouPage.module.css";

const ThankYouPage = () => {
  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default ThankYouPage;
