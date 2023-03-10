/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
/**
 *
 * depth : 모달 > 관련정보팝업
 * event : Modal show/hide toggle
 *
 */

const $modal = document.querySelector(".modal-data-table--related");
const $wrapper = $modal.querySelector(".modal-wrapper");

function modalRelated(_callback) {
  $.modal({
    isExist: true,
    className: "data-table--related",
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
  /**
   *
   * depth : 모달 > 관련정보팝업
   * block : 지역 설정 버튼
   * event : layer show/hide toggle
   *
   */

  $wrapper.querySelector(".js-btn-set-filter").addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("btn-default--is-active");
    const $popup = e.currentTarget.nextElementSibling;
    e.currentTarget.classList.contains("btn-default--is-active") ? $popup.style.setProperty("visibility", "visible") : $popup.style.setProperty("visibility", "hidden");

    setTimeout(() => {
      document.addEventListener("click", function(ev) {
        if (!(Boolean(ev.target.closest(".aside-setting-filter")))) {
          $popup.style.setProperty("visibility", "hidden");
          $wrapper.querySelector(".js-btn-set-filter").classList.remove("btn-default--is-active");
          document.removeEventListener("click", arguments.callee);
        }
      });
    }), 200;
  });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 모달 > 관련정보팝업 > 필터 조건 설정 레이어
   *  block : 초기화 버튼
   *  event : form 요소 초기화
   *
   */

  const $fieldset = $wrapper.querySelector("[data-checkbox-index]");
  const $btnRefresh = $wrapper.querySelector("[data-button=새로고침]");

  $btnRefresh.addEventListener("click", (e) => {
    let childLen = '';
    for (i = 0; i< $fieldset.children.length; i++) {
      childLen += i;
      if (i != $fieldset.children.length-1)  childLen += ', ';
    };
    $fieldset.setAttribute("data-checkbox-index", childLen);
  });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
