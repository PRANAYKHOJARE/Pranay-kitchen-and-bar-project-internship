import { X } from "lucide-react";

const CATEGORIES = ["All", "Starters", "Mains", "Pizza", "Desserts", "Drinks"];

export function Sidebar({ active, onSelect, open, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-72 transform border-r bg-white text-black shadow-2xl transition-transform duration-300 dark:bg-zinc-900 dark:text-white md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-5 dark:border-zinc-700">
          <div>
            <h2 className="text-lg font-bold">Menu</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">Browse Categories</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-zinc-800"
          >
            <X size={20} />
          </button>
        </div>

        {/* Categories */}
        <nav className="p-4">
          <div className="space-y-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => {
                  onSelect(c);
                  onClose();
                }}
                className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-all ${
                  active === c
                    ? "bg-orange-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-orange-50 dark:text-gray-200 dark:hover:bg-zinc-800"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
}
