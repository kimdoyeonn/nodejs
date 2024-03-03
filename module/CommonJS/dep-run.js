const dep1 = require('./dep1');
const dep2 = require('./dep2');

dep1();
dep2();

/**
 * 순환참조(circular dependency)
 *  - 순환참조가 있을 경우 순환 참조되는 객체를 빈 객체로 만듦
 *  - 에러가 발생하지 않고 빈 객체로 변경되기 때문에 예기치 못한 동작이 발생할 수 있음 -> 순환 참조가 발생하지 않도록 구조를 잘 잡는 것이 중요
 */
