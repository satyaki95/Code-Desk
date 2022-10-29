import React from "react";
import GlobalStyle from "./Styles/Global";
import HomeScreen from "./Screens/HomeScreen";
import ModalProvider from "./ModalContext/ModalContext";
import MyPlayground from "./Screens/PlayGround/index";
import PlaygroundProvider from "./ModalContext/PlaygroundContext";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Page404 from "./Screens/Page404";


function App() {

  return (
    <PlaygroundProvider>
      <ModalProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route
              path="/code/:folderId/:playgroundId"
              element={<MyPlayground />}
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </PlaygroundProvider>
  );
}

export default App;
