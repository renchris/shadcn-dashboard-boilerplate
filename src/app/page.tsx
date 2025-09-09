export default function HomePage() {
  return (
    <div>
      <section className="container py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Shadcn Dashboard</h1>
        <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
          A clean dashboard boilerplate using Next.js App Router
        </p>
      </section>
      <section className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pb-16">
        {[1, 2, 3, 4].map((cardIndex) => (
          <div
            key={cardIndex}
            className="rounded-xl border border-black/10 dark:border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 p-5 shadow-sm"
          >
            <div className="text-sm text-zinc-500 dark:text-zinc-400">
              Card
              {' '}
              {cardIndex}
            </div>
            <div className="mt-2 text-2xl font-semibold">12,345</div>
          </div>
        ))}
      </section>
    </div>
  );
}
