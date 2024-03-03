const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep); // 경로 구분자 / 윈도: \, POSIX: /
console.log('path.delimiter:', path.delimiter); // 환경변수 구분자 / 윈도: ;, POSIX: :
console.log('----------------------------------------');
console.log('path.dirname():', path.dirname(string)); // 파일이 위치한 폴더 경로
console.log('path.extname():', path.extname(string)); // 파일의 확장자
console.log('path.basename():', path.basename(string)); // 파일의 이름(확장자 포함)
console.log(
  'path.base - extname:',
  path.basename(string, path.extname(string))
); // 파일의 이름(확장자 제외)
console.log('----------------------------------------');
console.log('path.parse():', path.parse(string)); // 파일 경로를 분리(root, dir, base, ext, name)
console.log(
  'path.format():',
  path.format({
    dir: 'C:/users/dawn',
    name: 'path',
    ext: '.js',
  })
); // path.parse()한 객체를 파일 경로로 합침
console.log('path.normalize():', path.normalize('C://users/dawn/path.js')); // 경로 구분자를 실수로 여러번 사용 혹은 혼용했을 때 정상적인 경로로 고쳐줌
console.log('----------------------------------------');
console.log('path.isAbsolute(/Users):', path.isAbsolute('/Users')); // 파일의 경로가 상대 경로인지 절대 경로인지
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));
console.log('----------------------------------------');
console.log(
  'path.relative():',
  path.relative('C://users/dawn/path.js', 'C://')
); // 경로 두개를 넣으면 첫번째 경로에서 두번째 경로로 가는 방법을 알려줌
console.log(
  'path.join():',
  path.join(__dirname, '..', '..', '/users', '.', '/dawn')
); // 여러 인수를 넣으면 하나의 경로로 합쳐줌 - '/'을 만났을 때 상대 경로로 처리함
console.log(
  'path.resolve():',
  path.resolve(__dirname, '..', 'users', '.', '/dawn')
); // join과 비슷하지만 '/'을 만났을 때 절대 경로로 인식해서 앞 경로를 무시함
