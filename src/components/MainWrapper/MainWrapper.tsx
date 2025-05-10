import { ReactNode } from "react";

import { useTheme } from "../../hooks/useTheme";

import styles from "./MainWrapper.module.css";

type TMainWrapperProps = {
  children: ReactNode;
};

const MainWrapper = ({ children }: TMainWrapperProps) => {
  const { theme } = useTheme();

  if (!theme) return <div className={styles["main-wrapper"]}>Loading...</div>;

  return <div className={`${styles["main-wrapper"]} ${styles[theme]}`}>{children}</div>;
};

export default MainWrapper;
