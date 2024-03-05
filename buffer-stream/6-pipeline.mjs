import { pipeline } from 'stream/promises';
import zlib from 'zlib';
import fs from 'fs';

/**
 * stream 모듈의 pipeline 메서드를 사용하여 여러 개의 파이프를 연결
 */

await pipeline(
  fs.createReadStream('./readme4.txt'),
  zlib.createGzip(),
  fs.createWriteStream('./readme4.txt.gz')
);
