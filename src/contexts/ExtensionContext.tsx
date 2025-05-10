import { createContext, useReducer, Dispatch, useMemo, ReactNode } from "react";

import data from "../data/data.json";

// TYPES
export type TExtensionData = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

export type TFilterBy = "all" | "active" | "inactive";

type TInitialState = {
  extensions: TExtensionData[] | [];
  filterBy: TFilterBy;
};

type TReducerState = TInitialState;
type TReducerActionType =
  | "EXTENSION/FILTER"
  | "EXTENSION/CHANGE_ACTIVE_STATUS"
  | "EXTENSION/REMOVE_EXTENSION";

type TReducerAction = {
  type: TReducerActionType;
  payload: string | TExtensionData[] | TFilterBy;
};

type TExtensionContext = {
  state: TInitialState;
  dispatch: Dispatch<TReducerAction>;
};

// ---
const extensionsList = data as TExtensionData[];

const initialState: TInitialState = {
  extensions: extensionsList,
  filterBy: "all",
};

const ExtensionContext = createContext<TExtensionContext | undefined>(undefined);

const extensionReducer = (state: TReducerState, action: TReducerAction): TInitialState => {
  switch (action.type) {
    case "EXTENSION/FILTER":
      return { ...state, filterBy: action.payload as TFilterBy };

    case "EXTENSION/CHANGE_ACTIVE_STATUS":
      return {
        ...state,
        extensions: state.extensions.map((extension) =>
          extension.name === action.payload
            ? { ...extension, isActive: !extension.isActive }
            : extension,
        ),
      };

    case "EXTENSION/REMOVE_EXTENSION":
      return {
        ...state,
        extensions: state.extensions.filter((extension) => extension.name !== action.payload),
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const ExtensionContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(extensionReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <ExtensionContext.Provider value={value}>{children}</ExtensionContext.Provider>;
};

export { ExtensionContext };
export default ExtensionContextProvider;
