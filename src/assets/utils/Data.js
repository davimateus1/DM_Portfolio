import {
  DiCss3,
  DiHtml5,
  DiReact,
  DiJavascript,
  DiJava,
  DiGithubBadge,
} from "react-icons/di";
import {
  SiBootstrap,
  SiNextdotjs,
  SiTypescript,
  SiSass,
  SiTrello,
  SiVisualstudiocode,
} from "react-icons/si";

import marvelflix from "../../assets/img/marvelflix.png";
import piececord from "../../assets/img/piececord.png";
import pokenext from "../../assets/img/pokenext.png";

export const CardsHome = [
  {
    id: 1,
    title: "HTML",
    subtitle:
      "Essa tecnologia foi uma das primeiras que comecei a estudar, a linguagem de marcação HTML5. Participei de vários cursos sobre e com ela construi vários sites juntamente com CSS e JavaScript.",
    svg: DiHtml5,
  },
  {
    id: 2,
    title: "CSS",
    subtitle:
      "Aprendendo o HTML seria mais do que minha obrigação aprender o CSS, levando isso em consideração estudei em conjunto para entender melhor a comunicação entre ele e o HTML.",
    svg: DiCss3,
  },
  {
    id: 3,
    title: "ReactJS",
    subtitle:
      "Logo após entender entender HTML, CSS e JavaScript decidi tomar a iniciativa de aprender uma biblioteca, e o que melhor combina essas três tecnologias é o ReactJS, inclusive (spoiler) este portfólio está sendo desenvolvido com o mesmo.",
    svg: DiReact,
  },
];

export const CardsAbout = [
  {
    id: 1,
    title: "HTML",
    subtitle:
      "Essa tecnologia foi uma das primeiras que comecei a estudar, a linguagem de marcação HTML5. Participei de vários cursos sobre e com ela construi vários sites juntamente com CSS e JavaScript.",
    svg: DiHtml5,
  },
  {
    id: 2,
    title: "CSS",
    subtitle:
      "Aprendendo o HTML seria mais do que minha obrigação aprender o CSS, levando isso em consideração estudei em conjunto para entender melhor a comunicação entre ele e o HTML.",
    svg: DiCss3,
  },
  {
    id: 3,
    title: "Javascript",
    subtitle:
      "Após entender os conceitos de HTML e CSS, vi que era necessário aprender Javascript para implementar novas funcionalidades em sites que desenvolvo (validações, animações e diversos mecanismos).",
    svg: DiJavascript,
  },
  {
    id: 4,
    title: "Bootstrap",
    subtitle:
      "Conheci o Bootstrap através do curso Web Development - Frontend, após conhece-lo percebi o quão importante era ter ele em minhas Skills, pelo fato da responsividade e estilização que era muito prática e minimalista.",
    svg: SiBootstrap,
  },
  {
    id: 5,
    title: "ReactJS",
    subtitle:
      "Logo após entender entender HTML, CSS e JavaScript decidi tomar a iniciativa de aprender uma biblioteca, e o que melhor combina essas três tecnologias é o ReactJS, inclusive (spoiler) este portfólio está sendo desenvolvido com o mesmo.",
    svg: DiReact,
  },
  {
    id: 6,
    title: "Java",
    subtitle:
      "O Java foi a linguagem que eu tive meu primeiro contato e desenvolvi a lógica de programação essencial, trabalhei com ela em todos os periodos da faculdade (até o momento), assim adquiri um certo conhecimento e dominio na linguagem.",
    svg: DiJava,
  },
];

export const CardsStudy = [
  {
    id: 1,
    title: "NextJS",
    subtitle:
      "Estou estudando NextJS pelo fato da sua simplicidade em exercer algumas funções, uma das que mais me chama atenção é a facilidade em criar uma rota, que você precisa apenas criar um arquivo dentro de uma pasta pages. Fora isso, quero aprender grande parte das suas funcionalidades.",
    svg: SiNextdotjs,
  },
  {
    id: 2,
    title: "Typescript",
    subtitle:
      "Um dos principais motivos que quero aprender o Typescript é pra justamente entender como funciona as tipagens e também saber qual seria o caso ideal para utilizá-las.",
    svg: SiTypescript,
  },
  {
    id: 3,
    title: "Sass",
    subtitle:
      "Já fiz alguns projetos utilizando o mesmo, porém ainda tenho muito a aprender, conseguiria fazer com Sass em poucas linhas oque faço com o CSS padrão, fora a utilização das props, que é algo que me chama muita atenção.",
    svg: SiSass,
  },
];

export const CardsTools = [
  {
    id: 1,
    title: "Github",
    subtitle:
      "GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.",
    svg: DiGithubBadge,
  },
  {
    id: 2,
    title: "VsCode",
    subtitle:
      "O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS.",
    svg: SiVisualstudiocode,
  },
  {
    id: 3,
    title: "Trello",
    subtitle:
      "Trello é um aplicativo de gerenciamento de projeto baseado na web criado pela Fog Creek Software.",
    svg: SiTrello,
  },
];

export const Images = [
  {
    id: 1,
    href: "https://github.com/davimateus1/Pokenext",
    image: pokenext,
    alt: "pokenext",
  },
  {
    id: 2,
    href: "https://github.com/davimateus1/Piececord",
    image: piececord,
    alt: "piececord",
  },
  {
    id: 3,
    href: "https://github.com/davimateus1/Marvelflix",
    image: marvelflix,
    alt: "marvelflix",
  },
];
