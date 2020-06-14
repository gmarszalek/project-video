import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 300,
    },
  },
}));

function VideoCreateForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      title,
      description,
      videoUrl,
    };

    fetch("https://szkolareacta.pl/api/users", {
      method: "POST",
      data: JSON.stringify(data),
    });
    console.log(data);
  };
  const classes = useStyles();
  return (
    <div>
      <h2>Add Video Form {title}</h2>
      <form className={classes.root} onSubmit={handleSubmit}>
        <div>
          <TextField id="outlined-basic" label="Title" variant="outlined" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            variant="outlined"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Video URL:"
            variant="outlined"
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        </div>

        {/* <input type="submit" value="Add video" /> */}
        <div>
          <Button variant="contained" color="primary">
            Add video
          </Button>
        </div>
      </form>
    </div>
  );
}

export default VideoCreateForm;
