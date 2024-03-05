const zlib = require('zlib'); // 파일을 압축하는 모듈
const fs = require('fs');

/**
 * pipe으로 스트림을 여러 개 연결하여 사용할 수 있음
 */

const readStream = fs.createReadStream('./readme4.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./readme4.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);
