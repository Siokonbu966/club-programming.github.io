import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

// Font
import { Noto_Sans_JP } from 'next/font/google';

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  preload: false,
  display: 'swap',
  fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
});

export const metadata: Metadata = {
  title: '磁石祭ZERO ステージ企画「ものづくり発表会 〜Create to change〜」',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.className}`}>
        <div className="min-h-screen bg-[#13111C] selection:bg-purple-500/90 selection:text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_-20%,#17154B,transparent_45%)] opacity-70" />
          <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_120%,#1F1B41,transparent_45%)]" />

          <div className="relative">
            {/* Header Section */}
            <header className="py-6">
              <nav className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-3xl font-bold text-transparent"
                  >
                    Club Programming
                  </Link>
                  <div className="space-x-8">
                    {[
                      { to: '/', label: 'Home' },
                      { to: '/about', label: 'About' },
                      { to: '/speakers', label: 'Speakers' },
                      { to: '/access', label: 'Access' },
                      { to: '/schedule', label: 'Schedule' },
                    ].map((link) => (
                      <Link
                        key={link.to}
                        href={link.to}
                        className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </header>

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
