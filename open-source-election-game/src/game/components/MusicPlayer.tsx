import { useState, useRef, useEffect } from "react";
import SongModel from "../../engine/models/SongModel";
import "./MusicPlayer.css";

interface MusicPlayerProps {
    songs : SongModel[];
}

function MusicPlayer(props : MusicPlayerProps) {

    const audioRef = useRef<HTMLAudioElement>(null);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const { songs } = props;

    useEffect(() => {
        if(audioRef == null || audioRef.current == null) {
            return;
        }

        if(isPaused) {
            audioRef.current.pause();
        }
        else {
            audioRef.current.play();
        }
        
    }, [isPaused, audioRef])

    if(songs.length == 0) {
        return <></>
    }
    
    const currentSong = songs[currentSongIndex];

    function changeSongIndex(delta : number) {
        if(currentSongIndex == 0 && delta < 0) {
            setCurrentSongIndex(songs.length - 1);
            return;
        }

        setCurrentSongIndex((currentSongIndex + delta) % songs.length);
    }

    function onEnded() {
        changeSongIndex(+1);
    }

    return (
        <div className="MusicPlayer">
            <audio onEnded={onEnded} loop={songs.length < 2} autoPlay={!isPaused} ref={audioRef} preload="auto" src={currentSong.url}></audio>
            <img className="MusicPlayerImage" src={currentSong.imageUrl}>
            </img>
            <div className="MusicPlayerMenu">
                {currentSong.displayName}
                <div className="MusicPlayerButtons">
                    <button disabled={songs.length < 2} onClick={() => changeSongIndex(-1)}>⏮</button>
                    <button onClick={() => setIsPaused(!isPaused)}>{isPaused ? "⏵" : "⏸"}</button>
                    <button disabled={songs.length < 2} onClick={() => changeSongIndex(+1)}>⏭</button>
                </div>
            </div>
        </div>
    );
}

export default MusicPlayer;