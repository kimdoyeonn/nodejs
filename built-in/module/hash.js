const crypto = require('crypto');

// 단방향 암호화 - 해시 기법을 주로 사용
// createHase(알고리즘): 사용할 해시 알고리즘을 넣음
// update(문자열): 변환할 문자열
// digest(인코딩): 인코딩할 문자열 - base64, hex, latin1 - base64가 가장 짧아서 애용됨

console.log(
  'base64:',
  crypto.createHash('sha512').update('비밀번호').digest('base64')
);
console.log(
  'hex:',
  crypto.createHash('sha512').update('비밀번호').digest('hex')
);
console.log(
  'base64:',
  crypto.createHash('sha512').update('다른 비밀번호').digest('base64')
);
