import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import PlaygroundScreen from "./screens/PlaygroundScreen/PlaygroundScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/playground" element={<PlaygroundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
