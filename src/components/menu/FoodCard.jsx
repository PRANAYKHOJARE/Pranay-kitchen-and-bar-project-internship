import { ShoppingCart } from "lucide-react";

export function FoodCard({ item, onClick, addToCart }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
      {/* Clickable card area */}
      <button onClick={onClick} className="text-left">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-foreground backdrop-blur">
            {item.category}
          </span>
        </div>

        <div className="p-4">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-serif text-lg text-foreground line-clamp-1">{item.name}</h3>

            <span className="text-primary font-semibold">₹{item.price}</span>
          </div>

          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{item.description}</p>
        </div>
      </button>

      {/* Add to Cart Button */}
      <div className="px-4 pb-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(item);
          }}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 font-medium text-primary-foreground transition hover:opacity-90"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
