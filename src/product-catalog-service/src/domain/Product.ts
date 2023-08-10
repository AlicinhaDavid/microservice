import { Category } from "./Category";
import { Picture } from "./Picture";

export type Product = {
  id: string;
  name: string;
  description: string;
  picture: Picture;
  price: number;
  categories: Category[];
};
