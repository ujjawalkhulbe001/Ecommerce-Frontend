import { useState } from "react";
import AppContext from "./AppContext";

const AppContextProvider = ({ children }) => {
  const [search, setSearch] = useState(false);
  const [searchProducts, setSearchProducts] = useState([]);
  return (
    <AppContext.Provider
      value={{ search, setSearch, searchProducts, setSearchProducts }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
