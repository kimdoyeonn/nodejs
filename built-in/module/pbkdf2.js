const crypto = require('crypto');

// pbkdf2 - 간단히 말해 기존 문자열에 salt라 부르는 문자열을 붙여서 해시 알고리즘을 반복해서 적용하는 것

// 64바이트 길이의 문자열을 만듦
crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString('base64');
  console.log('salt:', salt);
  // 비밀번호, salt, 반복 횟수, 출력 바이트, 해시 알고리즘
  crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
    console.log('password:', key.toString('base64'));
  });
});

/**
 * - crypto.randomBytes, crypto.pbkdf2 메서드는 내부적으로 스레드 풀을 사용해 멀티 스레딩으로 동작하기에 블로킹되지 않음
 * - pbkdf2는 간단하지만 bcrypt, scrypt 보다 취약하기 때문에 더 나은 보안을 위해서는 bcrypt, scrypt를 사용해야한다.
 */
