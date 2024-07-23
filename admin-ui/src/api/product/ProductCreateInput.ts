import { InputJsonValue } from "../../types";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ProductCreateInput = {
  title: string;
  description: InputJsonValue;
  titlePrice: number;
  discountedPrice: number;
  colors: InputJsonValue;
  variants?: InputJsonValue;
  images: InputJsonValue;
  category?: CategoryWhereUniqueInput | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
  order?: OrderWhereUniqueInput | null;
};
