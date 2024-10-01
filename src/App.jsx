import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import PlaygroundScreen from "./screens/PlaygroundScreen/PlaygroundScreen";
import PlaygroundProvider from "./providers/PlaygroundProvider";

function App() {
  return (
    <PlaygroundProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/playground" element={<PlaygroundScreen />} />
        </Routes>
      </BrowserRouter>
    </PlaygroundProvider>
  );
}

export default App;
