import { memo } from "react";

import { useTheme } from "../../hooks/useTheme";

import styles from "./Logo.module.css";

const Logo = memo(function Logo() {
  const { theme } = useTheme();

  const logoImg = theme === "dark" ? "logo-dark.svg" : "logo-light.svg";

  return (
    <div className={styles["logo-container"]}>
      <img src={`/assets/images/${logoImg}`} />
    </div>
  );
});

export default Logo;
