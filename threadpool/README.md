# 스레드풀

비동기 메서드들은 백그라운드에서 실행되고 실행이 된 후에는 메인 스레드의 콜백함수나 프로미스의 then 부분이 실행됩니다.
이때 비동기 메서드들을 여러 번 실행해도 백그라운드에서 동시에 실행되는데 스레드 풀이 있기 때문입니다.
스레드 풀을 사용하는 모듈에는 fs, crypto, zlib, dns.lookup이 있습니다.