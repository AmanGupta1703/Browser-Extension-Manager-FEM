import { ReactNode } from "react";

import styles from "./SectionWrapper.module.css";

type TSectionWrapperClassnames = "filterbar" | "extensionslist";

type TSectionWrapperProps = {
  children: ReactNode;
  className: TSectionWrapperClassnames;
};

const SectionWrapper = ({ children, className }: TSectionWrapperProps) => {
  return <div className={`${styles["section-wrapper"]} ${styles[className]}`}>{children}</div>;
};

export default SectionWrapper;
