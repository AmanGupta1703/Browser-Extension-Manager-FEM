import { memo } from "react";

import { useTheme } from "../../hooks/useTheme";

import styles from "./ThemeSwitch.module.css";

const ThemeSwitch = memo(function ThemeSwitch() {
  const { theme, dispatch } = useTheme();

  const themeIcon = theme === "dark" ? "icon-sun.svg" : "icon-moon.svg";

  function handleToggleTheme() {
    dispatch({ type: "THEME/CHANGE_THEME" });
  }

  return (
    <div
      className={`${styles.themeContainer} ${styles[theme]}`}
      onClick={handleToggleTheme}
      role="button">
      <img className={styles.themeIcon} src={`/assets/images/${themeIcon}`} />
    </div>
  );
});

export default ThemeSwitch;
