console.log('keyword');
{
  const $card = document.querySelector("[data-card='Top30키워드지역-차트']");
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

  setTimeout(() => {
    samsungFrMapDrildownChart.dataBind(cityDataArr, 'KR-42'); // 각 도시별 데이터 바인딩
  }, 1000);

  // setTimeout(() => {
  //   samsungFrMapDrildownChart.seriesShow('KR-42'); // 데이터 바인딩 후 드릴다운 지도 포커싱
  // }, 2000);
}
