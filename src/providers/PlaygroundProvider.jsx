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

const defaultCode = {
  ['cpp']:  `#include <iostream>\nint main() {\ncout<<"helo world";\n\treturn 0;\n}`,
  ['javascript']: `console.log("hello world);`,
  ['python']: `print("hello world")`,
  ['java']:  `System.out.println("hello world")`
}

const PlaygroundProvider = ({ children }) => {
  const [folders, setFolders] = useState(intialData);

  const createNewPlayground = (newPlayground) => {
    const {folderName, fileName, language} = newPlayground;
    const newFolders = [...folders];
    newFolders.push({
      id: v4(),
      title: folderName,
      files: [
        {
          id: v4(),
          title: fileName,
          code: defaultCode[language],
          language: language,
        },
      ],
    })
    
    localStorage.setItem("data", JSON.stringify(newFolders));
    setFolders(newFolders);
    
  }

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(folders));
  }, []);

  const playgroundFeatures = {
    folders,
    createNewPlayground
  }

  return (
    <playgroundContext.Provider value={playgroundFeatures}>
      {children}
    </playgroundContext.Provider>
  );
};

export default PlaygroundProvider;
