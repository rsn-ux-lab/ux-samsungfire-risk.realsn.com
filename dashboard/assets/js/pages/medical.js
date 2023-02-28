
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