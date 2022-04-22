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

export { check, login, logout };
