export default function HomePage() {
  return (
    <div>
      <section className="container py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Shadcn Dashboard</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          A clean dashboard boilerplate using Next.js App Router
        </p>
      </section>
      <section className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pb-16">
        {[1, 2, 3, 4].map((cardIndex) => (
          <div
            key={cardIndex}
            className="rounded-xl border border-black/10 dark:border-white/10 bg-card p-5 shadow-sm"
          >
            <div className="text-sm text-muted-foreground">
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
