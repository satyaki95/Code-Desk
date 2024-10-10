import React, { createContext, useContext, useEffect, useState } from "react";
import { json } from "react-router-dom";
import { v4 } from "uuid";

export const PlaygroundContext = createContext();

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
  ["cpp"]: `#include <iostream>\nint main() {\ncout<<"helo world";\n\treturn 0;\n}`,
  ["javascript"]: `console.log("hello world);`,
  ["python"]: `print("hello world")`,
  ["java"]: `System.out.println("hello world")`,
};

const PlaygroundProvider = ({ children }) => {
  const [folders, setFolders] = useState(() => {
    const data = localStorage.getItem("data");
    if (data && typeof data === "string") {
      return JSON.parse(data);
    } else {
      return intialData;
    }
  });

  const createNewPlayground = (newPlayground) => {
    const { folderName, fileName, language } = newPlayground;
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
    });

    localStorage.setItem("data", JSON.stringify(newFolders));
    setFolders(newFolders);
  };

  const createNewFolder = (folderName) => {
    const newFolder = {
      id: v4(),
      title: folderName,
      files: [],
    };

    const allFolders = [...folders, newFolder];

    localStorage.setItem("data", JSON.stringify(allFolders));
    setFolders(allFolders);
  };

  const deleteFolder = (id) => {
    const updatedFolderList = folders.filter((folderItem) => {
      return folderItem.id !== id;
    });

    localStorage.setItem("data", JSON.stringify(updatedFolderList));
    setFolders(updatedFolderList);
  };

  const editFolderTitle = (newFoldername, id) => {
    const updatedFolderList = folders.map((folderItem) => {
      if (folderItem.id === id) {
        folderItem.title = newFoldername;
      }
      return folderItem;
    });
    localStorage.setItem("data", json.stringify(updatedFolderList));
    setFolders(updatedFolderList);
  };

  useEffect(() => {
    if (!localStorage.getItem("data")) {
      localStorage.setItem("data", JSON.stringify(intialData));
    }
  }, []);

  const playgroundFeatures = {
    folders,
    createNewPlayground,
    createNewFolder,
    deleteFolder,
    editFolderTitle,
    payload
  };

  return (
    <PlaygroundContext.Provider value={playgroundFeatures}>
      {children}
    </PlaygroundContext.Provider>
  );
};

export default PlaygroundProvider;
