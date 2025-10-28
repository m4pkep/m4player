import { PlayerProvider } from '../contexts/PlayerContext';
import './globals.css';
import localFont from 'next/font/local';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import '@/lib/fontawesome';

const myFont = localFont({
  src: [
    {
      path: '../../public/fonts/ofont.ru_Marvin.ttf',
    },
  ],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={myFont.className}>
      <Header />
      <Sidebar />
      <body >
        <PlayerProvider>
          {children}
        </PlayerProvider>
      </body>
    </html>
  );
}