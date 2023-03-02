
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 의료기관 상세 정보 > 정보량 추이
   *  block : 차트스위치
   *  event : new Tab
   *
   */

  const $wrapper = document.querySelector("[data-section=정보량추이] [data-article=정보량추이차트] .l-article-body");
  const $nav = document.querySelector("[data-section=정보량추이] [data-article=정보량추이차트] [data-fieldset=차트스위치]");
  const tab = new window.Tab($wrapper, $nav);
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 의료기관 상세 정보 > 정보량 추이
   *  block : 차트(캔들차트)
   *  event : new AmCharts
   *
   */

  // 서비스개발팀 개발 환경에서는 return
  if (HOST.localhost || HOST.publish) {
    const $chart = document.querySelector("[data-section=정보량추이] [data-article=정보량추이차트] .js-chart");
    const samsungFrOneColumnChart = new rsnCharts.SamsungFrOneColumnChart($chart);

    let categorys = ["블로그", "카페", "커뮤니티", "유튜브", "인스타그램", "지식인"];
    // prettier-ignore
    let datas = [
       { category: "2022-10", "column-1": 500, "column-2": 600, "column-3": 550, "column-4": 650, "column-5": 700, "column-6": 430 },
       { category: "2022-11", "column-1": 300, "column-2": 500, "column-3": 550, "column-4": 650, "column-5": 700, "column-6": 430 },
       { category: "2022-12", "column-1": 200, "column-2": 100, "column-3": 550, "column-4": 650, "column-5": 700, "column-6": 430 },
       { category: "2023-01", "column-1": 200, "column-2": 70, "column-3": 550, "column-4": 650, "column-5": 700, "column-6": 430 },
       { category: "2023-02", "column-1": 200, "column-2": 500, "column-3": 550, "column-4": 650, "column-5": 700, "column-6": 430 },
       { category: "2023-03", "column-1": 150, "column-2": 500, "column-3": 550, "column-4": 650, "column-5": 700, "column-6": 430 },
     ];

    // init
    samsungFrOneColumnChart.reDataBinding(datas, categorys); // 데이터 변경시킬때
    samsungFrOneColumnChart.reColoring(["#87C67C", "#F2D301", "#F3A184", "#F77890", "#EAA6E4", "#7285EB"]); // 컬러세팅
  }
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 의료기관 상세 정보 > 정보량 추이
   *  block : 차트(라인차트)
   *  event : new AmCharts
   *
   */

  // 서비스개발팀 개발 환경에서는 return
  if (HOST.localhost || HOST.publish) {
    const $section = document.querySelector('[data-article="정보량추이차트"]');
    const $chartDiv = $section.querySelector(".js-chart2");

    // AMchart Loader
    const Moral1stLineChart = new rsnCharts.Moral1stLineChart($chartDiv);
    Moral1stLineChart.options = {
      legend: true,
      useGraphSettings: true,
    };
    let categorys = ["블로그", "카페", "커뮤니티", "유튜브", "인스타그램", "지식인"];
    // prettier-ignore
    let datas = [
      { category: "2022-10", "column-1": 500, "column-2": 600, "column-3": 550, "column-4": 650, "column-5": 700, "column-6": 430 },
      { category: "2022-11", "column-1": 300, "column-2": 500, "column-3": 550, "column-4": 650, "column-5": 700, "column-6": 430 },
      { category: "2022-12", "column-1": 200, "column-2": 100, "column-3": 550, "column-4": 650, "column-5": 700, "column-6": 430 },
      { category: "2023-01", "column-1": 200, "column-2": 70, "column-3": 550, "column-4": 650, "column-5": 700, "column-6": 430 },
      { category: "2023-02", "column-1": 200, "column-2": 500, "column-3": 550, "column-4": 650, "column-5": 700, "column-6": 430 },
      { category: "2023-03", "column-1": 150, "column-2": 500, "column-3": 550, "column-4": 650, "column-5": 700, "column-6": 430 },
   ];

    // init
    Moral1stLineChart.reDataBinding(datas, categorys); // 데이터 변경시킬때
    Moral1stLineChart.reColoring(["#87C67C", "#F2D301", "#F3A184", "#F77890", "#EAA6E4", "#7285EB"]); // 컬러세팅
  }
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  const $keywordTable = document.querySelector("[data-section='Top30키워드순위변화'] .c-table");
  const tableHover = new window.TableSameHover($keywordTable);
  const tableActive = new window.TableClickSameActive($keywordTable);
  const TableClickMenu1st = new window.TableClickMenu($keywordTable);

  window.onLoadResize({
    callback() {
      tableHover.init();
      tableActive.init();
      TableClickMenu1st.init();
    },
  });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /*
    *
    * 상황별 preview 가져오기
    *
    **/
  const name = new URLSearchParams(location.search).get("preview");

  switch (name) {
    case "popup-info_search":
      modalInfoSearch();
      break;
  }
}