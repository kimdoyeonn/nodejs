const fs = require('fs');

/**
 * readStream으로 파일을 읽고 그 스트림을 전달받아 writeStream으로 파일을 쓰기 - "파이핑한다"라고 함
 *
 * pipe 메서드로 연결하면 따로 .on('data')나 .write를 해주지 않아도 데이터가 자동으로 writeStream 으로 넘어감
 * 노드 8.5버전이 나오기 전까지는 이 방법으로 파일을 복사
 */
const readStream = fs.createReadStream('./readme4.txt');
const writeStream = fs.createWriteStream('./writeme3.txt');
readStream.pipe(writeStream);
