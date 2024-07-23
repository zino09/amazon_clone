import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ReviewCreateInput = {
  rating: number;
  user?: UserWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
