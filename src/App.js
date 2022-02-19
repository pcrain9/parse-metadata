import React from "react";
import { Routes, Route } from "react-router-dom";
import Typography from "@mui/material/Typography";

import MetaParser from "./components/MetaParser";

function App() {
  return (
    <div style={{ width:"100%" }}><Typography variant="h3" textAlign="center">Metadata Parser!</Typography>
    <Routes>
      <Route path="/" element={<MetaParser />} />
    </Routes></div>
  );
}

export default App;
