const buffer = Buffer.from('버퍼로 바꿔'); // 문자열을 버퍼로
console.log('from():', buffer);
console.log('length:', buffer.length);
console.log('toString():', buffer.toString()); // 버퍼를 문자열로

const array = [
  Buffer.from('띄엄 '),
  Buffer.from('띄엄 '),
  Buffer.from('띄어쓰기'),
];
const buffer2 = Buffer.concat(array); // 버퍼 배열을 하나로 합침
console.log('concat():', buffer2.toString());

const buffer3 = Buffer.alloc(5); // 빈 버퍼를 생성, 바이트를 인수로 넣으면 해당 크기의 버퍼가 생성
console.log('alloc():', buffer3);
