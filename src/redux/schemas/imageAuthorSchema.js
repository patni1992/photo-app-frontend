import { schema } from "normalizr";
const imageAuthorSchema = new schema.Entity(
  "imageAuthors",
  {},
  {
    idAttribute: "_id"
  }
);

export default imageAuthorSchema;
