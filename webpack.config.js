const path = require("path");

module.exports = {
  mode: "none",
  //-- 어떠한 형태로 번들링 할 것인지를 정하는 Key로 총 3개만 존재한다.
  //-- "development" : 개발방식(가독성은 매우 떨어지나, 일반적인 개발코드처럼 보임)
  //-- "production" : '제품'형태, 즉, client에게 보낼 코드로 매개변수, 들여쓰기 등 모든 작업을 최소화 시킨다. (uglify, 어그리파이 라고도 부른다,난독화)
  //최소화시키므로, 개발코드 레벨에서 요소되는 데이터 용량도 최소화 시킬 수 있다.
  //.min.file 이라고 붙어있는 것이 여기에 해당한다.
  // 클라이언트는 코드를 확인 할 필요가 없으므로 개발가독성에 대한 고려가 굳이 필요 없는 것이 주요 관점
  //-- "none" : 단순 번들링만 진행된다.
  entry: "./src/index.js",
  //-- 직역하였을 때 '진입'에 해당하며, webpack SW가 번들링할 기준이 될 '메인'파일을 설정하는 자리이다.
  //-- "./src/index.js"라고 값(Value)을 작성하면, 해당 index.js 기준으로 모든 의존관계를 끌어모아 번들링 하겠다는 뜻이 된다.

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./src/index.bundle.js",
    //-- 번들링이 완료될 js파일을 말 그대로 출력하는 지정값. 기본적으로 두개의 하위 객체가 필요하다.
    //--path : 어디에 번들링 파일을 저장할 것인지 정해준다.
    //--- 보동 distribute의 준말로, dist라는 디렉토리에 저장하는 것이 오랜 관습이다.
    //--- 경로를 판단하기 위해 path 모듈을 불어와 사용하는데, path모듈이 지원하는 resolve()매서드를 통해 절대경로 방식으로 dist 디렉토리를 지정하는 편이다. 상대개념으로 join() 매서드가 있다.
    //-- fileName : 파일이름을 무엇으로 정할 것인지 지정해주는 키이며, 관습적으로는 file.bundle.js 혹은 배포용일 경우, file.min.js와 같은 이름으로 빌드버전과 배포 버전을 구분하는 방식을 채택한다.
  },
};
