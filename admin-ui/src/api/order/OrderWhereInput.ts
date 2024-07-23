import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  products?: ProductListRelationFilter;
  price?: FloatNullableFilter;
  status?: JsonFilter;
  paymentIntent?: StringNullableFilter;
  paymentStatus?: BooleanNullableFilter;
};
