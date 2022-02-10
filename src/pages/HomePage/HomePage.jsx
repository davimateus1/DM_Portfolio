import styles from "./HomePage.module.css";
import { pStyle, buttonStyle } from "./styles";

import Typing from "react-typing-animation";
import Popup from "react-animated-popup";
import { BsDownload } from "react-icons/bs";

import { useState } from "react";

const HomePage = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.container}>
      <Typing speed={30}>
        <div>
          <h1>
            Sou <span>Davi Mateus</span>
          </h1>
          <h1>Desenvolvedor Front-end</h1>
          <Typing.Delay ms={30} />
          <p>
            Bem-vindo(a) ao meu portfólio, aqui você encontrará diversas
            informações sobre mim, tais como: CV, projetos, estilo de
            programação, tecnologias que utilizo e formas de contato.
          </p>
          <p>Espero que goste e sinta-se a vontade para explorar!</p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button1}>Ver projetos</button>
          <button
            className={styles.button2}
            onClick={() => setVisible(!visible)}
          >
            <BsDownload />
            Download CV
          </button>
          <Popup
            visible={visible}
            onClose={() => setVisible(false)}
            animationDuration={800}
          >
            <p style={pStyle}>Versão em Português</p>
            <button style={buttonStyle}>Download CV</button>
            <p style={pStyle}>Versão em Inglês</p>
            <button style={buttonStyle}>Download CV</button>
          </Popup>
        </div>
      </Typing>
    </div>
  );
};

export default HomePage;
