import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

import styles from "./AboutPage.module.css";

import davi from "../../assets/img/davi.png";
import Typing from "react-typing-animation";
import { Zoom } from "react-reveal";
import { CardsAbout } from "../../assets/utils/Data";
import AbilitiesCard from "../../components/AbilitiesCard/AabilitiesCard";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <Link to="/">
          <AiOutlineArrowLeft /> Voltar
        </Link>
      </div>
      <div className={styles.card_home}>
        <Zoom>
          <div className={styles.image_container}>
            <img src={davi} alt="avatar" />
          </div>
          <div className={styles.texts}>
            <h1>Davi Mateus</h1>
            <Typing speed={3}>
              <p>Sou desenvolvedor front-end, atualmente moro em Recife, PE.</p>
              <p>
                A ideia de trabalho em equipe me chama bastante atenção, enxergo
                isso como uma maneira de aprender novas habilidades e expandir o
                conhecimento com o intuito de melhorar a produtividade.
              </p>
              <p>
                Gosto Bastante de estudar e descobrir sempre novas tecnologias
                (bibliotecas, frameworks e boas práticas).
              </p>
              <p>
                Estou aberto a receber todo o feedback possivel em relação aos
                meus projetos, para assim, saber como melhorar e otimizar o
                desenvolvimento e melhorar meu código. Vamos bater um papo!
              </p>
              <a href="mailto:davimateusga@gmail.com">davimateusga@gmail.com</a>
            </Typing>
          </div>
        </Zoom>
      </div>
      <div className={styles.abilities}>
        <h1>Minhas habilidades</h1>
        <div className={styles.badges}>
            {CardsAbout.map((item) => (
              <AbilitiesCard
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                svg={item.svg}
              />
            ))}
          </div>
      </div>
      <div className={styles.learn}>

      </div>
    </div>
  );
};

export default AboutPage;
