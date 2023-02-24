const $modal = document.querySelector(".modal-data-table--related");
const $wrapper = $modal.querySelector(".modal-wrapper");

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
/**
 *
 * depth : 모달 > 관련정보팝업
 * event : Modal show/hide toggle
 *
 */

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

  $wrapper.querySelector(".js-btn-set-area").addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("btn-default--is-active");
    const $popup = e.currentTarget.nextElementSibling;
    e.currentTarget.classList.contains("btn-default--is-active")
      ? $popup.style.setProperty("visibility", "visible")
      : $popup.style.setProperty("visibility", "hidden");
  });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
