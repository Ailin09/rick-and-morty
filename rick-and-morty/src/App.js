import React from "react";
import Characters from "./pages/Characters";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterDetail from "./pages/CharacterDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
