'use client';

import dynamic from 'next/dynamic';

// Dynamic import dengan SSR disabled untuk mencegah hydration error
const InteractiveCursor = dynamic(
  () => import('@/components/InteractiveCursor').then((mod) => ({ default: mod.InteractiveCursor })),
  { ssr: false }
);

export default InteractiveCursor;