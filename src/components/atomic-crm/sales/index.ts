import { lazy } from "react";
import type { Sale } from "../types";

const SalesCreate = lazy(() =>
  import("./SalesCreate").then((module) => ({ default: module.SalesCreate })),
);
const SalesEdit = lazy(() =>
  import("./SalesEdit").then((module) => ({ default: module.SalesEdit })),
);
const SalesList = lazy(() =>
  import("./SalesList").then((module) => ({ default: module.SalesList })),
);

export default {
  list: SalesList,
  create: SalesCreate,
  edit: SalesEdit,
  recordRepresentation: (record: Sale) =>
    `${record.first_name} ${record.last_name}`,
};
