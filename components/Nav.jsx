import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-14 py-6 border-b border-border text-muted">
      <Link href="/" className="flex items-baseline gap-2">
        <span className="font-wordmark font-semibold text-ink text-lg tracking-wide">
          SECTOR 3
        </span>
        <span className="hidden sm:inline font-wordmark text-xs text-bronze tracking-widest">
          SECTOR3.CC
        </span>
      </Link>
      <div className="flex gap-8 text-sm">
        <Link href="/about">About</Link>
        <a href="mailto:hello@sector3.cc">Contact</a>
      </div>
    </nav>
  );
}
