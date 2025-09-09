export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/10 dark:border-white/10 mt-16">
      <div className="container py-10 grid gap-8 sm:grid-cols-3 text-sm">
        <div className="space-y-2">
          <div className="font-semibold">About</div>
          <p className="text-muted-foreground">A clean shadcn dashboard boilerplate using Next.js App Router.</p>
        </div>
        <div className="space-y-2">
          <div className="font-semibold">Links</div>
          <ul className="space-y-1 text-muted-foreground">
            <li><a href="#" className="hover:underline hover:text-foreground">Documentation</a></li>
            <li><a href="#" className="hover:underline hover:text-foreground">Changelog</a></li>
            <li><a href="#" className="hover:underline hover:text-foreground">Support</a></li>
          </ul>
        </div>
        <div className="space-y-2">
          <div className="font-semibold">Newsletter</div>
          <p className="text-muted-foreground">Subscribe for updates and news.</p>
        </div>
      </div>
      <div className="container pb-8 text-xs text-muted-foreground text-center">
        ©
        {' '}
        {year}
        {' '}
        Shadcn Dashboard. Built with Next.js and Tailwind CSS.
      </div>
    </footer>
  );
}
