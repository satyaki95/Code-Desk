import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import PlaygroundScreen from "./screens/PlaygroundScreen/PlaygroundScreen";
import PlaygroundProvider from "./providers/PlaygroundProvider";
import {ModalProvider} from "./providers/ModalProvider";

function App() {
  return (
    <PlaygroundProvider>
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/playground" element={<PlaygroundScreen />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </PlaygroundProvider>
  );
}

export default App;
