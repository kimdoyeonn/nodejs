const http = require('http');

http
  .createServer((req, res) => {
    // 응답에 대한 정보를 기록하는 메서드
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); // 응답이 html이고 한글을 위해 charset을 utf-8로 지정 - 헤더 header
    res.write('<h1>Hello Node!</h1>'); // 문자열, 버퍼, 데이터 여러개도 가능 - 본문 body
    res.end('<p>Hello Server!</p>'); // 응답을 종료하는 메서드, 인수가 있다면 그 데이터도 클라이언트로 보내고 응답을 종료함
  })
  // 클라이언트에 공개할 포트 번호, 연결 완료 후 실행될 콜백
  .listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중입니다.');
  });
