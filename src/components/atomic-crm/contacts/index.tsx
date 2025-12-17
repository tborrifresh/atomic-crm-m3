import { lazy } from "react";
import type { Contact } from "../types";

const ContactCreate = lazy(() =>
  import("./ContactCreate").then((module) => ({
    default: module.ContactCreate,
  })),
);
const ContactEdit = lazy(() =>
  import("./ContactEdit").then((module) => ({ default: module.ContactEdit })),
);
const ContactList = lazy(() =>
  import("./ContactList").then((module) => ({ default: module.ContactList })),
);
const ContactShow = lazy(() =>
  import("./ContactShow").then((module) => ({ default: module.ContactShow })),
);

export default {
  list: ContactList,
  show: ContactShow,
  edit: ContactEdit,
  create: ContactCreate,
  recordRepresentation: (record: Contact) =>
    record?.first_name + " " + record?.last_name,
};
