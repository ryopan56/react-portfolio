function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <a href="#hero" className="font-bold tracking-tight">
          Ryopan56 Portfolio
        </a>

        <nav className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
          <a href="#about" className="transition hover:text-slate-950">
            About
          </a>
          <a href="#portfolio" className="transition hover:text-slate-950">
            Portfolio
          </a>
          <a href="#social" className="transition hover:text-slate-950">
            Social
          </a>
        </nav>
      </div>
    </header>
  );
}
export default Header;
