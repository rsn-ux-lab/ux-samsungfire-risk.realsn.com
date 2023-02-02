$(function () {
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     * 비밀번호 변경 - 유효성체크
     *
     **/
     const $login = document.querySelector(".l-member--pw-set");
    //  const $inpId = $login.querySelector(".form-row[data-row=id] input");
    //  const $inpPass = $login.querySelector(".form-row[data-row=password] input");
     const $btnEyes = $login.querySelectorAll(".btn-eye");
    //  const $btnLogin = $login.querySelector(".btn-login");
 
     // ID & Pass, Empity 상태에서 button 비활성화
    //  [$inpId, $inpPass].forEach((_$el) => {
    //    _$el.addEventListener("keyup", (e) => {
    //      if (Boolean($inpId.value) && Boolean($inpPass.value)) $btnLogin.removeAttribute("disabled");
    //      else $btnLogin.setAttribute("disabled", "");
    //    });
    //  });
 
     // 비밀번호 미리보기
     $btnEyes.forEach(function(_$btnEye) {
       _$btnEye.addEventListener("click", (e) => {
         e.target.classList.toggle("btn-eye--is-active");
 
         const isActive = e.target.classList.contains("btn-eye--is-active");
 
         if (isActive) e.target.parentElement.querySelector("input").setAttribute("type", "text");
         else e.target.parentElement.querySelector("input").setAttribute("type", "password");
         e.target.dispatchEvent(new Event("change"));
       });
     })
   }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
});