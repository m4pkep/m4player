export interface Track {
    id: string;
    title: string;
    artist: string;
    album: string;
    duration: number;
    url: string;
    coverUrl: string;
}

export interface Playlist {
  id: string;
  name: string;
  tracks: Track[];
  coverUrl?: string;
}

export interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  duration: number;
  currentPlaylist: Track[];
}