import { AudioPlayer } from '../components/player/AudioPlayer';
import { Playlist } from '../components/player/Playlist';
import { demoTracks } from '../data/tracks';


export default function Home() {
  return (
    <div className="min-h-screen bg-[#5e429c] pb-24">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-[#f492f0]">Музыкальный плеер</h1>
        <Playlist tracks={demoTracks} />
      </main>
      <AudioPlayer />
    </div>
  );
}