import ScrollTop from "react-scrolltop-button";
import { BsArrowBarUp } from "react-icons/bs";

import styles from "./ScrollToTop.module.css";

const ScrollToTop = () => {
  return (
    <ScrollTop
      text={<BsArrowBarUp />}
      distance={100}
      breakpoint={768}
      className={styles.scroll}
      speed={1000}
      target={75}
      icon={<BsArrowBarUp />}
    />
  );
};

export default ScrollToTop;
