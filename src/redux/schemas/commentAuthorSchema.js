import { schema } from "normalizr";
const commentAuthorSchema = new schema.Entity(
  "commentAuthors",
  {},
  {
    idAttribute: "_id"
  }
);

export default commentAuthorSchema;
