import { User } from "../user/User";
import { Product } from "../product/Product";
import { JsonValue } from "type-fest";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  products?: Array<Product>;
  price: number | null;
  status: JsonValue;
  paymentIntent: string | null;
  paymentStatus: boolean | null;
};
