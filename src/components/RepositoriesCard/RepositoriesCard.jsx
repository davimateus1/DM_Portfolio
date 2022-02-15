import styles from "./RepositoriesCard.module.css";
import Tilt from "react-tilt";
import { GiStarsStack } from "react-icons/gi";

const RepositoriesCard = (props) => {
  return (
    <Tilt className="Tilt" options={{ max: 8, speed: 700, scale: 1.03 }}>
      <div className={styles.card}>
        <a href={props.url} target="_blank" rel="noreferrer">
          <h2>{props.name}</h2>
        </a>
        <p>{props.description}</p>
        <p>
          <GiStarsStack /> Stars: {props.star}
        </p>
        <h3 className={styles.status}>Visibility: {props.visibility}</h3>
      </div>
    </Tilt>
  );
};

export default RepositoriesCard;
