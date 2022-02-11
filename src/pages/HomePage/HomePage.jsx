import styles from "./HomePage.module.css";

import Typing from "react-typing-animation";
import {Fade, Zoom} from "react-reveal";

import { BsArrowRight } from "react-icons/bs";

import PopupDownload from "../../components/PopupDownload/PopupDownload";

import davi from "../../assets/img/davi.png";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Typing speed={30}>
        <div className={styles.container_height}>
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
      </Typing>
      <Zoom>
      <div className={styles.buttons}>
        <button className={styles.button1}>Ver projetos</button>
        <PopupDownload />
      </div>
      </Zoom>
      <Fade bottom>
          <div className={styles.card_home}>
            <div className={styles.image_container}>
              <img src={davi} alt="avatar" />
            </div>
            <div>
              <h1>Sobre mim</h1>
              <p>
                Meu nome é Davi Mateus, tenho 19 anos, curso Ciência da
                Computação na Universidade Católica de Pernambuco (UNICAP).
                Desde pequeno, sempre gostei muito de coisas que eram voltadas a
                tecnologia e jogos, mas infelizmente só vim conhecer o mundo da
                programação no final do 3° ano do ensino médio. Quando comecei o
                curso, estudei as áreas e me apaixonei pela área de front-end,
                hoje sou desenvolvedor e continuo sempre estudando para
                descobrir novas coisas e aprimorar as minhas habilidades!
              </p>
              <button className={styles.button_card}>
                Mais sobre mim <BsArrowRight />
              </button>
            </div>
          </div>
      </Fade>
    </div>
  );
};

export default HomePage;
