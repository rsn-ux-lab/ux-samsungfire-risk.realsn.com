
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

    let categorys = ["블로그", "카페", "커뮤니티", "유튜브", "인스타그램", "지식인", "테스트테스트"];
    // prettier-ignore
    let datas = [
       { category: "2022-10", "column-1": 500, "column-2": 100000, "column-3": 5000, "column-4": 10000, "column-5": 10, "column-6": 100000, "column-7": 100000, },
       { category: "2022-11", "column-1": 500, "column-2": 100000, "column-3": 5000, "column-4": 10000, "column-5": 10, "column-6": 100000, "column-7": 100000, },
       { category: "2022-12", "column-1": 500, "column-2": 100000, "column-3": 5000, "column-4": 10000, "column-5": 10, "column-6": 100000, "column-7": 100000, },
       { category: "2023-01", "column-1": 500, "column-2": 100000, "column-3": 5000, "column-4": 10000, "column-5": 10, "column-6": 100000 , "column-7": 100000,},
       { category: "2023-02", "column-1": 500, "column-2": 100000, "column-3": 5000, "column-4": 10000, "column-5": 10, "column-6": 100000, "column-7": 100000, },
       { category: "2023-03", "column-1": 500, "column-2": 100000, "column-3": 5000, "column-4": 10000, "column-5": 10, "column-6": 100000, "column-7": 100000, },
     ];

    // init
    samsungFrOneColumnChart.isPercent = false;
    samsungFrOneColumnChart.reDataBinding(datas, categorys); // 데이터 변경시킬때
    samsungFrOneColumnChart.reColoring(["#87C67C", "#F2D301", "#F3A184", "#F77890", "#EAA6E4", "#7285EB", "#8b8b8b"]); // 컬러세팅
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
    Moral1stLineChart.isPercent = false;
    Moral1stLineChart.reDataBinding(datas, categorys); // 데이터 변경시킬때
    Moral1stLineChart.reColoring(["#87C67C", "#F2D301", "#F3A184", "#F77890", "#EAA6E4", "#7285EB"]); // 컬러세팅
  }
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   * depth : 의료기관 상세 정보 > Top30 키워드 순위 변화
   * block : 키워드 상세 설정 버튼
   * event : layer show/hide toggle
   *
   */

  document.querySelector(".js-btn-set-keyword-detail").addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("btn-default--is-active");
    const $popup = e.currentTarget.nextElementSibling;
    e.currentTarget.classList.contains("btn-default--is-active") ? $popup.style.setProperty("visibility", "visible") : $popup.style.setProperty("visibility", "hidden");
  });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  const $keywordTable = document.querySelector("[data-section='Top30키워드순위변화'] .c-table");
  const tableHover = new window.TableSameHover($keywordTable);
  const tableActive = new window.TableClickSameActive($keywordTable);
  const TableClickMenu1st = new window.TableClickMenu($keywordTable);
  const TableEmptyDimmed = new window.TableEmptyDimmed($keywordTable);

  window.onLoadResize({
    callback() {
      tableHover.init();
      tableActive.init();
      TableClickMenu1st.init();
      TableEmptyDimmed.init();
    },
  });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   * depth : 의료기관 상세 정보 > 게시글 목록
   * block : 필터 조건 설정 버튼
   * event : layer show/hide toggle
   *
   */

  document.querySelector(".js-btn-set-article-filter").addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("btn-default--is-active");
    const $popup = e.currentTarget.nextElementSibling;
    e.currentTarget.classList.contains("btn-default--is-active") ? $popup.style.setProperty("visibility", "visible") : $popup.style.setProperty("visibility", "hidden");
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