
import { Metadata } from 'next';
import css from './page.module.css';
import Link from 'next/link';
// import RedirectCountdown from '@/components/Not-Found/Not-found.client';
export const metadata: Metadata = {
  title: 'Not-foud page',
  description: 'This page not found',
    openGraph:{
    title: 'Not-foud page',
    description: 'This page not found',
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


export default function NotFound() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.desc}>Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className={css.link}>Go back home</Link>
      {/* <RedirectCountdown /> */}
    </div>
  );
}
