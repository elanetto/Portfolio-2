import { useContext } from "react";
import ScrollContext from "./ScrollContext";

export function useScrollTarget() {
  return useContext(ScrollContext);
}
