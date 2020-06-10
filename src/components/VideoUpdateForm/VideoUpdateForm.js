import React, { useState, useEffect } from "react";

function VideoCreateForm(match) {
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch("/database.json");
    const videos = await data.json();
    setVideos(videos[match.match.params.id - 1]);
  };

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
  };
  return (
    <div>
      <h2>Add Video Form {videoUrl}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={videos.title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={videos.description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Video URL:
          <input type="text" name="videoUrl" value={videos.video_url} onChange={(e) => setVideoUrl(e.target.value)} />
        </label>
        <br />
        <input type="submit" value="Add video" />
      </form>
    </div>
  );
}

export default VideoCreateForm;
