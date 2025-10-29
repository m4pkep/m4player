'use client';

import { usePlayer } from '@/contexts/PlayerContext';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const { state, dispatch, audioRef } = usePlayer();

  // Если нет текущего трека - не показываем плеер
  if (!state.currentTrack) {
    return null;
  }

  const togglePlayback = () => {
    if (audioRef.current) {
      if (state.isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      dispatch({ type: 'TOGGLE_PLAYBACK' });
    }
  };

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4">
      <div className="flex items-center justify-between">
        
        {/* Левая часть - информация о треке */}
        <div className="flex items-center space-x-4">
          <img
            src={state.currentTrack.coverUrl}
            alt={state.currentTrack.title}
            className="w-12 h-12 rounded"
          />
          <div>
            <h3 className="font-semibold">{state.currentTrack.title}</h3>
            <p className="text-sm text-gray-400">{state.currentTrack.artist}</p>
          </div>
        </div>

        {/* Центральная часть - контролы и прогресс бар */}
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-700 rounded-full">
              <SkipBack size={20} />
            </button>
            <button
              onClick={togglePlayback}
              className="p-3 bg-white text-black rounded-full hover:bg-gray-200"
            >
              {state.isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-full">
              <SkipForward size={20} />
            </button>
          </div>

          {/* Прогресс бар с временем */}
          <div className="flex items-center space-x-2 w-96">
            <span className="text-xs text-gray-400">
              {formatTime(state.progress)}
            </span>
            <input
              type="range"
              min="0"
              max={state.duration || 100}
              value={state.progress}
              onChange={(e) => {
                const newTime = parseFloat(e.target.value);
                if (audioRef.current) {
                  audioRef.current.currentTime = newTime;
                  dispatch({ type: 'SET_PROGRESS', payload: newTime });
                }
              }}
              className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-xs text-gray-400">
              {formatTime(state.duration)}
            </span>
          </div>
        </div>

        {/* Правая часть - громкость */}
        <div className="flex items-center space-x-2">
          <Volume2 size={20} />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={state.volume}
            onChange={(e) => {
              const newVolume = parseFloat(e.target.value);
              if (audioRef.current) {
                audioRef.current.volume = newVolume;
                dispatch({ type: 'SET_VOLUME', payload: newVolume });
              }
            }}
            className="w-24 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {/* Скрытый audio элемент */}
      <audio
        ref={audioRef}
        src={state.currentTrack.url}
        preload="metadata"
      />
    </div>
  );
};