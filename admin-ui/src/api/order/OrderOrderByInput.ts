import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  price?: SortOrder;
  status?: SortOrder;
  paymentIntent?: SortOrder;
  paymentStatus?: SortOrder;
};
