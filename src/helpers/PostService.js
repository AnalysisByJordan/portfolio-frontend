import axios from "axios";

const url = process.env.VUE_APP_POST_URL;

class PostService {
  // Create Posts
  static insertPost(name, email, message) {
    return axios.post(url, {
      name: name,
      email: email,
      message: message,
    });
  }
}

export default PostService;
