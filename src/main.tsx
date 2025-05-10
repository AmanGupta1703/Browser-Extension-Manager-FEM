import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ThemeProvider from "./contexts/ThemeContext.tsx";

import "./index.css";
import App from "./App.tsx";
import ExtensionContextProvider from "./contexts/ExtensionContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ExtensionContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ExtensionContextProvider>
  </StrictMode>,
);
