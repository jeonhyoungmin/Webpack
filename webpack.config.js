const path = require("path");
// console.log(path);
/*
  ? 1. 디렉토리를 사용하기 위해 commonJS 방식으로 "경로(PATH)"를 제어하는 모듈을 import했음.
  * moduleJS === mJS === ESM(ECMAScript Module)도 동일하게 pakage.json에 설정하면 사용할 수 있다.
*/

// module.exports = {
//   mode: "none",
//   //-- 어떠한 형태로 번들링 할 것인지를 정하는 Key로 총 3개만 존재한다.
//   //-- "development" : 개발방식(가독성은 매우 떨어지나, 일반적인 개발코드처럼 보임)
//   //-- "production" : '제품'형태, 즉, client에게 보낼 코드로 매개변수, 들여쓰기 등 모든 작업을 최소화 시킨다. (uglify, 어그리파이 라고도 부른다,난독화)
//   //최소화시키므로, 개발코드 레벨에서 요소되는 데이터 용량도 최소화 시킬 수 있다.
//   //.min.file 이라고 붙어있는 것이 여기에 해당한다.
//   // 클라이언트는 코드를 확인 할 필요가 없으므로 개발가독성에 대한 고려가 굳이 필요 없는 것이 주요 관점
//   //-- "none" : 단순 번들링만 진행된다.
//   entry: "./src/index.js",
//   //-- 직역하였을 때 '진입'에 해당하며, webpack SW가 번들링할 기준이 될 '메인'파일을 설정하는 자리이다.
//   //-- "./src/index.js"라고 값(Value)을 작성하면, 해당 index.js 기준으로 모든 의존관계를 끌어모아 번들링 하겠다는 뜻이 된다.

//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "./src/index.bundle.js",
//     //-- 번들링이 완료될 js파일을 말 그대로 출력하는 지정값. 기본적으로 두개의 하위 객체가 필요하다.
//     //--path : 어디에 번들링 파일을 저장할 것인지 정해준다.
//     //--- 보동 distribute의 준말로, dist라는 디렉토리에 저장하는 것이 오랜 관습이다.
//     //--- 경로를 판단하기 위해 path 모듈을 불어와 사용하는데, path모듈이 지원하는 resolve()매서드를 통해 절대경로 방식으로 dist 디렉토리를 지정하는 편이다. 상대개념으로 join() 매서드가 있다.
//     //-- fileName : 파일이름을 무엇으로 정할 것인지 지정해주는 키이며, 관습적으로는 file.bundle.js 혹은 배포용일 경우, file.min.js와 같은 이름으로 빌드버전과 배포 버전을 구분하는 방식을 채택한다.
//   },
// };

// 알쓸신잡 코드방식 (training -9)
// ? 2. 함수선언인 setConfig()는 맨 아래의 코드를 확인 한 뒤 돌아볼 것
function setConfig(mode = "development", pathAndfilename, fileformat) {
  if (
    typeof mode === "string" &&
    typeof pathAndfilename === "string" &&
    typeof fileformat === "string"
  ) {
    // ? 4. if(조건식)
    /*
     *함수 호출 과정에서 원하지 않는 데이터타입이 입력되어 오작동이 일어나지 않도록
     *조건을 처리했다. (모든 파일은 문자열로 처리된다는 조건을 활용)
     */
    function setUpFileFormat(fileformat) {
      switch (fileformat) {
        case "javascript":
          return "js";
          break;
        case "typescript":
          return "ts";
          break;
        case "js":
          return "js";
          break;
        case "ts":
          return "ts";
          break;
        default:
          return console.log("need string check fileformat");
      }
    }
    /* 
    ? 5. 매개변수 fileformat 데이터를 원하는 형태로 "가공"하는 형태를 만들기 위해
    *내부함수 격인 함수를 생성. 변수의 경우라면 지역변수에 해당하며, closure라고 부른다.
    *한번만 실행할 것이기 떄문에 내부함수로 제작.
    *원하는 경우의 수를 고려하여 if문이 아닌 switch문으로 처리. if(), else if()로도 처리 가능
    *형태는 안티패턴이긴 하지만, switch의 가독성과 처리방식을 첨쳐볼 것

*/
    const setFileFormat = setUpFileFormat(fileformat);
    // ? 6. 위 내부 함수를 한 번 호출하여, 리턴값을 받는 상수를 마련
    // * 결과적으로 setFileformat 변수는 간단한 문자열이 된 것.
    // * 내부 함수를 사용하는 등 복잡한 과정이 존재하지만, 덕분에 리터럴을 제거하고 잘못된 실행을 방지하는 효과
    const setWebpackObject = {
      mode: mode,
      entry: `./src/${pathAndfilename}.${setFileFormat}`,
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: `${pathAndfilename}.bundle.${setFileFormat}`,
      },
    };
    /*
    ? 7. 마치 정수기 필터가 작동하듯이,
    * 일반적으로 리터럴로 작성하는 파일을 이상하게 꼬아 놓은 것이므로 '목적'과는 완전히 정반대 코드임을 확인
    * config 파일을 이렇게 차리하진 않는 점 (한번 정의 한 것은 특별한 경우가 아니라면 좀처럼 바꾸지 않는다.)
    * 자바스크립트 언어 측면에서는 '객채'를 원하는 형태로 만들어내는 '함수'를 만들어 자동화 했다는 점이 포인트
*/
    console.log("complete!");
    return setWebpackObject;
  } else {
    return console.error("need parameter to be string");
  }
}

// ? 3. cJS 방식으로 함수를 대입한 것을 알 수 있다.
/*
 * webpack.config.js <-- 파일 조건상 객체 데이터타입을 export 해야만 하는데
 * setConfig() 함수는 리턴타입이 "객체"라는 뜻이 된다.
 * 다시말해 webpack.config.js 혹은 webpack이 '필요한 조건'은 무엇인지 확인하고 대응하는 것고
 * 함수가 객체를 리턴하는 것을 구분할 필요가있다.
 */
module.exports = setConfig("development", "index", "js");
/*
  ? 8. 결과적으로 module.exports 명령
  * 모듈화시킨 '객체'는 상당히 자주 사용 하는 코드 디자인 패턴이기 때문에 웹팩을 설정하는 주요 key를 적응하면서,
  * 객체를 리턴하고, 함수를 호출하고, 필요한 만큼 데이터를 가공하는 일련의 작업을 처리하는 훈련이 필요하다.
*/
