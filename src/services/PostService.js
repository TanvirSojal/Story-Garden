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
  createPost: async (request) => {
    const token = localStorage.getItem("storygarden-token");
    return axios
      .post(uri, request, {
        headers: {
          "auth-token": token,
        },
      })
      .then((response) => response.data)
      .catch((err) => {
        console.log("Failed to create post!", err.message);
        return false;
      });
  },
  updateById: async (id, post) => {
    const token = localStorage.getItem("storygarden-token");
    return axios
      .put(uri + "/" + id, post, {
        headers: {
          "auth-token": token,
        },
      })
      .then((response) => response.data)
      .catch((err) => {
        console.log("Failed to update post!", err.message);
        return false;
      });
  },
  deleteById: async (id) => {
    const token = localStorage.getItem("storygarden-token");
    return axios
      .delete(uri + "/" + id, {
        headers: {
          "auth-token": token,
        },
      })
      .then((response) => {
        console.log(response);
        return true;
      })
      .catch((err) => {
        console.log("Failed to delete post!", err.message);
        return false;
      });
  },
};

export default PostService;
