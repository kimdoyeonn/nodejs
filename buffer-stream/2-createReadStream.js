const fs = require('fs');

/**
 * createReadStream: 읽기 스트림을 만듦
 * highWaterMark - 버퍼의 크기 / 기본은 64KB
 */
const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 });
const data = [];

/**
 * 이벤트 리스너를 붙여서 사용함
 * "data": 파일 읽기 시작 이벤트
 * "error": 읽는 도중 에러 이벤트
 * "end": 종료 이벤트
 */
readStream.on('data', (chunk) => {
  data.push(chunk);
  console.log('data:', chunk, chunk.length);
});

readStream.on('end', () => {
  console.log('end :', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
  console.log('error:', err);
});
