import axios from "axios";

const url = 'https://jr-portfolio-api.herokuapp.com/api/posts';

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
