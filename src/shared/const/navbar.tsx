import { catalogItems } from "./catalogItems";

export const navbar = catalogItems.map((item) => ({
  id: item.id,
  title: item.title,
}));
