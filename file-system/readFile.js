const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
  // 파일 경로는 현재 파일 기준이 아니라 node 명령어를 실행하는 콘솔 기준
  if (err) {
    throw err;
  }
  console.log(data); // readFile의 결과물은 버퍼로 제공됨
  console.log(data.toString());
});
