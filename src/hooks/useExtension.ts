import { useContext } from "react";

import { ExtensionContext } from "../contexts/ExtensionContext";

export const useExtension = () => {
  const context = useContext(ExtensionContext);

  if (!context) {
    throw new Error("useExtension must be used within an ExtensionProvider");
  }

  return context;
};
