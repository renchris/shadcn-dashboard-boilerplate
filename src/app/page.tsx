export default function HomePage() {
  return (
    <div>
      <section className="container py-20 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mx-auto max-w-4xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
          Shadcn Dashboard
        </h1>
        <p className="mt-5 text-zinc-400 max-w-2xl mx-auto">
          Build production-grade dashboards with Next.js App Router and Tailwind CSS.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            className="inline-flex h-10 items-center rounded-md bg-white text-black px-5 text-sm font-medium shadow-sm transition hover:bg-zinc-200"
          >
            Get Started
          </button>
          <button
            type="button"
            className="inline-flex h-10 items-center rounded-md border border-white/20 px-5 text-sm font-medium text-zinc-300 hover:text-white hover:border-white/40"
          >
            View Docs
          </button>
        </div>
      </section>
      <section className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pb-20">
        {[1, 2, 3, 4].map((cardIndex) => (
          <div
            key={cardIndex}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 shadow-xl transition-transform hover:scale-[1.01]"
          >
            <div className="pointer-events-none absolute -top-20 right-0 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-opacity group-hover:opacity-80" />
            <div className="text-sm text-zinc-400">
              Card
              {' '}
              {cardIndex}
            </div>
            <div className="mt-2 text-3xl font-semibold tracking-tight">12,345</div>
            <div className="mt-6 text-xs text-zinc-500">Updated 2 min ago</div>
          </div>
        ))}
      </section>
    </div>
  );
}
