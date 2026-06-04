import { Menu, Search, X, ShoppingCart } from "lucide-react";

const CATEGORIES = ["All", "Starters", "Mains", "Pizza", "Desserts", "Drinks"];

export function Header({
  query,
  onQuery,
  onToggleSidebar,
  activeCategory,
  onSelectCategory,
  cartCount = 0,
  onCartClick,
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl shadow-md">
      {/* Top Row */}
      <div className="flex items-center gap-3 px-4 py-3 md:px-8">
        {/* Mobile Menu */}
        <button onClick={onToggleSidebar} className="rounded-lg p-2 hover:bg-muted md:hidden">
          <Menu className="h-5 w-5" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-md">
            P
          </div>

          <div className="leading-tight">
            <h1 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground font-semibold">
              Pranay's
            </h1>

            <p className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Kitchen & Bar
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="ml-auto flex flex-1 items-center gap-3 rounded-xl border border-border bg-muted/50 px-4 py-3 md:py-3.5 md:max-w-lg">
          <Search className="h-4 w-4 text-muted-foreground" />

          <input
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Search food..."
            className="w-full bg-transparent text-sm md:text-base outline-none"
          />

          {query && (
            <button
              onClick={() => onQuery("")}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Cart */}
        <button onClick={onCartClick} className="relative ml-2 rounded-xl p-2 hover:bg-muted">
          <ShoppingCart className="h-5 w-5" />

          {cartCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Categories */}
      <div className="hidden md:flex items-center gap-2 px-8 pb-3 overflow-x-auto">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => onSelectCategory(c)}
            className={`rounded-full px-5 py-2.5 text-base font-medium transition-all ${
              activeCategory === c
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
    </header>
  );
}
