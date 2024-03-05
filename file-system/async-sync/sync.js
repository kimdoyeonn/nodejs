const fs = require('fs');

/**
 * readFileSync
 * - 동기로 동작하기 때문에 순서가 보장된다.
 * - 하지만 요청이 수백개 이상 들어오면 성능에 문제가 생긴다.
 *   백그라운드가 작업하는 동안 메인스레드는 아무 작업도 하지 못하고 대기를 해야하기 때문
 * - 백그라운드는 fs 작업을 동시에 처리할 수 있는데 Sync 메서드를 사용하면 동시에 처리하지도 못하게 됨
 * - 때문에 이 메서드를 사용해야하는 경우는 극히 드물고 대부분의 경우에는 비동기 메서드가 훨씬 효율적이다.
 */

console.log('시작');
let data = fs.readFileSync('./readme2.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('3번', data.toString());
console.log('끝');
