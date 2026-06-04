import { Clock, Flame, X } from "lucide-react";
import { useEffect } from "react";

export function DetailView({ item, onClose }) {
  useEffect(() => {
    if (!item) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl overflow-hidden rounded-3xl bg-card shadow-2xl border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Main Layout */}
        <div className="grid md:grid-cols-[45%_55%]">
          {/* Image Section */}
          <div className="h-[250px] md:h-[650px]">
            <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
          </div>

          {/* Details Section */}
          <div className="max-h-[650px] overflow-y-auto bg-white p-6 md:p-10 dark:bg-zinc-900">
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {item.category}
            </p>

            <div className="flex items-start justify-between gap-4">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-black dark:text-white">
                {item.name}
              </h2>

              <span className="text-2xl font-bold text-orange-600">₹{item.price}</span>
            </div>

            <p className="mt-6 text-base leading-8 text-gray-700 dark:text-gray-300">
              {item.longDescription || item.description}
            </p>

            <div className="my-6 flex flex-wrap gap-6 border-y border-border py-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>{item.prepTime}</span>
              </div>

              <div className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-primary" />
                <span>{item.calories} kcal</span>
              </div>
            </div>

            {/* Tags */}
            {item.tags?.length > 0 && (
              <div className="mb-8 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Order Button */}
            <button className="w-full rounded-xl bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground transition hover:opacity-90">
              Add to Order • ₹{item.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
