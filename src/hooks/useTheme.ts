import { useContext } from "react";

import { ThemeContext } from "../contexts/ThemeContext";

export const useTheme = () => {
  const contexts = useContext(ThemeContext);

  if (!contexts) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return contexts;
};
