const request = require('superagent');
 
function postUser(user) {
  return request
    .post('http://localhost:3000/api/cli-users')
    .send(user);
}

function getUsers() {
  return request
    .get('http://localhost:3000/api/cli-users');
}

function updateUserInfo(id, update) {
  return request
    .put(`http://localhost:3000/api/cli-users/${id}`)
    .send(update);
}
module.exports = {
  postUser,
  getUsers,
  updateUserInfo
};