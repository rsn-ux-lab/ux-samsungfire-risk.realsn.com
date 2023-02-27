{
  const $modal = document.querySelector(".modal-data-table--keyword");
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

  function modalKeyword(_callback) {
    $.modal({
      isExist: true,
      className: "data-table--keyword",
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
}
