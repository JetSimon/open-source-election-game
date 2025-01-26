import { useEffect, useRef, useState } from "react";
import { SongModel } from "../../engine/models/SongModel";
import "./MusicPlayer.css";

interface MusicPlayerProps {
  songs: SongModel[];
}

function MusicPlayer(props: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const scrubberRef = useRef<HTMLInputElement>(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { songs } = props;
  const [volume, setVolume] = useState(1);
  const [scrub, setScrub] = useState(0);

  useEffect(() => {
    setScrub(0);
    setCurrentSongIndex(0);
  }, [songs]);

  useEffect(() => {
    if (audioRef == null || audioRef.current == null) {
      return;
    }
  }, [scrub]);

  useEffect(() => {
    if (audioRef == null || audioRef.current == null) {
      return;
    }

    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (audioRef == null || audioRef.current == null) {
      return;
    }

    if (isPaused) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  }, [isPaused, audioRef]);

  if (songs.length == 0) {
    return <></>;
  }

  const currentSong = songs[currentSongIndex];

  if (currentSong == null || currentSong.url == null) {
    return <p>Current song or song url is null</p>;
  }

  function changeSongIndex(delta: number) {
    if (currentSongIndex == 0 && delta < 0) {
      setCurrentSongIndex(songs.length - 1);
      return;
    }

    setCurrentSongIndex((currentSongIndex + delta) % songs.length);
  }

  function onEnded() {
    changeSongIndex(+1);
  }

  function scrubTo(t: number) {
    if (audioRef == null || audioRef.current == null) {
      return;
    }

    setScrub(t);
    audioRef.current.currentTime = audioRef.current.duration * t;
  }

  function onTimeUpdated() {
    if (audioRef == null || audioRef.current == null) {
      return;
    }

    if (document.activeElement == scrubberRef.current) {
      return;
    }

    setScrub(audioRef.current.currentTime / audioRef.current.duration);
  }

  return (
    <div className="MusicPlayer">
      <audio
        key={currentSong.url}
        onTimeUpdate={onTimeUpdated}
        onEnded={onEnded}
        loop={songs.length < 2}
        autoPlay={!isPaused}
        ref={audioRef}
        preload="auto"
        src={currentSong.url}
      ></audio>
      <img className="MusicPlayerImage" src={currentSong.imageUrl}></img>
      <div className="MusicVolumeSliderHolder">
        <input
          step="0.05"
          value={volume}
          onChange={(e) =>
            setVolume(
              isNaN(Number(e.target.value)) ? 1 : Number(e.target.value)
            )
          }
          min="0"
          max="1"
          className="MusicVolumeSlider"
          type="range"
        ></input>
        🔊
      </div>

      <div className="MusicPlayerMenu">
        {currentSong.displayName}
        <div className="MusicPlayerButtons">
          <button
            disabled={songs.length < 2}
            onClick={() => changeSongIndex(-1)}
          >
            ⏮
          </button>
          <button onClick={() => setIsPaused(!isPaused)}>
            {isPaused ? "⏵" : "⏸"}
          </button>
          <button
            disabled={songs.length < 2}
            onClick={() => changeSongIndex(+1)}
          >
            ⏭
          </button>
        </div>
        <input
          step="0.01"
          ref={scrubberRef}
          value={isNaN(scrub) ? 0 : scrub}
          onChange={(e) => scrubTo(Number(e.target.value))}
          className="MusicPlayerScrubber"
          type="range"
          min="0"
          max="1"
        ></input>
      </div>
    </div>
  );
}

export default MusicPlayer;
