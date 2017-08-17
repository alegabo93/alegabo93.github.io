// Third-party dependencies
import axios from "axios";

const getPosts = () => ({
  type: "POSTS",
  payload: axios.get("/posts")
});

export default getPosts;
