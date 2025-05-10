import { memo } from "react";

import { useExtension } from "../../hooks/useExtension";

import styles from "./FilterButtons.module.css";

import { Button } from "../";

import { TFilterBy } from "../../contexts/ExtensionContext";

const buttonsList = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

const FilterButtons = memo(function FilterButtons() {
  const { state, dispatch } = useExtension();

  const handleFilterExtensionList = (filterBy: TFilterBy) => {
    dispatch({ type: "EXTENSION/FILTER", payload: filterBy });
  };

  return (
    <div className={styles["filter-buttons"]}>
      {buttonsList.map(({ label, value }) => (
        <Button
          isActive={value.toLowerCase() === state.filterBy.toLowerCase()}
          key={label}
          onClick={() => handleFilterExtensionList(value as TFilterBy)}>
          {label}
        </Button>
      ))}
    </div>
  );
});

export default FilterButtons;
