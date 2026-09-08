export default function Footer() {
  return (
    <footer className="px-6 md:px-14 py-10 text-xs flex justify-between text-muted border-t border-border">
      <span>© {new Date().getFullYear()} Sector 3</span>
      <span className="font-wordmark tracking-widest text-bronze">SECTOR3.CC</span>
    </footer>
  );
}
