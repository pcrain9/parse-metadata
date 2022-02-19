import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function MetaParser() {
  const [userInput, setUserInput] = useState("");
  const parser = new DOMParser();

  function handlePaste(event) {
    setUserInput(event.clipboardData.getData("Text"));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const result = parser
    .parseFromString(event.target[0].value, "text/html")
    .getElementsByTagName("meta")
    
    for(let i = 0; i<result.length; i++){
      console.log(typeof result[i].outerHTML)
    }
  }
  return (
    <Grid
      container
      component="form"
      sx={{ width: "100%" }}
      justifyContent="center"
      rowSpacing={4}
      onSubmit={handleSubmit}
    >
      <Grid item xs={7}>
        <TextField
          multiline
          required
          rows={10}
          fullWidth={true}
          placeholder="paste HTML here..."
          onPaste={handlePaste}
          value={userInput}
        />
      </Grid>
      <Grid item xs={7}>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}

export default MetaParser;
