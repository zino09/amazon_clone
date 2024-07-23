import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ProductWhereInput = {
  id?: StringFilter;
  title?: StringFilter;
  description?: JsonFilter;
  titlePrice?: FloatFilter;
  discountedPrice?: FloatFilter;
  colors?: JsonFilter;
  variants?: JsonFilter;
  images?: JsonFilter;
  category?: CategoryWhereUniqueInput;
  reviews?: ReviewListRelationFilter;
  order?: OrderWhereUniqueInput;
};
