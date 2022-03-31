import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdOutlineHomeWork } from "react-icons/md";

const TimeLine = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#336B53", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #336B53" }}
        date="Set de 2021 - Nov de 2021"
        icon={<MdOutlineHomeWork />}
        iconStyle={{ background: "#336B53", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Desenvolvedor Web</h3>
        <h4 className="vertical-timeline-element-title">
          Aprendiz, Elev* Health Technology - Florianópolis, SC
        </h4>
        <p>
          Atuei no auxilio de desenvolvimento web da empresa, utilizando
          tecnologias como HTML, CSS, JavaScript e Axios para a refatoração de
          um site web e ReactJS para criação de funcionalidades no aplicativo da
          empresa. Isso aconteceu durante um período de dois meses.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#81358D", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #81358D" }}
        date="Dez de 2021 - Mar de 2022"
        icon={<MdOutlineHomeWork />}
        iconStyle={{ background: "#81358D", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Desenvolvedor Front-end
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Estágio, BZU Tech - Recife, PE
        </h4>
        <p>
          Auxilio no desenvolvimento de uma plataforma para a empresa utilizando
          HTML, CSS e JavaScript; Criação de uma plataforma PWA com ReactJS
          usando gráficos ChartJS, consumindo diversas APIs para um melhor
          gerenciamento do sistema e criar Dashboards dinâmicos.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#2B0723", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #2B0723" }}
        date="Mar de 2022 - O momento"
        icon={<MdOutlineHomeWork />}
        iconStyle={{ background: "#2B0723", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Engenheiro de Frontend 
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Junior, Loomi, Recife - PE
        </h4>
        <p>
          Atuo no denenvolvimento do front-end de aplicações web utilizando
          ReactJS e diversas ferramentas, bibliotecas e tecnologias atuais.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default TimeLine;
