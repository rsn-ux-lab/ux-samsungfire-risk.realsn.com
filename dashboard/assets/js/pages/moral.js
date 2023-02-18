/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   * 검색기간 input 강제로 checked
   *
   */

  setTimeout(() => {
    const $datepicker = document.querySelector(".ui_datepickers .grps");
    const $inpMonth = $datepicker?.childNodes.item(2).querySelector("input");

    $inpMonth && ($inpMonth.checked = true);
  }, 1000);
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

  const $wrapper = document.querySelector("[data-section=정보량추이] [data-article=정보량추이차트] .l-article-body");
  const $nav = document.querySelector("[data-section=정보량추이] [data-article=정보량추이차트] [data-fieldset=차트스위치]");
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

  const $chart = document.querySelector("[data-section=정보량추이] [data-article=정보량추이차트] .js-chart");
  var chart = AmCharts.makeChart($chart, {
    hideCredits: true,
    type: "serial",
    path: "//public.realsn.com/libs/amcharts/v3",
    categoryField: "category",
    addClassNames: true,
    fontSize: 12,
    columnWidth: 0.4,
    autoMarginOffset: 0,
    marginRight: 10,
    marginTop: 35,
    colors: ["#87C67C", "#F2D301"],
    color: "#505050",
    categoryAxis: {
      axisColor: "#ededef",
      labelOffset: -2,
      equalSpacing: true,
      color: "#555555",
      gridThickness: 0,
      fontSize: 11,
    },
    chartCursor: {
      enabled: true,
      animationDuration: 0,
      categoryBalloonDateFormat: "MM-DD",
      categoryBalloonColor: "#505050 ",
      cursorAlpha: 0.1,
      cursorColor: "#000000",
      fullWidth: true,
    },
    trendLines: [],
    graphs: [
      {
        // "balloonText": "<strong style='color: #5699d5;'>[[title]]</strong><span style='color:#5699d5; font-size: 12px;'>: [[value]]</span> <span style='color:#5699d5'>([[percents]]%)</span>",
        balloonText: "<strong style='color: #333333;'>[[title]]: [[value]] <span style='font-size: 11px;'>([[percents]]%)</span></strong>",
        fillAlphas: 1,
        id: "AmGraph-1",
        fontSize: 14,
        color: "#ffffff",
        title: "블로그",
        type: "column",
        valueField: "column-1",
      },
      {
        // "balloonText": "<strong style='color: #de6a6a;'>[[title]]</strong><span style='color:#de6a6a; font-size: 12px;'>: [[value]]</span> <span style='color:#de6a6a'>([[percents]]%)</span>",
        balloonText: "<strong style='color: #333333;'>[[title]]: [[value]] <span style='font-size: 11px;'>([[percents]]%)</span></strong>",
        fillAlphas: 1,
        id: "AmGraph-2",
        fontSize: 14,
        color: "#ffffff",
        title: "카페",
        type: "column",
        valueField: "column-2",
      },
    ],
    guides: [],
    valueAxes: [
      {
        id: "ValueAxis-1",
        stackType: "regular",
        zeroGridAlpha: 0,
        axisThickness: 0,
        color: "#555555",
        fontSize: 11,
        gridAlpha: 1,
        gridColor: "#EDEDEF",
        tickLength: 0,
        title: "",
      },
    ],
    allLabels: [],
    balloon: {
      fillAlpha: 0.95,
      borderThickness: 1,
      animationDuration: 0,
    },
    legend: {
      enabled: true,
      align: "center",
      markerType: "round",
      autoMargins: false,
      color: "#555555",
      fontSize: 11,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 10,
      markerSize: 8,
      position: "top",
      spacing: 20,
      valueFunction: get_chartLegendValueText,
      valueWidth: 60,
      valueAlign: "right",
      equalWidths: false,
      verticalGap: 0,
      listeners: [
        [
          {
            event: "showItem",
            method: function ($e) {
              var halfNum = Number($e.chart.graphs.length / 2);
              var id = $e.dataItem.valueField.split("-")[1] - halfNum;
              $e.chart.graphs.filter(function ($graph) {
                if ($graph.valueField == "column-" + id) $e.chart.showGraph($graph);
              });
            },
          },
          {
            event: "hideItem",
            method: function ($e) {
              var halfNum = Number($e.chart.graphs.length / 2);
              var id = $e.dataItem.valueField.split("-")[1] - halfNum;
              $e.chart.graphs.filter(function ($graph) {
                if ($graph.valueField == "column-" + id) $e.chart.hideGraph($graph);
              });
            },
          },
        ],
      ],
    },
    titles: [],
    dataProvider: [
      {
        category: "2022-10",
        "column-1": 500,
        "column-2": 500,
      },
      {
        category: "2022-11",
        "column-1": 300,
        "column-2": 300,
      },
      {
        category: "2022-12",
        "column-1": 200,
        "column-2": 200,
      },
      {
        category: "2023-01",
        "column-1": 200,
        "column-2": 70,
      },
      {
        category: "2032-02",
        "column-1": 200,
        "column-2": 500,
      },
      {
        category: "2023-03",
        "column-1": 150,
        "column-2": 500,
      },
    ],
  });
  chart.addListener("clickGraphItem", function () {
    // $.modal({ isExist: true, className: "data-table--related" });
    console.log('chart click');
  });
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
  const $chartDiv = $section.querySelector(".js-chart2");

  // AMchart Loader
  const Moral1stLineChart = new rsnCharts.Moral1stLineChart($chartDiv);
  Moral1stLineChart.options = {
    legend: true,
    useGraphSettings: true,
  };
  let categorys = ["블로그", "카페"];
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
  Moral1stLineChart.reColoring(["#87C67C", "#F2D301"]); // 컬러세팅
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   * Top30 키워드 순위 변화 - 지역 설정 버튼 Event
   */
  document.querySelector(".js-btn-set-area").addEventListener("click", (e) => {
    e.target.classList.toggle("btn-default--is-active");
    const $popup = e.target.nextElementSibling;
    e.target.classList.contains("btn-default--is-active") ? $popup.style.setProperty("visibility", "visible") : $popup.style.setProperty("visibility", "hidden")
  })
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
    /**
   * Top30 키워드 분석 - 축 설정 버튼 Event
   */
     document.querySelector(".js-btn-set-coord").addEventListener("click", (e) => {
      e.target.classList.toggle("btn-default--is-active");
      const $popup = e.target.nextElementSibling;
      e.target.classList.contains("btn-default--is-active") ? $popup.style.setProperty("visibility", "visible") : $popup.style.setProperty("visibility", "hidden")
    })
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
  const $xyChartDiv = document.querySelector('[data-article="Top30키워드분석"] .js-chart');
  var chart = AmCharts.makeChart($xyChartDiv, {
    hideCredits: true,
    type: "xy",
    path: "//public.realsn.com/libs/amcharts/v3",
    autoMarginOffset: 0,
    autoMargins: true,
    marginLeft: 75,
    marginTop: 10,
    marginBottom: 54,
    addClassNames: true,
    autoDisplay: true,
    color: "#171717",
    fontSize: 12,
    trendLines: [],
    graphs: [
      {
        accessibleLabel: "[[title]] [[category]] [[value]]",
        alphaField: "opacity",
        balloonText:
          "<div class='ui_positioning_bubble' style='width: 18rem; height: 8.4rem;'>" +
          "  <div style='text-align:center;  margin-top: 0.3rem;'><strong style='font-size:14px; color: #ffffff;'>[[name]]</strong></div><div style='clear:both;'></div>" +
          "  <div style='margin-top: 1.5rem;'><div class='ft_left'><div class='rows'>정보량 증감률</div></div><div class='ft_right'><i class='icon-svg-triangle-[[updown]]'></i><span class='cnt'>[[x]]%</span></div><div style='clear:both;'></div></div>" +
          "  <div  style='margin-top: 0.4rem;'><div class='ft_left'><div class='rows'>정보량</div></div><div class='ft_right'><span class='cnt'>[[y]]</span></div><div style='clear:both;'></div></div>" +
          "</div>",
        // behindColumns: true,
        bullet: "round",
        bulletBorderColor: "#ffffff",
        bulletBorderThickness: "0",
        bulletSize: 16,
        classNameField: "class",
        colorField: "color",
        id: "AmGraph-1",
        labelText: "[[name]]",
        lineAlpha: 0,
        xField: "x",
        yField: "y",
      },
    ],
    guides: [],
    valueAxes: [
      {
        offset: 15,
        id: "ValueAxis-1",
        minMaxMultiplier: 1,
        minHorizontalGap: 0,
        tickLength: 0,
        fontSize: 12,
        color: "#555555",
        gridAlpha: 0,
        zeroGridAlpha: 0,
        axisAlpha: 1,
        axisColor: "#ededef",
        title: `정보량`,
        treatZeroAs: 1,
        titleRotation: 0,
      },
      {
        offset: 10,
        axisFrequency: 0,
        id: "ValueAxis-2",
        axisAlpha: 1,
        axisColor: "#ededef",
        position: "bottom",
        treatZeroAs: 1,
        color: "#555555",
        fontSize: 12,
        gridAlpha: 0,
        tickLength: 0,
        precision: 1,
        unit: "%",
        title: "정보량증감률(%)",
      },
    ],
    balloon: {
      fadeOutDuration: 0,
      fillAlpha: 0.95,
      fillColor: "#444444",
      fixedPosition: false,
      fontSize: 12,
      pointerWidth: 5,
      shadowAlpha: 0.3,
      borderThickness: 1,
    },
    titles: [],
    dataProvider: [
      {
        name: "다초점렌즈",
        x: "100",
        y: "550",
        color: "#6b57e3",
        opacity: 1, //투명도 (active일때는 1)
        updown: "up", // '정보량 증감률' 화살표 표시, (증가=up / 감소=down)
      },
      {
        name: "임플란트",
        x: "210",
        y: "920",
        color: "#444444",
        opacity: 0.4, //투명도 (active일때는 1)
        updown: "up", // '정보량 증감률' 화살표 표시, (증가=up / 감소=down)
      },
      {
        name: "스케일링",
        x: "78",
        y: "890",
        color: "#444444",
        opacity: 0.4, //투명도 (active일때는 1)
        updown: "down", // '정보량 증감률' 화살표 표시, (증가=up / 감소=down)
      },
      {
        name: "뜸",
        x: "85",
        y: "630",
        color: "#444444",
        opacity: 0.4, //투명도 (active일때는 1)
        updown: "down", // '정보량 증감률' 화살표 표시, (증가=up / 감소=down)
      },
      {
        name: "부항",
        x: "84",
        y: "240",
        color: "#444444",
        opacity: 0.4, //투명도 (active일때는 1)
        updown: "down", // '정보량 증감률' 화살표 표시, (증가=up / 감소=down)
      },
      {
        name: "한방치료",
        x: "65",
        y: "510",
        color: "#444444",
        opacity: 0.4, //투명도 (active일때는 1)
        updown: "down", // '정보량 증감률' 화살표 표시, (증가=up / 감소=down)
      },
      {
        name: "데이터",
        x: "15",
        y: "200",
        color: "#444444",
        opacity: 0.4, //투명도 (active일때는 1)
        updown: "down", // '정보량 증감률' 화살표 표시, (증가=up / 감소=down)
      },
      {
        name: "데이터",
        x: "17",
        y: "210",
        color: "#444444",
        opacity: 0.4, //투명도 (active일때는 1)
        updown: "down", // '정보량 증감률' 화살표 표시, (증가=up / 감소=down)
      },
      {
        name: "데이터",
        x: "20",
        y: "150",
        color: "#444444",
        opacity: 0.4, //투명도 (active일때는 1)
        updown: "down", // '정보량 증감률' 화살표 표시, (증가=up / 감소=down)
      },
      {
        name: "데이터",
        x: "10",
        y: "100",
        color: "#444444",
        opacity: 0.4, //투명도 (active일때는 1)
        updown: "down", // '정보량 증감률' 화살표 표시, (증가=up / 감소=down)
      },
      {
        name: "데이터",
        x: "40",
        y: "170",
        color: "#444444",
        opacity: 0.4, //투명도 (active일때는 1)
        updown: "down", // '정보량 증감률' 화살표 표시, (증가=up / 감소=down)
      },
      {
        name: "데이터",
        x: "47",
        y: "70",
        color: "#444444",
        opacity: 0.4, //투명도 (active일때는 1)
        updown: "down", // '정보량 증감률' 화살표 표시, (증가=up / 감소=down)
      },
      {
        name: "데이터",
        x: "37",
        y: "430",
        color: "#444444",
        opacity: 0.4, //투명도 (active일때는 1)
        updown: "down", // '정보량 증감률' 화살표 표시, (증가=up / 감소=down)
      },
      {
        name: "데이터",
        x: "150",
        y: "570",
        color: "#444444",
        opacity: 0.4, //투명도 (active일때는 1)
        updown: "down", // '정보량 증감률' 화살표 표시, (증가=up / 감소=down)
      },
    ],
  });
  
  chart.addListener('clickGraphItem', function(e) {
    console.log(e);
  });
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
    { category: "2022-10", "column-1": 9800, "column-2": 25, },
    { category: "2022-11", "column-1": 15500, "column-2": 18, },
    { category: "2022-12", "column-1": 7800, "column-2": 87, },
    { category: "2023-01", "column-1": 15000, "column-2": 21, },
    { category: "2023-02", "column-1": 11000, "column-2": 20, },
    { category: "2023-03", "column-1": 14800, "column-2": 22, },
  ];

  // init
  Moral2ndLineChart.reDataBinding(datas, categorys); // 데이터 변경시킬때
  Moral2ndLineChart.reColoring(["#B8CF5A", "#739EDE"]); // 컬러세팅
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
  const $chart = document.querySelector("[data-article=연관어-워드클라우드] .js-chart");

  am4core.ready(function () {
    var data = [
      { name: "합병증", fill: "#B28838", value: 1100, fluc: 38.7, uw: "U/W, U/W, U/W, U/W, U/WU/W, U/W, U/W, U/W, U/W" },
      { name: "초음파", fill: "#985C6D", value: 536, fluc: 38.7, uw: "" },
      { name: "스케일링", fill: "#985C6D", value: 368, fluc: 38.7, uw: "" },
      { name: "십자인대", fill: "#B28838", value: 363, fluc: 38.7, uw: "U/W, U/W, U/W, U/W, U/W" },
      { name: "백내장", fill: "#B28838", value: 358, fluc: 38.7, uw: "U/W, U/W, U/W, U/W, U/W, U/W" },
      { name: "강남의원", fill: "#58A277", value: 312, fluc: 38.7, uw: "" },
      { name: "하나병원", fill: "#58A277", value: 271, fluc: 38.7, uw: "" },
      { name: "한울병원", fill: "#58A277", value: 255, fluc: 38.7, uw: "" },
      { name: "뜸", fill: "#985C6D", value: 235, fluc: -40.1, uw: "" },
      { name: "최고의원", fill: "#58A277", value: 267, fluc: -40.1, uw: "" },
      { name: "절제술", fill: "#985C6D", value: 1100, fluc: 38.7, uw: "" },
      { name: "초음파", fill: "#985C6D", value: 536, fluc: 38.7, uw: "" },
      { name: "빈혈", fill: "#B28838", value: 368, fluc: 38.7, uw: "U/W, U/W, U/W, U/W, U/W" },
      { name: "부항", fill: "#985C6D", value: 363, fluc: 38.7, uw: "" },
      { name: "백내장", fill: "#B28838", value: 358, fluc: 38.7, uw: "U/W, U/W, U/W, U/W, U/WU/W, U/W, U/W, U/W, U/W" },
      { name: "강남의원", fill: "#58A277", value: 312, fluc: 38.7, uw: "" },
      { name: "하나병원", fill: "#58A277", value: 271, fluc: 38.7, uw: "" },
      { name: "최고의원", fill: "#58A277", value: 267, fluc: -40.1, uw: "" },
      { name: "한울병원", fill: "#58A277", value: 255, fluc: 38.7, uw: "" },
      { name: "뜸", fill: "#985C6D", value: 235, fluc: -40.1, uw: "" },
      { name: "합병증", fill: "#B28838", value: 1100, fluc: 38.7, uw: "U/W, U/W, U/W, U/W, U/WU/W, U/W, U/W, U/W, U/WU/W, U/W, U/W, U/W, U/W" },
      { name: "초음파", fill: "#985C6D", value: 536, fluc: 38.7, uw: "" },
      { name: "당뇨병", fill: "#B28838", value: 368, fluc: 38.7, uw: "U/W, U/W, U/W, U/W, U/W" },
      { name: "부항", fill: "#985C6D", value: 363, fluc: 38.7, uw: "" },
      { name: "백내장", fill: "#985C6D", value: 358, fluc: 38.7, uw: "" },
      { name: "무지외반증", fill: "#B28838", value: 312, fluc: 38.7, uw: "질병1, 질병2, 질병3, 질병4, 질병5, 질병6" },
      { name: "하나병원", fill: "#58A277", value: 271, fluc: 38.7, uw: "" },
      { name: "안와골절", fill: "#B28838", value: 267, fluc: -40.1, uw: "질병, 질병, 질병" },
      { name: "한울병원", fill: "#58A277", value: 255, fluc: 38.7, uw: "" },
      {
        name: "고혈압",
        fill: "#B28838",
        value: 235,
        fluc: -40.1,
        uw: "U/W 1, U/W 2, U/W 3, U/W 4, U/W 5, U/W 6, U/W 7, U/W 8,U/W 1, U/W 2, U/W 3, U/W 4, U/W 5, U/W 6, U/W 7, U/W 8",
      },
    ];

    var chart_cloud = am4core.create($chart, am4plugins_wordCloud.WordCloud);
    var series_cloud = chart_cloud.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series_cloud.accuracy = 6;
    series_cloud.randomness = 0;
    series_cloud.rotationThreshold = 0;
    series_cloud.padding(0, 0, 0, 0);

    series_cloud.data = data;
    series_cloud.id = "wordCloud";

    series_cloud.dataFields.word = "name";
    series_cloud.dataFields.value = "value";
    series_cloud.dataFields.color = "fill";
    series_cloud.minFontSize = 25;
    series_cloud.maxFontSize = 70;

    series_cloud.labels.template.hiddenState.transitionDuration = 0;
    series_cloud.labels.template.defaultState.transitionDuration = 0;
    series_cloud.labels.template.padding(1, 6, 1, 6);
    series_cloud.labels.template.propertyFields.fill = "fill";
    series_cloud.labels.template.zIndex = 0;
    series_cloud.labels.template.adapter.add("text", function ($val, $target) {
      $($target.dom).addClass("word_item");
      return "\r" + $val + "\r";
    });
    series_cloud.cursorOverStyle = am4core.MouseCursorStyle.pointer;
    series_cloud.labels.template.background.strokeWidth = 0;
    series_cloud.labels.template.background.adapter.add("stroke", function ($val, $target) {
      if ($target.dataItem && $target.dataItem.dataContext) {
        $target.fill = am4core.color($target.dataItem.dataContext.fill);
        return $target.dataItem.dataContext.fill;
      }
      return $val;
    });

    // Tooltip(Bubble)
    series_cloud.tooltip.getFillFromObject = false;
    series_cloud.tooltip.background.fill = am4core.color("#444444");
    series_cloud.tooltip.background.cornerRadius = 0;
    series_cloud.tooltip.background.strokeWidth = 0;
    series_cloud.tooltip.label.fill = am4core.color("red");
    series_cloud.labels.template.adapter.add("tooltipHTML", function ($value, $target) {
      $($target.dom).addClass("word_item");
      $($target.background.dom)
        .find("rect")
        .attr("rx", $target.background.measuredHeight / 2);
      $target.background.dy = -$target.background.measuredHeight * 0.05;

      // fluc 음,양수 비교
      let updown = $target.dataItem.dataContext.fluc > 0 ? "up" : $target.dataItem.dataContext.fluc == 0 ? "none" : "down";

      // 기본 툴팁 (치료법, 의료기관)
      let tooltipDefault =
        "<div class='ui_positioning_bubble' style='width: 18rem; height: 8.4rem;'>" +
        "  <div style='text-align:center; margin-top: 0.3rem;'><strong style='font-size:14px; color: #ffffff;'>{name}</strong></div><div style='clear:both;'></div>" +
        "  <div style='margin-top: 1.5rem;'><div class='ft_left'><div class='rows'>정보량 증감률</div></div><div class='ft_right'><i class='icon-svg-triangle-" +
        updown +
        "'></i><span class='cnt'>" +
        Math.abs($target.dataItem.dataContext.fluc) +
        "%</span></div><div style='clear:both;'></div></div>" +
        "  <div  style='margin-top: 0.4rem;'><div class='ft_left'><div class='rows'>정보량</div></div><div class='ft_right'><span class='cnt'>{value}</span></div><div style='clear:both;'></div></div>" +
        "</div>";
      // 질병일때 툴팁
      let tooltipTrouble =
        "<div class='ui_positioning_bubble' style='width: 28rem; height: auto; padding-bottom: 0.5rem;'>" +
        "  <div style='text-align:center; margin-top: 0.3rem;'><strong style='font-size:14px; color: #ffffff;'>{name}</strong></div><div style='clear:both;'></div>" +
        "  <div style='text-align:center; margin-top: 0.7rem;'><div class='clamp-2' style='color: #fff;'>{uw}</div></div><div style='clear:both;'></div>" +
        "  <div style='margin-top: 1.5rem;'><div class='ft_left'><div class='rows'>정보량 증감률</div></div><div class='ft_right'><i class='icon-svg-triangle-" +
        updown +
        "'></i><span class='cnt'>" +
        Math.abs($target.dataItem.dataContext.fluc) +
        "%</span></div><div style='clear:both;'></div></div>" +
        "  <div  style='margin-top: 0.4rem;'><div class='ft_left'><div class='rows'>정보량</div></div><div class='ft_right'><span class='cnt'>{value}</span></div><div style='clear:both;'></div></div>" +
        "</div>";

      if ($target.dataItem.dataContext.fill == "#B28838") return tooltipTrouble;
      else return tooltipDefault;
    });

    var hs = series_cloud.labels.template.states.create("hover");
    hs.properties.zIndex = 1;

    // Event
    series_cloud.labels.template.events.on("over", function ($e) {
      if ($e.target.tooltip.verticalOrientation == "up") $e.target.tooltip.dy = -($e.target.background.measuredHeight / 3);
      else $e.target.tooltip.dy = $e.target.background.measuredHeight / 3;
    });
    series_cloud.labels.template.events.on("hit", function ($e) {
      $($e.target.dom).addClass("active").siblings().removeClass("active");
    });
    var indicator;
    var indicatorInterval;

    function showIndicator() {
      if (!indicator) {
        indicator = chart_cloud.tooltipContainer.createChild(am4core.Container);
        indicator.background.fill = am4core.color("#fafafa");
        indicator.width = am4core.percent(100);
        indicator.height = am4core.percent(100);

        var indicatorLabel = indicator.createChild(am4core.Label);
        indicatorLabel.text = "Loading...";
        indicatorLabel.fill = "#909090";
        indicatorLabel.align = "center";
        indicatorLabel.valign = "middle";
        indicatorLabel.dy = 1;
      }

      indicator.hide(0);
      indicator.show();

      // clearInterval(indicatorInterval);
      // indicatorInterval = setInterval(function() {
      //         hourglass.animate([{
      //         from: 0,
      //         to: 360,
      //         property: "rotation"                    //         }], 2000);
      //     }, 3000);
    }
    function hideIndicator() {
      indicator.hide();
      clearInterval(indicatorInterval);
    }

    showIndicator();

    series_cloud.events.on("arrangeended", function (ev) {
      hideIndicator();
    });
  });
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

  const $slideWrapper = document.querySelector("[data-section=Top30키워드지역] .tab-wrapper");
  const $navWrapper = document.querySelector("[data-section=Top30키워드지역] [data-fieldset=키워드n지역]");
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

  const $slideWrapper = document.querySelector("[data-section=Top30키워드지역] [data-article=키워드] .l-article-body");
  const $navWrapper = document.querySelector("[data-section=Top30키워드지역] [data-article=키워드] [data-fieldset=차트n테이블]");
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

  const $slideWrapper = document.querySelector("[data-section=Top30키워드지역] [data-article=지역] .l-article-body");
  const $navWrapper = document.querySelector("[data-section=Top30키워드지역] [data-article=지역] [data-fieldset=차트n테이블]");
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
// ---------------------------------임의 데이터 생성 영역-------------------------------------
let dataArr = [];

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

// 도시 클릭시 - 지도차트 클릭시 팝업 호출
samsungFrMapDrildownChart.countryClickEvt(function (_ev) {
  let clickData = _ev.target.dataItem.dataContext;
  console.log(clickData);
  console.log('팝업호출 스크립트 추가 영역');
});
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
  const $chart = document.querySelector("[data-section=Top30키워드지역] [data-article=지역] .js-chart");

  am4core.ready(function () {
    var data = [
      { name: "합병증", fill: "#B28838", value: 1100, fluc: 38.7, uw: "U/W, U/W, U/W, U/W, U/WU/W, U/W, U/W, U/W, U/W" },
      { name: "초음파", fill: "#985C6D", value: 536, fluc: 38.7, uw: "" },
      { name: "스케일링", fill: "#985C6D", value: 368, fluc: 38.7, uw: "" },
      { name: "십자인대", fill: "#B28838", value: 363, fluc: 38.7, uw: "U/W, U/W, U/W, U/W, U/W" },
      { name: "백내장", fill: "#B28838", value: 358, fluc: 38.7, uw: "U/W, U/W, U/W, U/W, U/W, U/W" },
      { name: "강남의원", fill: "#58A277", value: 312, fluc: 38.7, uw: "" },
      { name: "하나병원", fill: "#58A277", value: 271, fluc: 38.7, uw: "" },
      { name: "한울병원", fill: "#58A277", value: 255, fluc: 38.7, uw: "" },
      { name: "뜸", fill: "#985C6D", value: 235, fluc: -40.1, uw: "" },
      { name: "최고의원", fill: "#58A277", value: 267, fluc: -40.1, uw: "" },
      { name: "절제술", fill: "#985C6D", value: 1100, fluc: 38.7, uw: "" },
      { name: "초음파", fill: "#985C6D", value: 536, fluc: 38.7, uw: "" },
      { name: "빈혈", fill: "#B28838", value: 368, fluc: 38.7, uw: "U/W, U/W, U/W, U/W, U/W" },
      { name: "부항", fill: "#985C6D", value: 363, fluc: 38.7, uw: "" },
      { name: "백내장", fill: "#B28838", value: 358, fluc: 38.7, uw: "U/W, U/W, U/W, U/W, U/WU/W, U/W, U/W, U/W, U/W" },
      { name: "강남의원", fill: "#58A277", value: 312, fluc: 38.7, uw: "" },
      { name: "하나병원", fill: "#58A277", value: 271, fluc: 38.7, uw: "" },
      { name: "최고의원", fill: "#58A277", value: 267, fluc: -40.1, uw: "" },
      { name: "한울병원", fill: "#58A277", value: 255, fluc: 38.7, uw: "" },
      { name: "뜸", fill: "#985C6D", value: 235, fluc: -40.1, uw: "" },
      { name: "합병증", fill: "#B28838", value: 1100, fluc: 38.7, uw: "U/W, U/W, U/W, U/W, U/WU/W, U/W, U/W, U/W, U/WU/W, U/W, U/W, U/W, U/W" },
      { name: "초음파", fill: "#985C6D", value: 536, fluc: 38.7, uw: "" },
      { name: "당뇨병", fill: "#B28838", value: 368, fluc: 38.7, uw: "U/W, U/W, U/W, U/W, U/W" },
      { name: "부항", fill: "#985C6D", value: 363, fluc: 38.7, uw: "" },
      { name: "백내장", fill: "#985C6D", value: 358, fluc: 38.7, uw: "" },
      { name: "무지외반증", fill: "#B28838", value: 312, fluc: 38.7, uw: "질병1, 질병2, 질병3, 질병4, 질병5, 질병6" },
      { name: "하나병원", fill: "#58A277", value: 271, fluc: 38.7, uw: "" },
      { name: "안와골절", fill: "#B28838", value: 267, fluc: -40.1, uw: "질병, 질병, 질병" },
      { name: "한울병원", fill: "#58A277", value: 255, fluc: 38.7, uw: "" },
      {
        name: "고혈압",
        fill: "#B28838",
        value: 235,
        fluc: -40.1,
        uw: "U/W 1, U/W 2, U/W 3, U/W 4, U/W 5, U/W 6, U/W 7, U/W 8,U/W 1, U/W 2, U/W 3, U/W 4, U/W 5, U/W 6, U/W 7, U/W 8",
      },
    ];

    var chart_cloud = am4core.create($chart, am4plugins_wordCloud.WordCloud);
    var series_cloud = chart_cloud.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series_cloud.accuracy = 6;
    series_cloud.randomness = 0;
    series_cloud.rotationThreshold = 0;
    series_cloud.padding(0, 0, 0, 0);

    series_cloud.data = data;
    series_cloud.id = "wordCloud";

    series_cloud.dataFields.word = "name";
    series_cloud.dataFields.value = "value";
    series_cloud.dataFields.color = "fill";
    series_cloud.minFontSize = 25;
    series_cloud.maxFontSize = 70;

    series_cloud.labels.template.hiddenState.transitionDuration = 0;
    series_cloud.labels.template.defaultState.transitionDuration = 0;
    series_cloud.labels.template.padding(1, 6, 1, 6);
    series_cloud.labels.template.propertyFields.fill = "fill";
    series_cloud.labels.template.zIndex = 0;
    series_cloud.labels.template.adapter.add("text", function ($val, $target) {
      $($target.dom).addClass("word_item");
      return "\r" + $val + "\r";
    });
    series_cloud.cursorOverStyle = am4core.MouseCursorStyle.pointer;
    series_cloud.labels.template.background.strokeWidth = 0;
    series_cloud.labels.template.background.adapter.add("stroke", function ($val, $target) {
      if ($target.dataItem && $target.dataItem.dataContext) {
        $target.fill = am4core.color($target.dataItem.dataContext.fill);
        return $target.dataItem.dataContext.fill;
      }
      return $val;
    });

    // Tooltip(Bubble)
    series_cloud.tooltip.getFillFromObject = false;
    series_cloud.tooltip.background.fill = am4core.color("#444444");
    series_cloud.tooltip.background.cornerRadius = 0;
    series_cloud.tooltip.background.strokeWidth = 0;
    series_cloud.tooltip.label.fill = am4core.color("red");
    series_cloud.labels.template.adapter.add("tooltipHTML", function ($value, $target) {
      $($target.dom).addClass("word_item");
      $($target.background.dom)
        .find("rect")
        .attr("rx", $target.background.measuredHeight / 2);
      $target.background.dy = -$target.background.measuredHeight * 0.05;

      // fluc 음,양수 비교
      let updown = $target.dataItem.dataContext.fluc > 0 ? "up" : $target.dataItem.dataContext.fluc == 0 ? "none" : "down";

      // 기본 툴팁 (치료법, 의료기관)
      let tooltipDefault =
        "<div class='ui_positioning_bubble' style='width: 18rem; height: 8.4rem;'>" +
        "  <div style='text-align:center; margin-top: 0.3rem;'><strong style='font-size:14px; color: #ffffff;'>{name}</strong></div><div style='clear:both;'></div>" +
        "  <div style='margin-top: 1.5rem;'><div class='ft_left'><div class='rows'>정보량 증감률</div></div><div class='ft_right'><i class='icon-svg-triangle-" +
        updown +
        "'></i><span class='cnt'>" +
        Math.abs($target.dataItem.dataContext.fluc) +
        "%</span></div><div style='clear:both;'></div></div>" +
        "  <div  style='margin-top: 0.4rem;'><div class='ft_left'><div class='rows'>정보량</div></div><div class='ft_right'><span class='cnt'>{value}</span></div><div style='clear:both;'></div></div>" +
        "</div>";
      // 질병일때 툴팁
      let tooltipTrouble =
        "<div class='ui_positioning_bubble' style='width: 28rem; height: auto; padding-bottom: 0.5rem;'>" +
        "  <div style='text-align:center; margin-top: 0.3rem;'><strong style='font-size:14px; color: #ffffff;'>{name}</strong></div><div style='clear:both;'></div>" +
        "  <div style='text-align:center; margin-top: 0.7rem;'><div class='clamp-2' style='color: #fff;'>{uw}</div></div><div style='clear:both;'></div>" +
        "  <div style='margin-top: 1.5rem;'><div class='ft_left'><div class='rows'>정보량 증감률</div></div><div class='ft_right'><i class='icon-svg-triangle-" +
        updown +
        "'></i><span class='cnt'>" +
        Math.abs($target.dataItem.dataContext.fluc) +
        "%</span></div><div style='clear:both;'></div></div>" +
        "  <div  style='margin-top: 0.4rem;'><div class='ft_left'><div class='rows'>정보량</div></div><div class='ft_right'><span class='cnt'>{value}</span></div><div style='clear:both;'></div></div>" +
        "</div>";

      if ($target.dataItem.dataContext.fill == "#B28838") return tooltipTrouble;
      else return tooltipDefault;
    });

    var hs = series_cloud.labels.template.states.create("hover");
    hs.properties.zIndex = 1;

    // Event
    series_cloud.labels.template.events.on("over", function ($e) {
      if ($e.target.tooltip.verticalOrientation == "up") $e.target.tooltip.dy = -($e.target.background.measuredHeight / 3);
      else $e.target.tooltip.dy = $e.target.background.measuredHeight / 3;
    });
    series_cloud.labels.template.events.on("hit", function ($e) {
      $($e.target.dom).addClass("active").siblings().removeClass("active");
    });
    var indicator;
    var indicatorInterval;

    function showIndicator() {
      if (!indicator) {
        indicator = chart_cloud.tooltipContainer.createChild(am4core.Container);
        indicator.background.fill = am4core.color("#fafafa");
        indicator.width = am4core.percent(100);
        indicator.height = am4core.percent(100);

        var indicatorLabel = indicator.createChild(am4core.Label);
        indicatorLabel.text = "Loading...";
        indicatorLabel.fill = "#909090";
        indicatorLabel.align = "center";
        indicatorLabel.valign = "middle";
        indicatorLabel.dy = 1;
      }

      indicator.hide(0);
      indicator.show();

      // clearInterval(indicatorInterval);
      // indicatorInterval = setInterval(function() {
      //         hourglass.animate([{
      //         from: 0,
      //         to: 360,
      //         property: "rotation"                    //         }], 2000);
      //     }, 3000);
    }
    function hideIndicator() {
      indicator.hide();
      clearInterval(indicatorInterval);
    }

    showIndicator();

    series_cloud.events.on("arrangeended", function (ev) {
      hideIndicator();
    });
  });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
