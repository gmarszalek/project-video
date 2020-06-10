import React, { useState } from "react";

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
  return (
    <div>
      <h2>Add Video Form {videoUrl}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Video URL:
          <input type="text" name="videoUrl" onChange={(e) => setVideoUrl(e.target.value)} />
        </label>
        <br />
        <input type="submit" value="Add video" />
      </form>
    </div>
  );
}

export default VideoCreateForm;
