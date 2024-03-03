const myURL = new URL(
  'http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript'
);

console.log('searchParams:', myURL.searchParams);
console.log('searchParams.getAll():', myURL.searchParams.getAll('category')); // 모든 값
console.log('searchParams.get():', myURL.searchParams.get('limit')); // 첫번째 값
console.log('searchParams.has():', myURL.searchParams.has('page')); // 해당하는 키가 존재하는지

console.log('searchParams.keys():', myURL.searchParams.keys()); // 키들
console.log('searchParams.values():', myURL.searchParams.values()); // 값들

myURL.searchParams.append('filter', 'es3');
myURL.searchParams.append('filter', 'es5'); // 추가
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter', 'es6'); // 모두 지우고 새로 추가
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.toString():', myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString(); // 쿼리스트링으로 만듦
