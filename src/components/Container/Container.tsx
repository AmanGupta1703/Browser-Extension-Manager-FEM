import { ReactNode } from "react";

import styles from "./Container.module.css";

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
