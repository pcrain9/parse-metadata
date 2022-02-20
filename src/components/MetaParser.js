import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function MetaParser(props) {
  const [userInput, setUserInput] = useState("");
  const parser = new DOMParser();

  function handlePaste(event) {
    setUserInput(event.clipboardData.getData("Text"));
  }

  function handleSubmit(event) {
    event.preventDefault();

    //extract all meta tags from pasted document
    const metaTags = parser
      .parseFromString(event.target[0].value, "text/html")
      .getElementsByTagName("meta");

    const linkTags = parser
      .parseFromString(event.target[0].value, "text/html")
      .getElementsByTagName("link");

    if (metaTags.length === 0 && linkTags.length === 0) {
      //error handler
      return;
    }

    let arr = [];
    for (let i = 0; i < metaTags.length; i++) {
      let tmp = { name: "", tagType:"meta", content: "" };
      for (let j = 0; j < metaTags[i].attributes.length; j++) {
        const currentTag = metaTags[i].attributes[j];
        if (currentTag.name === "property") {
          tmp.name = currentTag.nodeValue;
        }
        if (currentTag.name === "name") {
          tmp.name = currentTag.nodeValue;
        }
        if (currentTag.name === "content") {
          tmp.content = currentTag.nodeValue;
        }
      }
      if (tmp.content === "") {
        tmp.content = metaTags[i].nextSibling.data
      }
      arr.push(tmp);
    }
    

    //if the html has no link tags, pass data up to app
    if (linkTags.length === 0) {
      props.onSaveParsedData(arr);
      return;
    }

    //if there are link tags, parse them
    for (let i = 0; i < linkTags.length; i++) {
      let tmp = { name: "", tagType:"link", content: "" };
      tmp.name = linkTags[i].attributes.rel.textContent;
      tmp.content = linkTags[i].attributes.href.textContent;
      arr.push(tmp);
    }
    props.onSaveParsedData(arr)
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
      </Grid>{" "}
    </Grid>
  );
}

export default MetaParser;
