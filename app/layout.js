import './globals.css';
import { Providers } from './providers';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export const metadata = {
  title: 'Nova Era Shard - Servidor de Ultima Online',
  description: 'Site oficial do Nova Era Shard - Servidor de Ultima Online com a melhor experiência de jogo, combinando elementos clássicos e modernos.',
  keywords: ['ultima online', 'uo', 'mmorpg', 'shard', 'servuo', 'server'],
  authors: [{ name: 'Nova Era Shard Team' }],
  creator: 'Nova Era Shard',
  publisher: 'Nova Era Shard',
  metadataBase: new URL('https://www.novaerashard.com.br'),
  openGraph: {
    title: 'Nova Era Shard - Servidor de Ultima Online',
    description: 'Site oficial do Nova Era Shard - Servidor de Ultima Online com a melhor experiência de jogo, combinando elementos clássicos e modernos.',
    url: 'https://www.novaerashard.com.br',
    siteName: 'Nova Era Shard',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=MedievalSharp&family=Berkshire+Swash&family=Cinzel&family=Almendra&family=Metamorphous&family=Pirata+One&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-24">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
} 