import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

import styles from "./AboutPage.module.css";

import davi from "../../assets/img/davi.png";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <Link to="/">
          <AiOutlineArrowLeft /> Voltar
        </Link>
      </div>
      <div className={styles.card_home}>
        <div className={styles.image_container}>
          <img src={davi} alt="avatar" />
        </div>
        <div className={styles.texts}>
          <h1>Sobre mim</h1>
          <p>
            Meu nome é Davi Mateus, tenho 19 anos, curso Ciência da Computação
            na Universidade Católica de Pernambuco (UNICAP). Desde pequeno,
            sempre gostei muito de coisas que eram voltadas a tecnologia e
            jogos, mas infelizmente só vim conhecer o mundo da programação no
            final do 3° ano do ensino médio. Quando comecei o curso, estudei as
            áreas e me apaixonei pela área de front-end, hoje sou desenvolvedor
            e continuo sempre estudando para descobrir novas coisas e aprimorar
            as minhas habilidades!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
