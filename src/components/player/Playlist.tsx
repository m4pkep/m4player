'use client';

import { usePlayer } from '@/contexts/PlayerContext';
import { Track } from '@/types/music';
import { Play } from 'lucide-react';

interface PlaylistProps {
  tracks: Track[];
}

export const Playlist: React.FC<PlaylistProps> = ({ tracks }) => {
  const { dispatch, state, audioRef } = usePlayer();

  const playTrack = (track: Track) => {
    dispatch({ type: 'PLAY_TRACK', payload: track });
  };

  return (
    <div className="space-y-2">
      {tracks.map((track) => (
        <div
          key={track.id}
          className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow hover:bg-gray-50 cursor-pointer"
          onClick={() => playTrack(track)}
        >
          <img
            src={track.coverUrl}
            alt={track.title}
            className="w-12 h-12 rounded"
          />
          <div className="flex-1">
            <h3 className="font-semibold">{track.title}</h3>
            <p className="text-gray-600">{track.artist}</p>
          </div>
          <div className="text-gray-500">
            {Math.floor(track.duration / 60)}:
            {(track.duration % 60).toString().padStart(2, '0')}
          </div>
          <button className="p-2 text-gray-600 hover:text-black">
            <Play size={20} />
          </button>
        </div>
      ))}
    </div>
  );
};