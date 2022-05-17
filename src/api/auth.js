import { instance } from './index';

function check() {
  return instance.get('auth/check');
}

function login(userData) {
  return instance.post('auth/login', userData);
}

function logout() {
  return instance.get('auth/logout');
}

function fetchUsers() {
  return instance.get('auth/find');
}

function registerUser(userData) {
  return instance.post('auth/register', userData);
}

function editUser(userData) {
  return instance.put('auth/edit', userData);
}

function deleteUser(id) {
  return instance.post('auth/delete', id);
}

export { check, login, logout, fetchUsers, registerUser, editUser, deleteUser };
