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

function saveReadHistoryToCookie(value, date) {
  document.cookie = `view${value}=${date}`;
}

function getReadHistoryFromCookie(value) {
  return document.cookie.includes(`views${value}`);
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  saveUserToCookie,
  getUserFromCookie,
  saveReadHistoryToCookie,
  getReadHistoryFromCookie,
  deleteCookie,
};
