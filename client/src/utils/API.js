import axios from 'axios'
const API = {
  postEmail: function (email, list) {
    return axios.post("/api/email", {
      email,
      list
    })
  }
}
export default API;