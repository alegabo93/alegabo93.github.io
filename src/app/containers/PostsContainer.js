// Third-party dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Own actions/constants/components
import getPosts from "Actions/Posts";
import Posts from "Components/Posts";

const loadData = ({ getPostsAction }) => {
  getPostsAction();
};

class PostsContainer extends Component {
  static propTypes = {
    posts: PropTypes.shape().isRequired
  };

  componentWillMount() {
    loadData(this.props);
  }

  render() {
    const { posts } = this.props;

    return <Posts posts={posts.data} />;
  }
}

const mapStateToProps = state => {
  const { posts } = state;
  return {
    posts
  };
};

export default connect(mapStateToProps, {
  getPostsAction: getPosts
})(PostsContainer);
