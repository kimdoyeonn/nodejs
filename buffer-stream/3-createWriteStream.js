const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme2.txt');

/**
 * "finish": 파일 쓰기 종료 이벤트
 */
writeStream.on('finish', () => {
  console.log('파일 쓰기 완료');
});

/**
 * write 메서드로 넣을 데이터를 씀
 */
writeStream.write('이 글을 씁니다.\n');
writeStream.write('한 번 더.\n');
writeStream.end();
