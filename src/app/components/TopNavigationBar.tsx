import Link from 'next/link';
import NavigationTabs from './NavigationTabs';
import UserProfile from './UserProfile';

export default function TopNavigationBar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/10 dark:border-white/10 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-foreground text-background">S</span>
            <span className="hidden sm:inline">Shadcn Dashboard</span>
          </Link>
          <nav aria-label="Primary" className="hidden md:block">
            <NavigationTabs />
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Docs</Link>
          <UserProfile />
        </div>
      </div>
    </header>
  );
}