import { useState, useEffect } from 'react';

export const useTrackDuration = (url: string) => {
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!url) return;

    const audio = new Audio();
    
    const setAudioData = () => {
      setDuration(audio.duration);
    };

    const setAudioError = () => {
      console.error('Ошибка загрузки трека:', url);
      setDuration(0);
    };

    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('error', setAudioError);
    
    audio.src = url;

    return () => {
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('error', setAudioError);
    };
  }, [url]);

  return duration;
};