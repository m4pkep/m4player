export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  url: string;
  coverUrl: string;
}

export const demoTracks: Track[] = [
  {
    id: '1',
    title: 'Sample Track 1',
    artist: 'Free Music',
    album: 'Test Album',
    duration: 180,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    coverUrl: 'https://via.placeholder.com/300'
  },
  {
    id: '2', 
    title: 'Sample Track 2',
    artist: 'Free Music',
    album: 'Test Album',
    duration: 210,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    coverUrl: 'https://via.placeholder.com/300'
  },
  {
    id: '3',
    title: 'Sample Track 3',
    artist: 'Free Music',
    album: 'Test Album', 
    duration: 195,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    coverUrl: 'https://via.placeholder.com/300'
  }
];