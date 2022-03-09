import axios from 'axios';

export default axios.create({
  // for localhost http://localhost:3000/
  baseURL: `https://${process.env.REACT_APP_API_HOST}.onrender.com`
})
