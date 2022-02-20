import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
//import Typography from "@mui/material/Typography";

import MetaParser from "./components/MetaParser";
import DataTable from "./components/DataTable";

function App() {
  const [metaData, setMetaData] = useState([]);
  const navigate = useNavigate();

  function handleSaveParsedData(data) {
    setMetaData(data);
    navigate("/display-results");
  }

  return (
    <div style={{ width:"100%" }}><Typography variant="h3" textAlign="center">Metadata Parser!</Typography>
    <Routes>
      <Route path="/" element={<MetaParser onSaveParsedData={handleSaveParsedData} />} />
      <Route path="/display-results" element={<DataTable data={metaData} />} />
    </Routes>
    </div>
  );
}

export default App;
