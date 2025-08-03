import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import './YouTubePlayer.css';

const YouTubePlayer = ({ videoId, autoplay = false }) => {
  const [opts, setOpts] = useState({
    height: '400',
    width: '650',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: autoplay ? 1 : 0,
      mute: autoplay ? 1 : 0, // Mute for reliable autoplay
    },
  });
  const [isApiReady, setIsApiReady] = useState(false);

  // Load YouTube IFrame API
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        setIsApiReady(true);
      };
    } else {
      setIsApiReady(true);
    }

    return () => {
      // Cleanup to avoid memory leaks
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  // Handle responsive dimensions
  useEffect(() => {
    const updateDimensions = () => {
      const isMobile = window.innerWidth <= 600; // Adjust breakpoint as needed
      setOpts({
        height: isMobile ? '200' : '400', // Smaller height for mobile
        width: isMobile ? '100%' : '650', // 100% for mobile, fixed 650px for laptop
        playerVars: {
          autoplay: autoplay ? 1 : 0,
          mute: autoplay ? 1 : 0, // Mute for reliable autoplay
        },
      });
    };

    updateDimensions(); // Set initial dimensions
    window.addEventListener('resize', updateDimensions); // Update on resize

    return () => window.removeEventListener('resize', updateDimensions); // Cleanup
  }, [autoplay]);

  const onReady = (event) => {
    // Access to player in all event handlers via event.target
    if (!autoplay) {
      event.target.pauseVideo(); // Pause on load unless autoplay is true
    }
  };

  // Validate videoId and API readiness
  if (!videoId || typeof videoId !== 'string' || videoId.length !== 11 || !isApiReady) {
    return (
      <div className="youtube-player-container youtube-player-error">
        <p>{!isApiReady ? 'Loading YouTube player...' : 'Invalid or missing YouTube video ID'}</p>
      </div>
    );
  }

  return (
    <div className="youtube-player-container">
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />
    </div>
  );
};

export default YouTubePlayer;