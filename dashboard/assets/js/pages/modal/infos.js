{
  const $modal = document.querySelector(".modal-data-table--infos");
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

  function modalInfos(_callback) {
    $.modal({
      isExist: true,
      className: "data-table--infos",
      on: {
        start() {
          // start callback(모달 생성 전)
        },
        complete() {
          // complete callback(모달 생성 후)

          if (_callback) _callback($wrapper);
          $wrapper.querySelector("[data-article=의료기관팝업-게시글목록] .form-search input").focus();
        },
        close() {
          // execute close callback(모달 제거 후)
        },
      },
    });
  }
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 건강정보 키워드 트렌드 > Top30 키워드 분석 > 정보량 추이
   *  block : 차트(라인차트)
   *  event : new AmCharts
   *
   */

  // 서비스개발팀 개발 환경에서는 return
  if (HOST.localhost || HOST.publish) {
    const $section = document.querySelector('[data-article="의료기관정보량"]');
    const $chartDiv = $section.querySelector(".js-chart");

    // AMchart Loader
    const KeywordPopupLineChart = new rsnCharts.KeywordPopupLineChart($chartDiv);
    KeywordPopupLineChart.options = {
      legend: true,
      useGraphSettings: true,
    };
    let categorys = ["백내장", "다초점렌즈"];
    // prettier-ignore
    let datas = [
    { category: "2022-04", "column-1": 550, "column-2": 370, },
    { category: "2022-05", "column-1": 420, "column-2": 720, },
    { category: "2022-06", "column-1": 780, "column-2": 870, },
    { category: "2023-07", "column-1": 150, "column-2": 210, },
    { category: "2023-08", "column-1": 110, "column-2": 200, },
    { category: "2023-09", "column-1": 148, "column-2": 220, },
  ];

    // init
    KeywordPopupLineChart.reDataBinding(datas, categorys); // 데이터 변경시킬때
    KeywordPopupLineChart.reColoring(["#b193e2", "#89DDD8"]); // 컬러세팅
  }
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
