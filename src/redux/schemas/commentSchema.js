import { schema } from "normalizr";
import commentAuthorSchema from "./commentAuthorSchema";
const commentSchema = new schema.Entity(
  "comments",
  { author: commentAuthorSchema },
  { idAttribute: "_id" }
);

export default commentSchema;
