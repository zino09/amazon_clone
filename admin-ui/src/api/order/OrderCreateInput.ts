import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
import { InputJsonValue } from "../../types";

export type OrderCreateInput = {
  user?: UserWhereUniqueInput | null;
  products?: ProductCreateNestedManyWithoutOrdersInput;
  price?: number | null;
  status?: InputJsonValue;
  paymentIntent?: string | null;
  paymentStatus?: boolean | null;
};
