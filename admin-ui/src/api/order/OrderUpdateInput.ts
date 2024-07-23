import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";
import { InputJsonValue } from "../../types";

export type OrderUpdateInput = {
  user?: UserWhereUniqueInput | null;
  products?: ProductUpdateManyWithoutOrdersInput;
  price?: number | null;
  status?: InputJsonValue;
  paymentIntent?: string | null;
  paymentStatus?: boolean | null;
};
