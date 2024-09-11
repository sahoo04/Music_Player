import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const songs = [
  { title: 'Jaana ve', src: '/Jaana-Ve.mp3' },
  { title: 'Malang-Unleash', src: '/Malang-Unleash.mp3' },
  { title: 'Ishq wala', src: '/Ishq-Wala.mp3' },
];

const imageUrls = [
  '/Designer.jpeg',    // Local path
  '/Designer (1).jpeg',   // Local path
  '/Designer (2).jpeg',   // Local path
  '/Designer (3).jpeg',
  '/Designer (4).jpeg',
];

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [currentSongIndex, isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex(
      currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1
    );
    setIsPlaying(true);
  };

  return (
    <>
      <div className="romantic-background"></div>
      <div className="twinkling-stars"></div>
      <div className="glowing-orbs"></div>

      <div className="container">
        <div className="image-showcase">
          <img src={imageUrls[currentImageIndex]} alt="Showcase" />
        </div>
        <div className={`music-player ${isPlaying ? 'playing' : ''}`}>
          <h2>{songs[currentSongIndex].title}</h2>
          <audio
            ref={audioRef}
            src={songs[currentSongIndex].src}
            onEnded={nextSong}
          ></audio>
          <div className="controls">
            <button onClick={prevSong}>⏮️</button>
            <button onClick={togglePlay}>
              {isPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
            <button onClick={nextSong}>⏭️</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
