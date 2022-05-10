import { createContext } from "react";

export const WrapperContext = createContext({
  name: "",
  setName: () => null,
});
