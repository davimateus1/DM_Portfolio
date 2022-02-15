import axios from "axios";
import { useEffect, useState } from "react";
import RepositoriesCard from "../../components/RepositoriesCard/RepositoriesCard";
import styles from "./ProjectsPage.module.css";

import { CgDanger } from "react-icons/cg";
import { Fade, Zoom } from "react-reveal";

const ProjectsPage = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    document.title = "Davi: Projetos";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/davimateus1/repos")
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setRepos]);

  return (
    <div className={styles.container}>
      <Zoom>
        <h1>Projetos que desenvolvi até o momento</h1>
        <p className={styles.subtitle}>
          Todos esses projetos estão disponiveis no meu Github
        </p>
        <p className={styles.obs}>
          <CgDanger /> Para ver no Github, clique no titulo de cada card
        </p>
      </Zoom>
      <Fade bottom>
        <div className={styles.badges}>
          {repos.map((item) => (
            <RepositoriesCard
              key={item.id}
              name={item.name}
              description={item.description}
              star={item.stargazers_count}
              url={item.html_url}
              visibility={item.visibility}
            />
          ))}
        </div>
      </Fade>
      <Zoom>
        <a
          href="https://github.com/davimateus1"
          target="_blank"
          rel="noreferrer"
        >
          <button className={styles.github}>Ver mais no Github</button>
        </a>
      </Zoom>
    </div>
  );
};

export default ProjectsPage;
