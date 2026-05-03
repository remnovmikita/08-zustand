import type { Metadata } from 'next';
import { Roboto} from 'next/font/google';
import './global.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TanStackProvider from '../components/TanStackProvider/TanStackProvider';


const robotoFont = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"]
})

export const metadata: Metadata = {
  title: 'Title page',
  description: 'Nates website',
    openGraph:{
    title: "Note-Hub title",
    description: "Welcome to Note-Hub title",
    images:[
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg?_gl=1*17o1uiq*_ga*MTk3OTIxMzA4MS4xNzU1NTQyMDgz*_ga_PW0T7S5LDQ*czE3Nzc4MDMyMTkkbzEwMiRnMCR0MTc3NzgwMzIzMyRqNDYkbDAkaDA.",
        width: 1200,
        height: 630,
        alt: "Note-page"
      }
    ],
    siteName: "Note-Hub",
    url: "https://08-zustand-two-silk.vercel.app/"
  }
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className={robotoFont.variable}>
      <body>
        <TanStackProvider>
          <Header />
          {children}
          {modal}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
