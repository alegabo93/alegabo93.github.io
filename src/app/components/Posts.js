// Third-party dependencies
import React from "react";
import PropTypes from "prop-types";

const Posts = ({ posts }) => (
  <ul>{posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default Posts;
