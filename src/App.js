import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import MetaParser from "./components/MetaParser";
import DataTable from "./components/DataTable";

function App() {
  const [metaData, setMetaData] = useState([]);

  function handleSaveParsedData(data) {
    setMetaData(data);
  }

  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" textAlign="center">
          Metadata Parser!
        </Typography>
        <Typography paragraph textAlign="center" sx={{ textDecoration:"italicized"}}>
          <em>Paste any metadata into the text area to the left!</em>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <MetaParser onSaveParsedData={handleSaveParsedData} />
      </Grid>
      <Grid item xs={6}>
        <DataTable data={metaData} />
      </Grid>
    </Grid>
  );
}

export default App;
