export function Navigation() {
  return (
    <header className="border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
            MenuBase
          </p>
          <h1 className="font-serif text-2xl text-stone-900">Yemek Yonetim Paneli</h1>
        </div>

        <nav aria-label="Bolumler">
          <ul className="flex items-center gap-3 text-sm font-medium text-stone-700">
            <li>
              <a
                className="rounded-full border border-stone-300 px-4 py-2 transition hover:border-stone-900 hover:text-stone-900"
                href="#menu"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                className="rounded-full border border-stone-900 bg-stone-900 px-4 py-2 text-white transition hover:bg-stone-700"
                href="#admin"
              >
                Admin
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
