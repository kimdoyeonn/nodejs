import { pipeline } from 'stream/promises';
import fs from 'fs';
import zlib from 'zlib';

const ac = new AbortController();
const signal = ac.signal;

setTimeout(() => ac.abort(), 1);
await pipeline(
  fs.createReadStream('./readme4.txt'),
  zlib.createGzip(),
  fs.createWriteStream('./readme4.txt.gz'),
  {
    signal,
  }
);
