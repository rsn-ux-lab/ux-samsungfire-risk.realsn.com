// const tableTest = document.querySelectorAll("[data-section=연관어분석] .c-table");
// const testClass = new window.TableHilightColor(tableTest);

// window.onLoadResize({
//   callback() {
//     testClass.init();
//   },
// });
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 개별 키워드 상세 분석 > 정보량 추이
   *  block : 차트스위치
   *  event : new Tab
   *
   */

  const $wrapper = document.querySelector('[data-section=정보량추이] [data-article=정보량추이차트] .l-article-body');
  const $nav = document.querySelector('[data-section=정보량추이] [data-article=정보량추이차트] [data-fieldset=차트스위치]');
  const tab = new window.Tab($wrapper, $nav);
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 개별 키워드 상세 분석 > 정보량 추이
   *  block : 차트(캔들차트)
   *  event : new AmCharts
   *
   */

  // 서비스개발팀 개발 환경에서는 return
  if (HOST.localhost || HOST.publish) {
    const $chart = document.querySelector('[data-section=정보량추이] [data-article=정보량추이차트] .js-chart');
    const keywordCandleChart = new rsnCharts.KeywordCandleChart($chart);

    let categorys = ['백내장', '다초점렌즈'];
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
    keywordCandleChart.reDataBinding(datas, categorys); // 데이터 변경시킬때
    keywordCandleChart.reColoring(['#B193E2', '#89DDD8']); // 컬러세팅
  }
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 개별 키워드 상세 분석 > 정보량 추이
   *  block : 차트(라인차트)
   *  event : new AmCharts
   *
   */

  // 서비스개발팀 개발 환경에서는 return
  if (HOST.localhost || HOST.publish) {
    const $section = document.querySelector('[data-article="정보량추이차트"]');
    const $chartDiv = $section.querySelector('.js-chart2');

    // AMchart Loader
    const Keyword1stLineChart = new rsnCharts.Keyword1stLineChart($chartDiv);
    Keyword1stLineChart.options = {
      legend: true,
      useGraphSettings: true,
    };
    let categorys = ['백내장', '다초점렌즈'];
    // prettier-ignore
    let datas = [
     { category: "2022-10", "column-1": 800, "column-2": 70,  },
     { category: "2022-11", "column-1": 300, "column-2": 500, },
     { category: "2022-12", "column-1": 200, "column-2": 100, },
     { category: "2023-01", "column-1": 200, "column-2": 600, },
     { category: "2023-02", "column-1": 200, "column-2": 500, },
     { category: "2023-03", "column-1": 150, "column-2": 500, },
   ];

    // init
    Keyword1stLineChart.reDataBinding(datas, categorys); // 데이터 변경시킬때
    Keyword1stLineChart.reColoring(['#B193E2', '#89DDD8']); // 컬러세팅
  }
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   * 연관어 상세분석 내 개별 키워드 체크박스 라벨 클릭 시 '정보량추이' 및 '연관 의료기관' 우측 라벨 스위치
   *
   */
  const $labels1 = document.querySelectorAll('.js-toggle-label--1st');
  const $labels2 = document.querySelectorAll('.js-toggle-label--2nd');
  const $observeTarget = document.querySelector('[data-article=연관어상세분석-테이블] [data-fieldset=연관어]');
  const chkBoxObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      const chkBox1 = document.querySelector('#checkboxRelatedDetail-left1').parentElement.getAttribute('data-checkbox-value').boolean();
      const chkBox2 = document.querySelector('#checkboxRelatedDetail-left2').parentElement.getAttribute('data-checkbox-value').boolean();

      chkBox1
        ? Array.from($labels1).forEach((_$label1) => {
            _$label1.classList.remove('d-none');
          })
        : Array.from($labels1).forEach((_$label1) => {
            _$label1.classList.add('d-none');
          });

      chkBox2
        ? Array.from($labels2).forEach((_$label2) => {
            _$label2.classList.remove('d-none');
          })
        : Array.from($labels2).forEach((_$label2) => {
            _$label2.classList.add('d-none');
          });
    });
  });
  chkBoxObserver.observe($observeTarget, { attributeFilter: ['data-checkbox-index'] });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   * 연관어 분석 내 '공통 연관어만 보기' On일 때 공통연관어에 hover 하이라이팅
   *
   */
  const $observeTarget = document.querySelector('[data-article=연관어분석-우측테이블] [data-row=공통연관어]');
  const $leftTable = document.querySelector('.c-table--keyword__related-left').classList;
  const $rightTable = document.querySelector('.c-table--keyword__related-right').classList;
  const chkBoxObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      const isChecked = document.querySelector('#checkboxCommonRelated').parentElement.getAttribute('data-checkbox-value').boolean();

      isChecked ? $leftTable.add('common-related--active') + $rightTable.add('common-related--active') + $leftTable.remove('c-table--hover-samsung') + $rightTable.remove('c-table--hover-samsung') : $leftTable.remove('common-related--active') + $rightTable.remove('common-related--active') + $leftTable.add('c-table--hover-samsung') + $rightTable.add('c-table--hover-samsung');
    });
  });
  chkBoxObserver.observe($observeTarget, { attributeFilter: ['data-checkbox-value'] });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  const $relatedAnalLeftTable = document.querySelector('.c-table--keyword__related-left');
  const $relatedAnalRightTable = document.querySelector('.c-table--keyword__related-right');
  const TableRelatedHilighting = new window.KeywordTableRelatedHilighting($relatedAnalLeftTable);
  const TableClickMenu1st = new window.TableClickMenu($relatedAnalLeftTable);
  const TableClickMenu2nd = new window.TableClickMenu($relatedAnalRightTable);
  const TableHover = new window.KeywordTableHover([$relatedAnalLeftTable, $relatedAnalRightTable]);

  const $relatedDetailTable = document.querySelector('.c-table--keyword__related-detail');
  const TableClickMenu3rd = new window.TableClickMenu($relatedDetailTable);
  const TableClickActiveLabel = new window.KeywordTableClickActive($relatedDetailTable);

  const $relatedMedicalTable = document.querySelector('.c-table--keyword__related-medical');
  const TableClickMenu4th = new window.TableClickMenu($relatedMedicalTable);

  window.onLoadResize({
    callback() {
      TableHover.init();
      TableClickActiveLabel.init();
      TableRelatedHilighting.init();
      TableClickMenu1st.init();
      TableClickMenu2nd.init();
      TableClickMenu3rd.init();
      TableClickMenu4th.init();
    },
  });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 개별 키워드 상세 분석 > 연관어 상세 분석 > 정보량추이
   *  block : 차트(라인차트)
   *  event : new AmCharts
   *
   */

  // 서비스개발팀 개발 환경에서는 return
  if (HOST.localhost || HOST.publish) {
    const $section = document.querySelector('[data-article="연관어상세분석-정보량추이"]');
    const $chartDiv = $section.querySelector('.js-chart');

    // AMchart Loader
    const Keyword2ndLineChart = new rsnCharts.Keyword2ndLineChart($chartDiv);
    Keyword2ndLineChart.options = {
      legend: true,
      useGraphSettings: true,
    };
    let categorys = ['병원홍보', '환자의견'];
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
    Keyword2ndLineChart.reDataBinding(datas, categorys); // 데이터 변경시킬때
    Keyword2ndLineChart.reColoring(['#6379B0', '#D58A69']); // 컬러세팅
  }
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  const $card = document.querySelector("[data-article='연관의료기관-차트']");
  const $chartDiv = $card.querySelector('.js-chart');
  let $h1 = $chartDiv.querySelector('h1');
  $chartDiv.removeChild($h1);
  $chartDiv.setAttribute('style', 'height: 636px !important'); // 지워야해요
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
  samsungFrMapDrildownChart.countryClickEvt = function (_ev) {
    let clickId = _ev.target.dataItem.dataContext.id;
    console.log(clickId);
    samsungFrMapDrildownChart.seriesShow(clickId);
  };

  samsungFrMapDrildownChart.dataBind(dataArr); // 전국지도 데이터 바인딩

  samsungFrMapDrildownChart.dataBind(cityDataArr, 'KR-42'); // 지역지도 데이터 바인딩
  // 시군구 클릭시 - 데이터 + 팝업 호출 영역
  samsungFrMapDrildownChart.cityClickEvt = function (_target) {
    console.log(_target);
    console.log('팝업호출 스크립트 추가 영역');
  };
}
