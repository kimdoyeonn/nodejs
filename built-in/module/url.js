const url = require('url');

const { URL } = url;
const myURL = new URL(
  'http://www.gilbut.co.kr/book/bookList.aspx?sercate1=101011101#anchor'
);
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
