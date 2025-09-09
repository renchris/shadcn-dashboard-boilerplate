import Link from 'next/link';
import NavigationTabs from './NavigationTabs';
import UserProfile from './UserProfile';

export default function TopNavigationBar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-zinc-950/60 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="container py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-black text-white dark:bg-white dark:text-black">S</span>
            <span className="hidden sm:inline">Shadcn Dashboard</span>
          </Link>
          <nav aria-label="Primary" className="hidden md:block">
            <NavigationTabs />
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link href="#" className="text-sm text-zinc-400 hover:text-white">Docs</Link>
          <UserProfile />
        </div>
      </div>
    </header>
  );
}