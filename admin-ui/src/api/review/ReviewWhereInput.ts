import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ReviewWhereInput = {
  id?: StringFilter;
  rating?: IntFilter;
  user?: UserWhereUniqueInput;
  product?: ProductWhereUniqueInput;
};
