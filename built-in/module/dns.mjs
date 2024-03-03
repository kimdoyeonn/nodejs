import dns from 'dns/promises';

// 도메인을 통해 IP나 기타 DNS 정보를 얻고자할 때 사용

const domain = 'gilbut.co.kr';

const ip = await dns.lookup(domain); // ip 얻기
console.log('IP', ip);

// 레코드는 dns.resolve(도메인, 레코드이름) 으로 검색
const a = await dns.resolve(domain, 'A'); // ipv4 주소
console.log('A', a);

const mx = await dns.resolve(domain, 'MX'); // 메일 서버
console.log('MX', mx);

const cname = await dns.resolve('www.' + domain, 'CNAME'); // 별칭 - 주로 www이 붙은 주소는 별칭인 경우가 많음
console.log('CNAME', cname);

const any = await dns.resolve(domain, 'ANY');
console.log('ANY', any);
