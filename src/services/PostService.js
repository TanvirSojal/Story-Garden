import axios from "axios";

const uri = process.env.VUE_APP_POSTS_URI;

const PostService = {
  // ? removed async for testing promise based operations
  findAll: async () => {
    return axios
      .get(uri)
      .then((response) => response.data)
      .catch((err) => console.log("Failed to fetch posts! ", err.message));
  },
  // ? removed async for testing promise based operations
  findById: async (id) => {
    return axios
      .get(uri + "/" + id)
      .then((response) => response.data)
      .catch((err) => console.log("Failed to fetch post! ", err.message));
  },
  findByUser: async (username) => {
    return axios
      .get(uri)
      .then((response) =>
        response.data.filter((story) => story.username === username)
      )
      .catch((err) =>
        console.log("Failed to fetch posts by user! ", err.message)
      );
  },
  // createPost: async(request) => {
  //   return axios.post(uri, request)
  // }
};

export default PostService;
