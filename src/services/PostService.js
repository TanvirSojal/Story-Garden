import axios from "axios";

const PostService = {
  // ? removed async for testing promise based operations
  findAll: () => {
    return axios
      .get(process.env.VUE_APP_POSTS_URI)
      .then((response) => response.data)
      .catch((err) => console.log("Failed to fetch posts! ", err.message));
  },
  // ? removed async for testing promise based operations
  findById: (id) => {
    return axios
      .get(process.env.VUE_APP_POSTS_URI + "/" + id)
      .then((response) => response.data)
      .catch((err) => console.log("Failed to fetch post! ", err.message));
  },
};

export default PostService;
