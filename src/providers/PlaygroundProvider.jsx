import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 } from "uuid";

export const playgroundContext = createContext();

const intialData = [
  {
    id: v4(),
    title: "DSA",
    files: [
      {
        id: v4(),
        title: "index",
        code: 'cout<<"Hello World";',
        language: "cpp",
      },
    ],
  },
  {
    id: v4(),
    title: "Frontend",
    files: [
      {
        id: v4(),
        title: "test",
        code: 'console.log("Hello World");',
        language: "javascript",
      },
    ],
  },
];

const PlaygroundProvider = ({ children }) => {
  const [folders, setFolders] = useState(intialData);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(folders));
  }, []);
  return (
    <playgroundContext.Provider value={folders}>
      {children}
    </playgroundContext.Provider>
  );
};

export default PlaygroundProvider;
