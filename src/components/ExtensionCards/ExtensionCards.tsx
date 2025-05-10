import { useMemo, memo } from "react";

import { useTheme } from "../../hooks/useTheme";
import { useExtension } from "../../hooks/useExtension";

import { Button, ToggleSwitch } from "../";

import styles from "./ExtensionCards.module.css";

import { TExtensionData } from "../../contexts/ExtensionContext";

type TExtensionCardProps = TExtensionData;

const ExtensionCard = memo(({ logo, name, description, isActive }: TExtensionCardProps) => {
  const { theme } = useTheme();
  const { dispatch } = useExtension();

  let timeoutId: null | number = null;
  const handleActiveStat = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      dispatch({ type: "EXTENSION/CHANGE_ACTIVE_STATUS", payload: name });
    }, 1000);
  };

  const handleRemoveExtension = () => {
    dispatch({ type: "EXTENSION/REMOVE_EXTENSION", payload: name });
  };

  return (
    <div className={`${styles["extension-card"]} ${styles[theme]}`}>
      <div className={`${styles["extension-card-header"]}`}>
        <div className={`${styles["logo-box"]}`}>
          <img src={logo} alt={name} />
        </div>
        <div className={`${styles["extension-card-header-text"]}`}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className={`${styles["extension-card-footer"]}`}>
        <Button onClick={handleRemoveExtension} type="secondary">
          Remove
        </Button>

        <ToggleSwitch active={isActive} onClick={handleActiveStat} />
      </div>
    </div>
  );
});

const ExtensionCards = () => {
  const { state } = useExtension();

  const filterBy = state.filterBy;

  const extensions = useMemo(() => {
    return filterBy === "active"
      ? state.extensions.filter((extension) => extension.isActive)
      : filterBy === "inactive"
      ? state.extensions.filter((extension) => !extension.isActive)
      : state.extensions;
  }, [filterBy, state.extensions]);

  if (!extensions.length) {
    <p>No extensions available to display.</p>;
  }

  return (
    <>
      {extensions.map((extension) => (
        <ExtensionCard {...extension} key={extension.name} />
      ))}
    </>
  );
};

export default ExtensionCards;
