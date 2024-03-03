import { odd, even } from './var.mjs';
import checkNumber from './func.mjs';

function checkStringOddOrEven(str) {
  if (str.length % 2) {
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('Hello'));

/**
 * ECMAScript 모듈
 *  - import 시 확장자 생략 안됨(.mjs) / index.mjs도 생략 안됨
 *  - .mjs를 .js로 사용하면서 에러가 없도록 하려면 package.json에 'type: "module"' 속성을 넣어주어야함
 *  - 다이나믹 임포트 불가능
 *  - 모듈 최상위에서는 async 없이 await 가능
 */
