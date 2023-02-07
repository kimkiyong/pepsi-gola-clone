//DOM select(선택)

const opener = document.querySelector(".opener"); 
const closer = document.querySelector("#closer");//기호
const menu = document.querySelector(".menu");

opener.addEventListener("click", function () {
     menu.classList.remove("hide")

    console.log("사이드 메뉴를 호출했습니다..");
      });

      //addEventListener 이벤트 추가
    //event제거 -? removed..

    closer.addEventListener("click", function () {
      menu.classList.add("hide")
 
      console.log("사이드 메뉴를 추가했습니다..");
       });