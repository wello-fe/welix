'use client';

import { useState } from 'react';

import { Checkbox } from '@/components/server';

export default function Home() {
  const [turned, setTurned] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Welix
      <Checkbox
        disabled
        checked={turned}
        onClick={() => setTurned((prev) => !prev)}
      >
        dd
      </Checkbox>
    </main>
  );
}
