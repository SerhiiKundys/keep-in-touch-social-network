import * as axios from "axios";

// THERE IS USED UNREAL DATA!-----------
const instance = axios.create({
  withCredentials: true,
  baseURL: "https://keep-in-touch.com/api/",
  headers: {
    "API-KEY": "test-api-key-123456abcdef",
  },
});
// -------------------------------------

// THERE IS USED UNREAL DATA!-----------
export const usersAPI = {
  getUsers(newPageNumber = 1, numPerPage = 10) {
    return instance
      .get(`${newPageNumber}&count=${numPerPage}`)
      .then((response) => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
};
// -------------------------------------
