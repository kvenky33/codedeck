import { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
export const PlaygroundContext = createContext();

export const languageMap = {
  cpp: {
    id: 54,
    defaultCode:
      "#include <iostream>\n" +
      "using namespace std;\n\n" +
      "int main() {\n" +
      '\tcout << "Hello World!";\n' +
      "\treturn 0;\n" +
      "}",
  },
  java: {
    id: 62,
    defaultCode: `public class Main {
        public static void main(String[] args) {
            System.out.println("Hello World!");
        }
}`,
  },
  python: {
    id: 71,
    defaultCode: `print("Hello World")`,
  },
  javascript: {
    id: 63,
    defaultCode: `console.log("Hello World!")`,
  },
};

const PlaygroundProvider = ({ children }) => {
  const initialItems = {
    [uuid()]: {
      title: "DSA",
      playgrounds: {
        [uuid()]: {
          code: languageMap["cpp"].defaultCode,
          title: "Stack Impl",
          language: "cpp",
        },
        [uuid()]: {
          code: languageMap["java"].defaultCode,
          title: "Queue",
          language: "java",
        },
      },
    },
  };
  const [folders, setFolders] = useState(() => {
    let localData = localStorage.getItem("playgrounds-data");
    if (localData === null || localData === undefined) {
      return initialItems;
    }
    return JSON.parse(localData);
  });
  useEffect(() => {
    localStorage.setItem("playgrounds-data", JSON.stringify(folders));
  }, [folders]);
};
