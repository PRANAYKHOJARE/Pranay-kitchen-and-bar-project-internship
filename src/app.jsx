import { useEffect, useMemo, useState } from "react";

import { fetchMenu, fetchMenuItem } from "./routes/api/menu";

import { Header } from "./components/menu/Header";
import { Sidebar } from "./components/menu/Sidebar";
import { FoodCard } from "./components/menu/FoodCard";
import { DetailView } from "./components/menu/DetailView";
import { Footer } from "./components/menu/Footer";
import { toast } from "sonner";

export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const [selected, setSelected] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cart, setCart] = useState([]);

  // Load menu
  useEffect(() => {
    fetchMenu()
      .then((data) => setItems(data || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);

      if (existing) {
        toast.success(`${item.name} quantity updated 🛒`);

        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }

      toast.success(`${item.name} added to cart 🛒`);

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // Filter logic
  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(query.toLowerCase());

      const matchesCategory = category === "All" || item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [items, query, category]);

  return (
    <div className="min-h-screen bg-background">
      <Header
        query={query}
        onQuery={setQuery}
        onToggleSidebar={() => setSidebarOpen(true)}
        activeCategory={category}
        onSelectCategory={setCategory}
      />

      <div className="flex">
        <Sidebar
          active={category}
          onSelect={setCategory}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="flex-1 min-w-0">
          <section className="px-4 py-6 md:px-12 md:py-10">
            <h2 className="text-xl font-serif md:text-2xl">
              {category === "All" ? "Menu" : category}
            </h2>

            {loading ? (
              <p className="mt-4 text-sm text-muted-foreground">Loading...</p>
            ) : filtered.length === 0 ? (
              <p className="mt-4 text-sm text-muted-foreground">No items found</p>
            ) : (
              <div className="grid grid-cols-2 gap-3 mt-4 lg:grid-cols-3 md:gap-6 md:mt-6">
                {filtered.map((item) => (
                  <FoodCard
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    onClick={async () => {
                      const full = await fetchMenuItem(item.id);
                      setSelected(full);
                    }}
                  />
                ))}
              </div>
            )}
          </section>

          <Footer />
        </main>
      </div>

      <DetailView item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
