import { createContext } from "react";

export const NavigationContext = createContext({
  catagory: "",
  setCatagory: () => null,
  id: 1,
  setId: () => null,
});
