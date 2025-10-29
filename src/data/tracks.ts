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
    title: 'Smile',
    artist: 'Juice wrld',
    album: 'Test Album',
    duration: 180,
    url: "/music/JuiceWrld-Smile.m4a",
    coverUrl: 'https://cdn-image.zvuk.com/pic?type=release&id=11633612&size=large&hash=62d6a88d-469c-40aa-96bd-738bb8d45217'
  },
  {
    id: '2', 
    title: 'HTML',
    artist: 'Bones',
    album: 'Test Album',
    duration: 210,
    url: "/music/BonesHTML.m4a",
    coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3tuJWVJzPCuiB0g-5IYeOLA2GNJt8Dn8apQ&s'
  },
  {
    id: '3',
    title: 'California World',
    artist: 'Lil peep',
    album: 'Test Album', 
    duration: 195,
    url: "/music/LilPeepCaliforniaWorld.m4a",
    coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRasQyA-TG4MXmLCEyZSX8yHHYhfmHQPBjvXQ&s'
  },
  {
    id: '3',
    title: 'California World',
    artist: 'Lil peep',
    album: 'Test Album', 
    duration: 195,
    url: "/music/LilPeepCaliforniaWorld.m4a",
    coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRasQyA-TG4MXmLCEyZSX8yHHYhfmHQPBjvXQ&s'
  },
  {
    id: '1',
    title: 'Smile',
    artist: 'Juice wrld',
    album: 'Test Album',
    duration: 180,
    url: "/music/JuiceWrld-Smile.m4a",
    coverUrl: 'https://cdn-image.zvuk.com/pic?type=release&id=11633612&size=large&hash=62d6a88d-469c-40aa-96bd-738bb8d45217'
  },
  {
    id: '2', 
    title: 'HTML',
    artist: 'Bones',
    album: 'Test Album',
    duration: 210,
    url: "/music/BonesHTML.m4a",
    coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3tuJWVJzPCuiB0g-5IYeOLA2GNJt8Dn8apQ&s'
  }
];