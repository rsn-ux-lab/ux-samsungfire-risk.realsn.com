{
  /**
   *
   *  depth : 건간정보 키워드 트렌드 > 상단검색영역
   *  block : datepicker(달력)
   *  event : input 강제로 checked
   *
   */

  const $section = document.querySelector('[data-section=상단검색영역]');
  const $datepicker = $section.querySelector('.ui_datepickers .grps');
  const $inpFirst = $datepicker.childNodes.item(0).querySelector('input');

  $inpFirst.click();
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 건간정보 키워드 트렌드 > 상단검색영역
   *  block : 초기화 버튼
   *  event : form 요소 초기화
   *
   */

  const $section = document.querySelector('[data-section=상단검색영역]');
  const $article = $section.querySelector('[data-article=검색조건]');
  const $fieldsets = $article.querySelectorAll('[data-checkbox-index]');
  const $datepicker = $section.querySelector('.ui_datepickers .grps');
  const $inpFirst = $datepicker.childNodes.item(0).querySelector('input');
  const $btnRefresh = $section.querySelector('[data-button=새로고침]');

  $btnRefresh.addEventListener('click', (e) => {
    $inpFirst.click();
    $fieldsets.forEach((_$el) => _$el.setAttribute('data-checkbox-index', ''));
  });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 건간정보 키워드 트렌드 > 정보량 추이
   *  block : 차트스위치
   *  event : new Tab
   *
   */

  const $wrapper = document.querySelector('[data-section=정보량추이] [data-article=정보량추이차트] .l-article-body');
  const $nav = document.querySelector('[data-section=정보량추이] [data-article=정보량추이차트] [data-fieldset=차트스위치]');
  const option = {
    autoHeight: true,
  };
  const tab = new window.Tab($wrapper, $nav, option);
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 건간정보 키워드 트렌드 > 정보량 추이
   *  block : 차트(캔들차트)
   *  event : new AmCharts
   *
   */
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 건간정보 키워드 트렌드 > 정보량 추이
   *  block : 차트(라인차트)
   *  event : new AmCharts
   *
   */
  const $section = document.querySelector('[data-article="정보량추이차트"]');
  const $chartDiv = $section.querySelector('.js-chart2');

  // AMchart Loader
  const Moral1stLineChart = new rsnCharts.Moral1stLineChart($chartDiv);
  Moral1stLineChart.options = {
    legend: true,
    useGraphSettings: true,
  };
  let categorys = ['블로그', '카페'];
  // prettier-ignore
  let datas = [
     { category: "2022-10", "column-1": 500, "column-2": 600, },
     { category: "2022-11", "column-1": 300, "column-2": 500, },
     { category: "2022-12", "column-1": 200, "column-2": 100, },
     { category: "2023-01", "column-1": 200, "column-2": 70, },
     { category: "2023-02", "column-1": 200, "column-2": 500, },
     { category: "2023-03", "column-1": 150, "column-2": 500, },
   ];

  // init
  Moral1stLineChart.reDataBinding(datas, categorys); // 데이터 변경시킬때
  Moral1stLineChart.reColoring(['#87C67C', '#F2D301']); // 컬러세팅
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   * depth : 건간정보 키워드 트렌드 > Top30 키워드 순위 변화
   * block : 지역 설정 버튼
   * event : layer show/hide toggle
   *
   */

  document.querySelector('.js-btn-set-area').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('btn-default--is-active');
    const $popup = e.currentTarget.nextElementSibling;
    e.currentTarget.classList.contains('btn-default--is-active') ? $popup.style.setProperty('visibility', 'visible') : $popup.style.setProperty('visibility', 'hidden');
  });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 건간정보 키워드 트렌드 > Top30 키워드 순위 변화 > 지역 설정 레이어
   *  block : 초기화 버튼
   *  event : form 요소 초기화
   *
   */

  const $section = document.querySelector('[data-section=Top30키워드순위변화]');
  const $fieldset = $section.querySelector('[data-checkbox-index]');
  const $btnRefresh = $section.querySelector('[data-button=새로고침]');

  $btnRefresh.addEventListener('click', (e) => {
    $fieldset.setAttribute('data-checkbox-index', '');
  });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   * depth : 건간정보 키워드 트렌드 > Top30 키워드 분석
   * block : 축 설정 버튼
   * event : layer show/hide toggle
   *
   */

  document.querySelector('.js-btn-set-coord').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('btn-default--is-active');
    const $popup = e.currentTarget.nextElementSibling;
    e.currentTarget.classList.contains('btn-default--is-active') ? $popup.style.setProperty('visibility', 'visible') : $popup.style.setProperty('visibility', 'hidden');
  });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 건간정보 키워드 트렌드 > Top30 키워드 분석 > 축 설정 레이어
   *  block : 초기화 버튼
   *  event : form 요소 초기화
   *
   */
  // const $section = document.querySelector("[data-section=Top30키워드분석]");
  // const $fieldset = $section.querySelector("[data-select-index]");
  // const $btnRefresh = $section.querySelector("[data-button=새로고침]");
  // $btnRefresh.addEventListener("click", (e) => {
  //   $fieldset.setAttribute("data-select-index", "");
  // });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  const $keywordTable = document.querySelector("[data-section='Top30키워드순위변화'] .c-table");
  const tableHover = new window.TableSameHover($keywordTable);
  const tableActive = new window.TableClickSameActive($keywordTable);
  const TableClickMenu1st = new window.TableClickMenu($keywordTable);
  const TableClickMenu2nd = new window.TableClickMenu(document.querySelector("[data-article='연관어-테이블'] .c-table"));

  window.onLoadResize({
    callback() {
      tableHover.init();
      tableActive.init();
      TableClickMenu1st.init();
      TableClickMenu2nd.init();
    },
  });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 건강정보 키워드 트렌드 > Top30 키워드 분석
   *  block : 차트(xy차트)
   *  event : new AmCharts
   *
   */
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
  const $section = document.querySelector('[data-article="정보량추이-2depth"]');
  const $chartDiv = $section.querySelector('.js-chart');

  // AMchart Loader
  const Moral2ndLineChart = new rsnCharts.Moral2ndLineChart($chartDiv);
  Moral2ndLineChart.options = {
    legend: true,
    useGraphSettings: true,
  };
  let categorys = ['정보량 증감률', '정보량'];
  // prettier-ignore
  let datas = [
    { category: "2022-10", "column-1": 9800, "column-2": 25, },
    { category: "2022-11", "column-1": 15500, "column-2": 18, },
    { category: "2022-12", "column-1": 7800, "column-2": 87, },
    { category: "2023-01", "column-1": 15000, "column-2": 21, },
    { category: "2023-02", "column-1": 11000, "column-2": 20, },
    { category: "2023-03", "column-1": 14800, "column-2": 22, },
  ];

  // init
  Moral2ndLineChart.reDataBinding(datas, categorys); // 데이터 변경시킬때
  Moral2ndLineChart.reColoring(['#B8CF5A', '#739EDE']); // 컬러세팅
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 건강정보 키워드 트렌드 > Top30 키워드 분석 > 연관어
   *  block : 차트(워드 클라우드)
   *  event : new AmCharts
   *
   *  [data 정의]
   *  name : 차트에 표시 될 이름
   *  fill : 색상 (질병-#B28838, 치료법-#985C6D, 의료기관-#58A277)
   *  value : 정보량
   *  fluc : 정보량증감률
   *  uw : 질병일 경우 입력, 질병이 아닌 경우 ''
   *
   */
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 건간정보 키워드 트렌드 > Top30 키워드ㆍ지역
   *  block : 키워드/지역 스위치
   *  event : new Tab
   *
   */

  const $slideWrapper = document.querySelector('[data-section=Top30키워드지역] [data-article=테이블n차트] > .l-section-body');
  const $navWrapper = document.querySelector('[data-section=Top30키워드지역] [data-fieldset=키워드n지역]');
  const tab = new window.Tab($slideWrapper, $navWrapper);
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 건간정보 키워드 트렌드 > Top30 키워드ㆍ지역 > 키워드
   *  block : 차트/테이블 스위치
   *  event : new Tab
   *
   */

  const $slideWrapper = document.querySelector('[data-section=Top30키워드지역] [data-article=키워드] .l-article-body');
  const $navWrapper = document.querySelector('[data-section=Top30키워드지역] [data-article=키워드] [data-fieldset=차트n테이블]');
  const tab = new window.Tab($slideWrapper, $navWrapper);
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 건간정보 키워드 트렌드 > Top30 키워드ㆍ지역 > 지역
   *  block : 차트/테이블 스위치
   *  event : new Tab
   *
   */

  const $slideWrapper = document.querySelector('[data-section=Top30키워드지역] [data-article=지역] .l-article-body');
  const $navWrapper = document.querySelector('[data-section=Top30키워드지역] [data-article=지역] [data-fieldset=차트n테이블]');
  const tab = new window.Tab($slideWrapper, $navWrapper);
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 건간정보 키워드 트렌드 > Top30 키워드ㆍ지역 > 키워드
   *  block : 차트(전국지도)
   *  event : new AmCharts
   *
   *
   */
  const $section = document.querySelector("[data-section='Top30키워드지역']");
  const $article = $section.querySelector("[data-article='키워드']");
  const $chartDiv = $article.querySelector('.js-chart');
  let $h1 = $article.querySelector('h1');
  $chartDiv.removeChild($h1);
  /**
   *
   * 예시 데이터 양이 많아지면 보기 흉해서
   * 일단 강원도 데이터만 예시로 작성해서 넣어두었습니다~~
   *
   */

  // ---------------------------------임의 데이터 생성 영역-------------------------------------
  let dataArr = [];
  let cityDataArr = [
    {
      id: '125', // 연결 값 - 원주
      value: Math.floor(Math.random() * 51), //정보량
    },
    {
      id: '139', // 연결 값 - 인제
      value: Math.floor(Math.random() * 51), //정보량
    },
    {
      id: '138', // 양구
      value: Math.floor(Math.random() * 51), //정보량
    },
    {
      id: '137', // 화천
      value: Math.floor(Math.random() * 51), //정보량
    },
    {
      id: '136', // 철원
      value: Math.floor(Math.random() * 51), //정보량
    },
    {
      id: '124', // 춘천
      value: Math.floor(Math.random() * 51), //정보량
    },
    {
      id: '131', // 흥천
      value: Math.floor(Math.random() * 51), //정보량
    },
    {
      id: '141', // 양양
      value: Math.floor(Math.random() * 51), //정보량
    },
    {
      id: '132', // 횡성
      value: Math.floor(Math.random() * 51), //정보량
    },
    {
      id: '129', // 속초
      value: Math.floor(Math.random() * 51), //정보량
    },
    {
      id: '129', // 속초
      value: Math.floor(Math.random() * 51), //정보량
    },
    {
      id: '140', // 고성
      value: Math.floor(Math.random() * 51), //정보량
    },
    {
      id: '126', // 강릉
      value: Math.floor(Math.random() * 51), //정보량
    },
    {
      id: '134', // 평창
      value: Math.floor(Math.random() * 51), //정보량
    },
    {
      id: '135', // 정선
      value: Math.floor(Math.random() * 51), //정보량
    },
    {
      id: '133', // 영월
      value: Math.floor(Math.random() * 51), //정보량
    },
    {
      id: '130', // 삼척
      value: Math.floor(Math.random() * 51), //정보량
    },
    {
      id: '128', // 동해
      value: Math.floor(Math.random() * 51), //정보량
    },
    {
      id: '127', // 태백
      value: Math.floor(Math.random() * 51), //정보량
    },
  ];

  for (let i = 11; i <= 50; i++) {
    let korName;
    if (i == 49) korName = '제주';
    if (i == 48) korName = '경남';
    if (i == 47) korName = '경북';
    if (i == 46) korName = '전남';
    if (i == 45) korName = '전북';
    if (i == 44) korName = '충남';
    if (i == 43) korName = '충북';
    if (i == 42) korName = '강원';
    if (i == 41) korName = '경기';
    if (i == 31) korName = '울산';
    if (i == 30) korName = '대전';
    if (i == 29) korName = '광주';
    if (i == 28) korName = '인천';
    if (i == 27) korName = '대구';
    if (i == 26) korName = '부산';
    if (i == 11) korName = '서울';
    if (i == 50) korName = '세종';
    if (korName) {
      dataArr.push({
        id: 'KR-' + i, // 연결 값 - 대전
        korName: korName, // 말풍선 이름 명시
        value: Math.floor(Math.random() * 51), // 정보량
      });
      // *** 아래 형태로 데이터 바인딩 부탁드립니다
      // {
      //    id: 'KR-30',        // 연결 값 - 대전
      //    korName: '대전',  // 말풍선 이름 명시
      //    value: Math.floor(Math.random() * 51), // 정보량
      // }
    }
  }

  // ---------------------------------페이지 스크립트 영역-------------------------------------
  let samsungFrMapDrildownChart = new rsnCharts.SamsungFrMapDrildownChart($chartDiv, dataArr); // 선언과 동시에 지도 영역 draw
  samsungFrMapDrildownChart.dataBind(dataArr); // 전국지도 데이터 바인딩

  // 도시 클릭시 - 지도차트 드릴다운
  samsungFrMapDrildownChart.countryClickEvt(function (_ev) {
    let clickId = _ev.target.dataItem.dataContext.id;
    console.log(clickId);
    samsungFrMapDrildownChart.seriesShow(clickId);
  });

  // 시군구 클릭시 - 데이터 + 팝업 호출 영역
  samsungFrMapDrildownChart.cityClickEvt = function (_target) {
    console.log(_target);
    console.log('팝업호출 스크립트 추가 영역');
  };
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 건간정보 키워드 트렌드 > Top30 키워드ㆍ지역 > 지역
   *  block : 차트(워드 클라우드)
   *  event : new AmCharts
   *
   *  [data 정의]
   *  name : 차트에 표시 될 이름
   *  fill : 색상 (질병-#B28838, 치료법-#985C6D, 의료기관-#58A277)
   *  value : 정보량
   *  fluc : 정보량증감률
   *  uw : 질병일 경우 입력, 질병이 아닌 경우 ''
   *
   */
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
