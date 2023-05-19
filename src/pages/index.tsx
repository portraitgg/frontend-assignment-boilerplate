import clsx from 'clsx'

import { Button } from '@/components/Button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-6 p-24">
      <div className="flex justify-center text-sm">
        <p className="rounded-xl border border-gray-200/30 bg-[rgba(var(--callout-rgb),0.5)] p-4">
          Get started by editing&nbsp;
          <code className="font-bold [font-family:var(--font-mono)]">src/pages/index.tsx</code>
        </p>
      </div>

      <div
        className={clsx(
          'relative flex flex-1 flex-col items-center justify-center gap-8',
          'before:pointer-events-none before:absolute before:left-1/2 before:top-1/2 before:-ml-[240px] before:-mt-[180px] before:h-[360px] before:w-[480px] before:rounded-full before:blur-2xl [&:before]:[background:var(--secondary-glow)]'
        )}
      >
        {/* eslint-disable-next-line no-alert */}
        <Button onClick={() => alert('Hello World!')}>Hello World!</Button>
      </div>
    </main>
  )
}
