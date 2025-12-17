import { lazy } from "react";

const CompanyList = lazy(() =>
  import("./CompanyList").then((module) => ({ default: module.CompanyList })),
);
const CompanyCreate = lazy(() =>
  import("./CompanyCreate").then((module) => ({
    default: module.CompanyCreate,
  })),
);
const CompanyShow = lazy(() =>
  import("./CompanyShow").then((module) => ({ default: module.CompanyShow })),
);
const CompanyEdit = lazy(() =>
  import("./CompanyEdit").then((module) => ({ default: module.CompanyEdit })),
);

export default {
  list: CompanyList,
  create: CompanyCreate,
  edit: CompanyEdit,
  show: CompanyShow,
};
