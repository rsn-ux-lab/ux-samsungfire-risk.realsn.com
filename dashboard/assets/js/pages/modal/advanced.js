{
  const $modal = document.querySelector(".modal-data-table--advanced");
  const $wrapper = $modal.querySelector(".modal-wrapper");

  /*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
  /**
   *
   * depth : 모달 > 의료기관정보 팝업
   * event : Modal show/hide toggle
   *
   */

  function modalAdvanced(_callback) {
    $.modal({
      isExist: true,
      className: "data-table--advanced",
      on: {
        start() {
          // start callback(모달 생성 전)
        },
        complete() {
          // complete callback(모달 생성 후)

          if (_callback) _callback($wrapper);
        },
        close() {
          // execute close callback(모달 제거 후)
        },
      },
    });
  }
  /*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
  {
    // 박스 접었다 피는 기능 추가 + 펼쳤을때 해당 박스 textarea 포커스
    const $areaBoxes = $wrapper.querySelectorAll(".js-fold-textarea");
    const boxObs = new MutationObserver(function (_mut, _obs) {
      let clickAfterBool = JSON.parse(_mut[0].target.getAttribute("data-textarea-fold"));
      let $btn = _mut[0].target.querySelector(".btn");
      let $btnIcon = $btn.querySelector("i");
      let $form = _mut[0].target.querySelector(".form-fieldset");
      if (clickAfterBool) {
        $btn.classList.add("btn-icon--is-active");
        $btnIcon.classList.remove("icon-svg-chevron-down");
        $btnIcon.classList.add("icon-svg-chevron-up");
        $form.classList.remove("visually-hidden");
      } else {
        $btn.classList.remove("btn-icon--is-active");
        $btnIcon.classList.remove("icon-svg-chevron-up");
        $btnIcon.classList.add("icon-svg-chevron-down");
        $form.classList.add("visually-hidden");
      }
    });
    Array.from($areaBoxes).filter(function (_$areaBox) {
      _$areaBox.querySelector(".btn").addEventListener("click", function () {
        let nowBool = JSON.parse(_$areaBox.getAttribute("data-textarea-fold"));
        _$areaBox.querySelector("textarea").focus();
        _$areaBox.setAttribute("data-textarea-fold", !nowBool);
      });

      boxObs.observe(_$areaBox, { attributes: true });
    });
  }
  /*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
  {
    // 각 영역의 textarea 입력 글자수 return
    const $advanKeywordBoxes = $wrapper.querySelectorAll(".js-text-length");
    const $saveBtn = $wrapper.querySelector(".js-save");
    Array.from($advanKeywordBoxes).forEach(function (_$box) {
      const $cnt = _$box.querySelector(".cnt");
      let $textAreas = [..._$box.querySelectorAll("textarea")];

      $textAreas.forEach(function (_$textArea) {
        _$textArea.addEventListener("keyup", function (e) {
          let allLength = 0;

          $textAreas.forEach(function (_$el) {
            allLength += _$el.value.length;
            if (allLength <= 200) {
              // 총글자수 200 이하
              $cnt.classList.remove("danger-color");
              $saveBtn.removeAttribute("disabled");
            } else if (allLength > 200) {
              // 총글자수 200 초과
              $cnt.classList.add("danger-color");
              $saveBtn.setAttribute("disabled", "disabled");
            }
            $cnt.innerHTML = allLength;
          });
        });
      });
    });
  }
  /*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
  {
    // refresh 버튼 클릭시 해당 영역 textarea 텍스트 전부 삭제
    const $advanKeywordBoxes = $wrapper.querySelectorAll(".js-text-length");
    Array.from($advanKeywordBoxes).forEach(function (_$box) {
      const $articleFooter = _$box.querySelector(".l-article-footer");
      const $refreshBtn = $articleFooter.querySelector(".js-refresh");
      const $cnt = _$box.querySelector(".cnt");

      $refreshBtn.addEventListener("click", function () {
        [..._$box.querySelectorAll("textarea")].forEach(function (_$textArea) {
          _$textArea.value = "";
          $cnt.innerHTML = 0;
          $cnt.classList.remove("danger-color");
        });
      });
    });
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    // 팝업 상단 인풋 활성화시 is-disabled 제거
    const $advanKeywordBoxes = $wrapper.querySelectorAll(".js-text-length");
    Array.from($advanKeywordBoxes).forEach(function (_$box) {
      const $input = _$box.querySelector(".form-fieldset--js-active-input input");
      $input.addEventListener("focus", function () {
        Array.from($advanKeywordBoxes).forEach(function (_$el) {
          _$el.classList.add("is-disabled");
        });
        _$box.classList.remove("is-disabled");
      });
    });
  }
}
