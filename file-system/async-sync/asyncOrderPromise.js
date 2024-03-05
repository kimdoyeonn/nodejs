const fs = require('fs').promises;

/**
 * 비동기에서 순서를 보장하는 방법 - 프로미스
 */

console.log('시작');
fs.readFile('./readme2.txt')
  .then((data) => {
    console.log('1번', data.toString());
    return fs.readFile('./readme2.txt');
  })
  .then((data) => {
    console.log('2번', data.toString());
    return fs.readFile('./readme2.txt');
  })
  .then((data) => {
    console.log('3번', data.toString());
    console.log('끝');
  })
  .catch((err) => {
    console.error(err);
  });
