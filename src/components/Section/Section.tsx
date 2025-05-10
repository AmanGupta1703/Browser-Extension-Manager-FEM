import { ReactNode } from "react";

import styles from "./Section.module.css";

type TSectionClassnames = "browser-extensions";

type TSectionProps = {
  className: TSectionClassnames;
  children: ReactNode;
};

const Section = ({ children, className }: TSectionProps) => {
  return (
    <section className={`${styles.section} ${styles[`section-${className}`]}`}>{children}</section>
  );
};

export default Section;
