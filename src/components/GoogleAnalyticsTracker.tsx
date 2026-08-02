'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function GoogleAnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined' || !window.gtag) return;

    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname + window.location.search,
    });
  }, [pathname]);

  return null;
}