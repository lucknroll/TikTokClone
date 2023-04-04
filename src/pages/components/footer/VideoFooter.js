import React, { useState } from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

function VideoFooter({name, description, music}) {
  const [muted, setMuted] = useState(false);

  function toggleMute() {
    const mediaElements = document.querySelectorAll("video, audio");
    mediaElements.forEach(function(mediaElement) {
      mediaElement.muted = !mediaElement.muted;
    });
  }

  function handleMute() {
    toggleMute();
    setMuted(!muted);
  }

  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="videoFooter__music">
          <div className="musicNote__icon" onClick={handleMute}>
            {muted ? (
              <VolumeOffIcon fontSize="large" />
            ) : (
              <MusicNoteIcon className="videoFooter__icon" fontSize="large" />
            )}
          </div>

          <div className="videoFooterMusic__text">
            <p>{music}</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter__record"
        alt="Imagem de um disco de vinil girando"
        src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/vinil.png?alt=media&token=d174bbec-b930-41e4-ab50-af1ea81bb7da"
      />
    </div>
  );
}

export default VideoFooter;
