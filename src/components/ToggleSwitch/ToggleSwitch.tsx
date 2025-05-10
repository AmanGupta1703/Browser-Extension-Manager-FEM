import { useState } from "react";

import styles from "./ToggleSwitch.module.css";

type TToggleSwitchProps = {
  active: boolean;
  onClick: () => void;
};

const ToggleSwitch = ({ active, onClick }: TToggleSwitchProps) => {
  const [isActive, setIsActive] = useState(active);

  const handleToggleActive = () => {
    setIsActive((prevIsActive) => !prevIsActive);
    onClick();
  };

  return (
    <div
      role="button"
      className={`${styles["switch-box"]} ${isActive ? styles.active : ""}`}
      onClick={handleToggleActive}>
      <span className={styles.switch}></span>
    </div>
  );
};

export default ToggleSwitch;
