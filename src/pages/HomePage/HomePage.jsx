import styles from "./HomePage.module.css";

import Typing from "react-typing-animation";
import { Fade, Zoom } from "react-reveal";
import Tilt from "react-tilt";

import { BsArrowRight } from "react-icons/bs";
import { DiReact, DiHtml5, DiCss3 } from "react-icons/di";

import PopupDownload from "../../components/PopupDownload/PopupDownload";
import AbilitiesCard from "../../components/AbilitiesCard/AabilitiesCard";

import davi from "../../assets/img/davi.png";
import bemvindo from "../../assets/img/bemvindo.png";
import marvelflix from "../../assets/img/marvelflix.png";
import piececord from "../../assets/img/piececord.png";
import pokenext from "../../assets/img/pokenext.png";

const cards = [
  {
    id: 1,
    title: "HTML",
    subtitle:
      "Essa tecnologia foi uma das primeiras que comecei a estudar, a linguagem de marcação HTML5, participei de vários cursos sobre. E com ela construi vários sites juntamente com CSS e JavaScript.",
    svg: DiHtml5,
  },
  {
    id: 2,
    title: "CSS",
    subtitle:
      "Aprendendo o HTML seria mais do que minha obrigação aprender o CSS, levando isso em consideração, estudei em conjunto, para entender melhor a comunicação entre ele e o HTML.",
    svg: DiCss3,
  },
  {
    id: 3,
    title: "ReactJS",
    subtitle:
      "Logo após entender entender HTML, CSS e JavaScript, decidi tomar a iniciativa de aprender uma biblioteca, e o que melhor combina essas três tecnologias é o ReactJS, inclusive (spoiler) este portfólio está sendo desenvolvido com o mesmo.",
    svg: DiReact,
  },
];

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Fade top duration={750}>
        <div className={styles.bem_vindo}>
          <img src={bemvindo} alt="bem-vindo" />
        </div>
      </Fade>
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
              Meu nome é Davi Mateus, tenho 19 anos, curso Ciência da Computação
              na Universidade Católica de Pernambuco (UNICAP). Desde pequeno,
              sempre gostei muito de coisas que eram voltadas a tecnologia e
              jogos, mas infelizmente só vim conhecer o mundo da programação no
              final do 3° ano do ensino médio. Quando comecei o curso, estudei
              as áreas e me apaixonei pela área de front-end, hoje sou
              desenvolvedor e continuo sempre estudando para descobrir novas
              coisas e aprimorar as minhas habilidades!
            </p>
            <button className={styles.button_card}>
              Mais sobre mim <BsArrowRight />
            </button>
          </div>
        </div>
      </Fade>
      <Zoom>
        <div className={styles.abilities}>
          <h1>Minhas habilidades</h1>
          <div className={styles.badges}>
            {cards.map((item) => (
              <AbilitiesCard
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                svg={item.svg}
              />
            ))}
          </div>
        </div>
        <button className={styles.abilities_button}>
          Ver mais skills <BsArrowRight />
        </button>
      </Zoom>
      <div className={styles.projects}>
        <h1>Alguns dos meus projetos</h1>
        <div className={styles.projects_image}>
          <a
            href="https://github.com/davimateus1/Pokenext"
            target="_blank"
            rel="noreferrer"
          >
            <Tilt
              className="Tilt"
              options={{ max: 8, speed: 700, scale: 1.03 }}
            >
              <Zoom>
                <img alt="pokenext" src={pokenext} />
              </Zoom>
            </Tilt>
          </a>
          <a
            href="https://github.com/davimateus1/Piececord"
            target="_blank"
            rel="noreferrer"
          >
            <Tilt
              className="Tilt"
              options={{ max: 8, speed: 700, scale: 1.03 }}
            >
              <Zoom>
                <img alt="piececord" src={piececord} />
              </Zoom>
            </Tilt>
          </a>
          <a
            href="https://github.com/davimateus1/Marvelflix"
            target="_blank"
            rel="noreferrer"
          >
            <Tilt
              className="Tilt"
              options={{ max: 8, speed: 700, scale: 1.03 }}
            >
              <Zoom>
                <img alt="marvelflix" src={marvelflix} />
              </Zoom>
            </Tilt>
          </a>
        </div>
      </div>
      <Zoom>
        <button className={styles.projects_button}>
          Ver mais projetos <BsArrowRight />
        </button>
      </Zoom>
    </div>
  );
};

export default HomePage;
