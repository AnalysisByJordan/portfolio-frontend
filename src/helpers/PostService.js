import axios from "axios";

const url = 'https://8tsrpin40d.execute-api.us-east-1.amazonaws.com/api/posts';

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
