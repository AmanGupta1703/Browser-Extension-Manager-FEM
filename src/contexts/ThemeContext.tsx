import { useReducer, useEffect, createContext, useMemo, ReactNode, Dispatch } from "react";

type TTheme = "light" | "dark";

type TInitialState = {
  theme: TTheme;
};

type TThemeProviderProps = {
  children: ReactNode;
};

type TReducerType = "THEME/CHANGE_THEME";

type TReducerAction = {
  type: TReducerType;
};

type TThemeContext = {
  theme: TTheme;
  dispatch: Dispatch<TReducerAction>;
};

// --------------------------------
const themeReducer = (state: TInitialState, action: TReducerAction): TInitialState => {
  switch (action.type) {
    case "THEME/CHANGE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error("Unhandled action type in themeReducer");
  }
};

const initialState: TInitialState = {
  theme: (localStorage.getItem("theme") as TTheme) || "dark",
};

export const ThemeContext = createContext<TThemeContext | undefined>(undefined);

const ThemeProvider = ({ children }: TThemeProviderProps) => {
  const [{ theme }, dispatch] = useReducer(themeReducer, initialState);

  const value = useMemo(() => ({ theme, dispatch }), [theme, dispatch]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
