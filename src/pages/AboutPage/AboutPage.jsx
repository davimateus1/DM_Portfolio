import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

import styles from "./AboutPage.module.css";

import davi from "../../assets/img/davi.png";
import Typing from "react-typing-animation";
import { Fade, Zoom } from "react-reveal";
import { CardsAbout, CardsStudy, CardsTools } from "../../assets/utils/Data";
import AbilitiesCard from "../../components/AbilitiesCard/AabilitiesCard";
import ToolsCard from "../../components/ToolsCard/ToolsCard";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Fade top>
        <div className={styles.back}>
          <Link to="/">
            <AiOutlineArrowLeft /> Voltar
          </Link>
        </div>
      </Fade>
      <div className={styles.card_home}>
        <Fade top>
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
        </Fade>
      </div>
      <Zoom>
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
      </Zoom>
      <Zoom>
        <div className={styles.learn}>
          <h1>Estou estudando</h1>
          <div className={styles.badges}>
            {CardsStudy.map((item) => (
              <AbilitiesCard
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                svg={item.svg}
              />
            ))}
          </div>
        </div>
      </Zoom>

      <Zoom>
        <div className={styles.learn}>
          <h1 className={styles.tool}>Ferramentas de trabalho</h1>
          <div className={styles.badges}>
            {CardsTools.map((item) => (
              <ToolsCard
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                svg={item.svg}
              />
            ))}
          </div>
          <Link to="/contact">
            <button className={styles.button_projects}>Contate-me!</button>
          </Link>
        </div>
      </Zoom>
    </div>
  );
};

export default AboutPage;
