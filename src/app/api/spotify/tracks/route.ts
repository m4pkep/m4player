import { NextResponse } from 'next/server';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  try {
    // Получаем client credentials token
    const credentials = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(credentials.body['access_token']);

    // Ищем треки
    const data = await spotifyApi.searchTracks(query || 'popular');
    
    const tracks = data.body.tracks?.items.map(item => ({
      id: item.id,
      title: item.name,
      artist: item.artists[0].name,
      album: item.album.name,
      duration: Math.floor(item.duration_ms / 1000),
      url: item.preview_url || '', // preview_url для 30-секундного превью
      coverUrl: item.album.images[0]?.url,
    })) || [];

    return NextResponse.json(tracks);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch tracks' }, { status: 500 });
  }
}