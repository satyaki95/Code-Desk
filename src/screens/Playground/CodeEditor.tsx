import React, { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";


import { duotoneLight, duotoneDark } from "@uiw/codemirror-theme-duotone";
import { xcodeLight, xcodeDark } from "@uiw/codemirror-theme-xcode";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { githubDark, githubLight } from "@uiw/codemirror-theme-github";
import { darcula } from "@uiw/codemirror-theme-darcula";
import { bespin } from "@uiw/codemirror-theme-bespin";

import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";

import { indentUnit } from "@codemirror/language";
import { EditorState } from "@codemirror/state";
import styled from "styled-components";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

interface FullScreenHandle {
  active: boolean;
  enter: () => Promise<void>;
  exit: () => Promise<void>;
  node: React.MutableRefObject<HTMLDivElement | null>;
}
interface CodeEditorProps {
  currentLanguage : string;
  currentTheme : string;
  currentCode : string;
  setCurrentCode: (newCode: string) => void;
  handle : FullScreenHandle;
}
interface EditorProps{
  isActive : boolean;
}

let fullScreen = '100%';

const CodeEditorContainer = styled.div<EditorProps> `
  height: calc(100vh - 12.5rem);
  & > div {
    height: 100%;
  }
`;

const CodeEditor : React.FC<CodeEditorProps> = ({currentLanguage, currentTheme, currentCode, setCurrentCode, handle}) => {
  const [theme, setTheme] = useState<any>(duotoneDark);
  const [lang, setLang] = useState<any>(java);

  // Handle Language change Function

  useEffect(() => {
    switch(currentLanguage) {
      case 'c++':
        setLang(cpp);
        break;
      case 'python':
        setLang(python);
        break;
      case 'java':
        setLang(java);
        break;
      case 'javascipt':
        setLang(javascript);
        break;
    };
  }, [currentLanguage]);

  // handle Theme change

  useEffect(() => {
    switch(currentTheme) {
      case 'duotoneLight':
        setTheme(duotoneLight);
        break;
      case 'duotoneDark':
        setTheme(duotoneDark);
        break;
      case 'xcodeLight':
        setTheme(xcodeLight);
        break;
      case 'xcodeDark':
        setTheme(xcodeDark);
        break;
      case 'okaidia':
        setTheme(okaidia);
          break;
      case 'githubLight':
        setTheme(githubLight);
          break;
      case 'githubDark':
        setTheme(githubDark);
          break;
      case 'darcula':
          setTheme(darcula);
          break;
      case 'bespin':
          setTheme(bespin);
          break;
    };
  }, [currentTheme]);

  let isActive = handle.active;
  if(handle.active){
    fullScreen = '100vh';
  }else{
    fullScreen = '100%'
  }

  return (
    <FullScreen handle = {handle} >

    <CodeEditorContainer isActive>
      <CodeMirror
         theme={theme}
         value={currentCode}
         onChange={(value: string) => {
           setCurrentCode(value);
         }}
         height={fullScreen}
         extensions={[
           lang,
           indentUnit.of("        "),
           EditorState.tabSize.of(8),
           EditorState.changeFilter.of(() => true),
         ]}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: true,
          highlightSpecialChars: true,
          foldGutter: true,
          drawSelection: true,
          dropCursor: true,
          allowMultipleSelections: true,
          indentOnInput: true,
          syntaxHighlighting: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          rectangularSelection: true,
          crosshairCursor: true,
          highlightActiveLine: true,
          highlightSelectionMatches: true,
          closeBracketsKeymap: true,
          defaultKeymap: true,
          searchKeymap: true,
          historyKeymap: true,
          foldKeymap: true,
          completionKeymap: true,
          lintKeymap: true,
        }}
      />
    </CodeEditorContainer>
    </FullScreen>
  );
};

export default CodeEditor;