'use client';

import React, { createContext, useContext, useReducer, useRef } from 'react';

// Временно объявим типы здесь, пока не починим импорт
interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  url: string;
  coverUrl: string;
}

interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  duration: number;
  currentPlaylist: Track[];
}

interface PlayerAction {
  type: string;
  payload?: any;
}

const initialState: PlayerState = {
  currentTrack: null,
  isPlaying: false,
  volume: 1,
  progress: 0,
  duration: 0,
  currentPlaylist: [],
};

const playerReducer = (state: PlayerState, action: PlayerAction): PlayerState => {
  switch (action.type) {
    case 'PLAY_TRACK':
      return {
        ...state,
        currentTrack: action.payload,
        isPlaying: true,
      };
    case 'TOGGLE_PLAYBACK':
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    case 'SET_VOLUME':
      return {
        ...state,
        volume: action.payload,
      };
    case 'SET_PROGRESS':
      return {
        ...state,
        progress: action.payload,
      };
    case 'SET_DURATION':
      return {
        ...state,
        duration: action.payload,
      };
    case 'SET_PLAYLIST':
      return {
        ...state,
        currentPlaylist: action.payload,
      };
    default:
      return state;
  }
};

interface PlayerContextType {
  state: PlayerState;
  dispatch: React.Dispatch<PlayerAction>;
  audioRef: React.RefObject<HTMLAudioElement>;
}

const PlayerContext = createContext<PlayerContextType | null>(null);

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(playerReducer, initialState);
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <PlayerContext.Provider value={{ state, dispatch, audioRef }}>
      {children}
      <audio
        ref={audioRef}
        onTimeUpdate={() => {
          if (audioRef.current) {
            dispatch({
              type: 'SET_PROGRESS',
              payload: audioRef.current.currentTime,
            });
          }
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            dispatch({
              type: 'SET_DURATION',
              payload: audioRef.current.duration,
            });
          }
        }}
        onEnded={() => {
          // Логика для следующего трека
        }}
      />
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};