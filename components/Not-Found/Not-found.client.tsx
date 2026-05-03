"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectCountdown() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds === 0) {
      router.push('/');
      return;
    }
    const timer = setTimeout(() => setSeconds(s => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds, router]);

  return (
    <p>
      Redirecting in <strong>{seconds}</strong> second{seconds !== 1 ? 's' : ''}…
    </p>
  );
}
