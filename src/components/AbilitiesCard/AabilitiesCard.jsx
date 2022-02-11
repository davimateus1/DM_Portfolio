import styles from "./AbilitiesCard.module.css";
import Tilt from "react-tilt";

const AbilitiesCard = (props) => {
  return (
    <Tilt
      className="Tilt"
      options={{ max: 8, speed: 700, scale: 1.03 }}
    >
      <div className={styles.card}>
        <h2>
          <props.svg /> {props.title}
        </h2>
        <p>{props.subtitle}</p>
      </div>
    </Tilt>
  );
};

export default AbilitiesCard;
