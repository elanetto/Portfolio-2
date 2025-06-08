import { useState } from "react";
import ScrollContext from "./ScrollContext";

export function ScrollProvider({ children }) {
  const [scrollTarget, setScrollTarget] = useState(null);

  return (
    <ScrollContext.Provider value={{ scrollTarget, setScrollTarget }}>
      {children}
    </ScrollContext.Provider>
  );
}
