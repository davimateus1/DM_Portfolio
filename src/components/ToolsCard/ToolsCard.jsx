import styles from "./ToolsCard.module.css";
import Tilt from "react-tilt";

const ToolsCard = (props) => {
  return (
    <Tilt options={{ max: 8, speed: 700, scale: 1.03 }}>
      <div className={styles.card}>
          <props.svg />
        <h2>
          {props.title}
        </h2>
        <p>{props.subtitle}</p>
      </div>
    </Tilt>
  );
};

export default ToolsCard;
