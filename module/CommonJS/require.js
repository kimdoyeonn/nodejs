console.log('require가 가장 위에 오지 않아도 됩니다');

module.exports = '저를 찾아보세요';

require('./var');

console.log('require.cache입니다.');
console.log(require.cache);
console.log('require.main입니다.');
console.log(require.main);
console.log(require.main === module);
console.log(require.main.filename);

/**
 * require.cache:
 *  - 한번 require한 객체는 require.cache에 저장
 *  - 다음번에 require할 때는 새로 불러오지 않고 require.cache에서 꺼내서 사용함
 *
 * require.main:
 *  - 노드 실행 시 첫 모듈을 기억
 *  - require.main 객체의 모양은 require.cache와 동일함
 *  - 현재 파일이 첫 모듈인지 보려면 require.main === module 하면됨
 *  - 첫 모듈의 이름을 알아보려면 require.main.filename
 */
