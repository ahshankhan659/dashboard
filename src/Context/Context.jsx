import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [table, setTable] = useState([]);
  const [ship, setShip] = useState(0);


  return (
    <MyContext.Provider
      value={{
        table,
        setTable,
        ship,
        setShip,
  

      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
