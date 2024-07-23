import { JsonValue } from "type-fest";
import { Category } from "../category/Category";
import { Review } from "../review/Review";
import { Order } from "../order/Order";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: JsonValue;
  titlePrice: number;
  discountedPrice: number;
  colors: JsonValue;
  variants: JsonValue;
  images: JsonValue;
  category?: Category | null;
  reviews?: Array<Review>;
  order?: Order | null;
};
