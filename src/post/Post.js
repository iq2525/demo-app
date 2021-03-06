// @flow
import React from "react";
import PostActions from "./PostActions";
import PostComments from "./PostComments";
import PostHeading from "./PostHeading";
import "./Post.scss";

const Post = () => (
  <div>
    <PostHeading />
    <PostActions />
    <PostComments />
  </div>
);

export default Post;
