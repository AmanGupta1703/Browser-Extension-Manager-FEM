import { memo, ReactNode } from "react";

import { useTheme } from "../../hooks/useTheme";

import styles from "./Button.module.css";

type TButtonType = "primary" | "secondary";

type TButtonProps = {
  type?: TButtonType;
  isActive?: boolean;

  onClick: () => void;
  children: ReactNode;
};

const Button = memo(function Button({
  type = "primary",
  onClick,
  isActive,
  children,
}: TButtonProps) {
  const { theme } = useTheme();

  if (!theme) return null;

  return (
    <button
      className={`
        ${styles.btn} ${styles[`btn-${theme}`]} ${styles[`btn-${type}`]}
        ${isActive ? `${styles["active"]}` : ``}
      `}
      onClick={onClick}>
      {children}
    </button>
  );
});

export default Button;
