import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ReviewUpdateInput = {
  rating?: number;
  user?: UserWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
