'use client';

import { usePlayer } from '@/contexts/PlayerContext';
import { Track } from '@/types/music';
import { Play } from 'lucide-react';
import { useTrackDuration } from '@/hooks/useTrackDuration';

interface PlaylistProps {
  tracks: Track[];
}

const TrackItem = ({ track }: { track: Track }) => {
  const duration = useTrackDuration(track.url);
  
  const formatTime = (seconds: number) => {
    if (!seconds) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center space-x-4 p-4">
      <span>{formatTime(duration)}</span>
      <span>{track.title}</span>
      <span>{track.artist}</span>
    </div>
  );
};

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