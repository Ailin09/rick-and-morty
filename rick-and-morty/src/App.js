import React from "react";
import Characters from "./pages/Characters";
import { Routes, Route, HashRouter } from "react-router-dom";
import CharacterDetail from "./pages/CharacterDetail";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
