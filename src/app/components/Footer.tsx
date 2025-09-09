export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/10 dark:border-white/10 mt-16">
      <div className="mx-auto max-w-7xl px-4 py-8 grid gap-6 sm:grid-cols-3 text-sm">
        <div className="space-y-2">
          <div className="font-medium">About</div>
          <p className="text-foreground/70">A clean shadcn dashboard boilerplate using Next.js App Router.</p>
        </div>
        <div className="space-y-2">
          <div className="font-medium">Links</div>
          <ul className="space-y-1 text-foreground/70">
            <li><a href="#" className="hover:underline hover:text-foreground">Documentation</a></li>
            <li><a href="#" className="hover:underline hover:text-foreground">Changelog</a></li>
            <li><a href="#" className="hover:underline hover:text-foreground">Support</a></li>
          </ul>
        </div>
        <div className="space-y-2">
          <div className="font-medium">Newsletter</div>
          <p className="text-foreground/70">Subscribe for updates and news.</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-8 text-xs text-foreground/60 text-center">
        © {year} Shadcn Dashboard. Built with Next.js and Tailwind CSS.
      </div>
    </footer>
  );
}