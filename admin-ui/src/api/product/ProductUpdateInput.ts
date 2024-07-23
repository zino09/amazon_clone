import { InputJsonValue } from "../../types";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ProductUpdateInput = {
  title?: string;
  description?: InputJsonValue;
  titlePrice?: number;
  discountedPrice?: number;
  colors?: InputJsonValue;
  variants?: InputJsonValue;
  images?: InputJsonValue;
  category?: CategoryWhereUniqueInput | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
  order?: OrderWhereUniqueInput | null;
};
