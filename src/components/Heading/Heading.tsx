import { memo, ReactNode } from "react";

import { useTheme } from "../../hooks/useTheme";

import styles from "./Heading.module.css";

type THeadingClassnames = "primary-heading";

type THeadingProps = {
  children: ReactNode;
  className?: THeadingClassnames;
};

const Heading = memo(function Heading({ children, className = "primary-heading" }: THeadingProps) {
  const { theme } = useTheme();

  if (className === "primary-heading")
    return <h1 className={`${styles[className]} ${styles[theme]}`}>{children}</h1>;

  return null;
});

export default Heading;
