import Link from 'next/link';
import NavigationTabs from './NavigationTabs';
import UserProfile from './UserProfile';

export default function TopNavigationBar() {
  return (
    <header className="w-full border-b border-black/10 dark:border-white/10 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium">
            <span className="inline-block h-6 w-6 rounded bg-foreground" />
            <span className="text-foreground">Shadcn Dashboard</span>
          </Link>
          <nav aria-label="Primary">
            <NavigationTabs />
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link href="#" className="text-sm text-foreground/70 hover:text-foreground">Docs</Link>
          <UserProfile />
        </div>
      </div>
    </header>
  );
}