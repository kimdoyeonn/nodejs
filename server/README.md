# 요청과 응답 - 서버 띄우면서 익히기

- server1
  - server1.js: createServer로 서버 띄우기
  - server1-1.js: listen 메서드에 콜백함수를 넣는 대신 listening 이벤트 리스너 붙이기 + error 이벤트 리스너
  - server1-2.js: 한 번에 서버 여러 개 띄우기 - createServer를 원하는 만큼 하면 됨

- server2
  - server2.html, server2.js: 클라이언트로 응답 버퍼로 보내기

- 읽어볼 것
  - [Node.js의 Buffer를 제대로 이해해보자](https://tk-one.github.io/2018/08/28/nodejs-buffer/)