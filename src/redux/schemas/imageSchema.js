import { schema } from "normalizr";
import commentSchema from "./commentSchema";
import imageAuthorSchema from "./imageAuthorSchema";
const imageSchema = new schema.Entity(
  "images",
  {
    comments: [commentSchema],
    author: imageAuthorSchema
  },
  { idAttribute: "_id" }
);

export default imageSchema;
