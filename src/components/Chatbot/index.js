import styles from "./Chatbot.module.css";
import { BsRobot } from "react-icons/bs";

function Chatbot() {
  return (
    <div className={styles.wrapper}>
      <BsRobot />
      <div className={styles.needHelp}>What can I help you with?</div>
    </div>
  );
}

export default Chatbot;
