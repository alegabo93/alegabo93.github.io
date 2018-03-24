// Third-party dependencies
import axios from "axios";

const getUserData = () => ({
  type: "USER",
  payload: axios.get("/users/alegabo93")
});

export default getUserData;
