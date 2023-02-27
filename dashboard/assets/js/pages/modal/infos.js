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
    const Moral2ndLineChart = new rsnCharts.Moral2ndLineChart($chartDiv);
    Moral2ndLineChart.options = {
      legend: true,
      useGraphSettings: true,
    };
    let categorys = ["정보량 증감률", "정보량"];
    // prettier-ignore
    let datas = [
    { category: "2022-04", "column-1": 9800, "column-2": 25, },
    { category: "2022-05", "column-1": 15500, "column-2": 18, },
    { category: "2022-06", "column-1": 7800, "column-2": 87, },
    { category: "2023-07", "column-1": 15000, "column-2": 21, },
    { category: "2023-08", "column-1": 11000, "column-2": 20, },
    { category: "2023-09", "column-1": 14800, "column-2": 22, },
  ];

    // init
    Moral2ndLineChart.reDataBinding(datas, categorys); // 데이터 변경시킬때
    Moral2ndLineChart.reColoring(["#B8CF5A", "#739EDE"]); // 컬러세팅
  }
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
