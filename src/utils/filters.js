// 필터 관련 함수가 존재하는 파일
function sliceText(value) {
  return value.slice(0, 80);
}

function sliceDate(value) {
  return value.slice(0, 10);
}

function maskingName(value) {
  if (value.length < 4) {
    return value.slice(0, 1) + '**';
  } else {
    var star = '*';
    for (var j = 2; j < value.length; j++) {
      star = star + '*';
    }
    return value.slice(0, 1) + star;
  }
}

export { sliceText, sliceDate, maskingName };
