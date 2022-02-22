import styles from "./HomePage.module.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Fade, Zoom } from "react-reveal";

import { BsArrowRight } from "react-icons/bs";

import AbilitiesCard from "../../components/AbilitiesCard/AabilitiesCard";
import ProjectImages from "../../components/ProjectImages/ProjectImages";
import { CardsHome } from "../../assets/utils/Data";

import davi from "../../assets/img/davi.png";
import bemvindo from "../../assets/img/bemvindo.png";

const HomePage = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = "Davi: Inicio";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <Fade bottom duration={750}>
        <div className={styles.bem_vindo}>
          <img src={bemvindo} alt="bem-vindo" />
        </div>
      </Fade>
      <Zoom>
        <div className={styles.container_height}>
          <h1>
            Sou <span>Davi Mateus</span>
          </h1>
          <h1>Desenvolvedor Front-end</h1>
          <p>
            Bem-vindo(a) ao meu portfólio, aqui você encontrará diversas
            informações sobre mim, tais como: CV, projetos, estilo de
            programação, tecnologias que utilizo e formas de contato.
          </p>
          <p>Espero que goste e sinta-se a vontade para explorar!</p>
        </div>
      </Zoom>
      <Zoom>
        <div className={styles.buttons}>
          <Link to="/projects">
            <button className={styles.button1}>Ver projetos</button>
          </Link>
          <button className={styles.button2} onClick={() => setOpen(!open)}>
            Download CV
          </button>
          {open ? (
            <>
              <Zoom>
                <a
                  href="https://drive.google.com/file/d/1h1fZ_iqO27OBQqmvxzde0lKfXjv_bp14/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className={styles.button2}>PT-BR</button>
                </a>
                <a
                  href="https://drive.google.com/file/d/1f4XxDDStFCTTJIW2FOgSQKw_THkT1sOr/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className={styles.button2}>EN</button>
                </a>
              </Zoom>
            </>
          ) : (
            ""
          )}
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
              Meu nome é Davi Mateus, tenho 19 anos, curso Ciência da Computação
              na Universidade Católica de Pernambuco (UNICAP). Desde pequeno,
              sempre gostei muito de coisas que eram voltadas a tecnologia e
              jogos, mas infelizmente só vim conhecer o mundo da programação no
              final do 3° ano do ensino médio. Quando comecei o curso, estudei
              as áreas e me apaixonei pela área de front-end, hoje sou
              desenvolvedor e continuo sempre estudando para descobrir novas
              coisas e aprimorar as minhas habilidades!
            </p>
            <Link to="/about">
              <button className={styles.button_card}>
                Mais sobre mim <BsArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </Fade>
      <Zoom>
        <div className={styles.abilities}>
          <h1>Minhas habilidades</h1>
          <div className={styles.badges}>
            {CardsHome.map((item) => (
              <AbilitiesCard
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                svg={item.svg}
              />
            ))}
          </div>
        </div>
        <Link to="/about">
          <button className={styles.abilities_button}>
            Ver mais skills <BsArrowRight />
          </button>
        </Link>
      </Zoom>
      <div className={styles.projects}>
        <h1>Alguns dos meus projetos</h1>
        <div className={styles.projects_image}>
         <ProjectImages />
        </div>
      </div>
      <Zoom>
        <Link to="/projects">
          <button className={styles.projects_button}>
            Ver mais projetos <BsArrowRight />
          </button>
        </Link>
      </Zoom>
    </div>
  );
};

export default HomePage;