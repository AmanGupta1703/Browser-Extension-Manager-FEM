import { memo } from "react";

import { useTheme } from "../../hooks/useTheme";

import { Logo, ThemeSwitch } from "../";

import styles from "./Header.module.css";

const Header = memo(function Header() {
  const { theme } = useTheme();

  if (!theme) return <header className={styles.header}>Loading...</header>;

  return (
    <header className={`${styles[theme]} ${styles.header}`}>
      <div className={styles["header-wrapper"]}>
        {/* logo */}
        <Logo />

        {/* toggle switch */}
        <ThemeSwitch />
      </div>
    </header>
  );
});

export default Header;
