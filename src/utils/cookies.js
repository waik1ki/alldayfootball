function saveUserToCookie(value) {
  document.cookie = `adf_user=${value}`;
}

function getUserFromCookie() {
  var userData = document.cookie.replace(
    /(?:(?:^|.*;\s*)adf_user\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
  if (userData === '') {
    return null;
  } else {
    return JSON.parse(userData);
  }
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export { saveUserToCookie, getUserFromCookie, deleteCookie };
