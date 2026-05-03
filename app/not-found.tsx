
import css from './page.module.css';
import Link from 'next/link';
import RedirectCountdown from '@/components/Not-Found/Not-found.clien';

export default function NotFound() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.desc}>Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className={css.link}>Go back home</Link>
      <RedirectCountdown />
    </div>
  );
}
