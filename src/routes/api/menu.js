const API = import.meta.env.VITE_FOOD_API;

// GET ALL FOODS
export const fetchMenu = async () => {
  const res = await fetch(API);

  if (!res.ok) {
    throw new Error(`Failed to fetch menu: ${res.status}`);
  }

  const data = await res.json();
  console.log("MENU API:", data);

  return data;
};

// GET SINGLE FOOD
export const fetchMenuItem = async (id) => {
  const res = await fetch(`${API}/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch item ${id}: ${res.status}`);
  }

  const data = await res.json();
  console.log("MENU ITEM:", data);

  return data;
};
