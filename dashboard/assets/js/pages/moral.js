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
   * Top30 키워드 순위 변화 - 마우스 오버 시 동일 데이터에 td--is-hover 클래스 부여
   *
   */
  const $hoverTarget = document.querySelectorAll("td[data-keyword]");

  Array.from($hoverTarget).forEach(function (_$target) {
    _$target.addEventListener("mouseenter", (e) => {
      document.querySelectorAll(".td--is-hover").forEach(function (_$oldHover) {
        _$oldHover.classList.remove("td--is-hover");
      });

      const hoverKeyword = e.target.getAttribute("data-keyword");
      const $eventTarget = document.querySelectorAll("[data-keyword='" + hoverKeyword + "']");
      $eventTarget.forEach(function (_this) {
        _this.classList.add("td--is-hover");
      });
    });
  });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   * Top30 키워드 순위 변화 - 항목 클릭 시 동일 데이터에 td--is-active 클래스 부여
   *
   */
  const $activeTarget = document.querySelectorAll("td[data-keyword]");

  Array.from($activeTarget).forEach(function (_$target) {
    _$target.addEventListener("click", (e) => {
      document.querySelectorAll(".td--is-active").forEach(function (_$oldActive) {
        _$oldActive.classList.remove("td--is-active");
      });

      const activeKeyword = e.target.closest("td[data-keyword]").getAttribute("data-keyword");
      const $eventTarget = document.querySelectorAll("[data-keyword='" + activeKeyword + "']");
      $eventTarget.forEach(function (_this) {
        _this.classList.add("td--is-active");
      });

      const $labelTarget = document.querySelectorAll(".js-toggle-label");
      Array.from($labelTarget).forEach(function (_$label) {
        _$label.innerHTML = activeKeyword;
      });
    });
  });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   * Top30 키워드 순위 변화 - 더보기 버튼 클릭 시 이벤트
   *
   */
  const $t = document.querySelectorAll(".c-table--click-menu");
  Array.from($t).forEach(function (e) {
    e.addEventListener("click", function () {
      // 클릭 이벤트 작동
    });
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
        accessibleLabel: "[[title]] [[category]] [[value]] [[snps]]",
        alphaField: "snpsAlp",
        balloonText:
          "" +
          "<div class='ui_positioning_bubble' style='width: 18rem; height: 9.7rem;'>" +
          "  <div style='text-align:center; margin-bottom:7px; margin-top:2px;'><strong style='font-size:14px; color: #ffffff;'>[[name]]</strong></div><div style='clear:both;'></div>" +
          "  <div style='margin-top: 0.8rem;'><div class='ft_left'><div class='rows'>정보량 증감률</div></div><div class='ft_right'><i class='icon-svg-triangle-[[updown]]'></i><span class='cnt'>[[x]]%</span></div><div style='clear:both;'></div></div>" +
          "  <div  style='margin-top: 0.4rem;'><div class='ft_left'><div class='rows'>정보량</div></div><div class='ft_right'><span class='cnt'>[[y]]</span></div><div style='clear:both;'></div></div>" +
          "</div>",
        behindColumns: true,
        bullet: "round",
        bulletBorderColor: "#ffffff",
        bulletBorderThickness: "0",
        bulletSize: 16,
        classNameField: "class",
        colorField: "color",
        id: "AmGraph-1",
        labelText: "[[label_visible]]",
        lineAlpha: 0,
        lineColor: "#f5822b",
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
      color: "#ffffff",
      pointerWidth: 5,
      shadowAlpha: 0.3,
      borderThickness: 0,
      cornerRadius: 4,
    },
    titles: [],
    dataProvider: [
      {
        code: "4656",
        name: "임플란트",
        x: "222",
        y: "500",
        snps: "55",
        color: "#444444",
        label_visible: "임플란트", // 라벨보이는 경우 텍스트 입력, 안보이는 경우 ""
        updown: "up", // '정보량 증감률' 화살표 표시, 증가=up / 감소=down
      },
      {
        code: "4656",
        name: "스케일링",
        x: "200",
        y: "217",
        snps: "88",
        color: "#444444",
        label_visible: "스케일링", // 라벨보이는 경우 텍스트 입력, 안보이는 경우 ""
        updown: "down", // '정보량 증감률' 화살표 표시, 증가=up / 감소=down
      },
    ],
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
    { category: "2022-10", "column-1": 100, "column-2": 2000, },
    { category: "2022-11", "column-1": 500, "column-2": 1700, },
    { category: "2022-12", "column-1": 700, "column-2": 2300, },
    { category: "2023-01", "column-1": 800, "column-2": 1500, },
    { category: "2023-02", "column-1": 300, "column-2": 1100, },
    { category: "2023-03", "column-1": 270, "column-2": 3500, },
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
   */
  const $chart = document.querySelector("[data-article=연관어-워드클라우드] .js-chart");

  am4core.ready(function () {
    var data = [
      { name: "합병증", fill: "#B28838", value: 1100, fluc: 38.7 },
      { name: "초음파", fill: "#985C6D", value: 536, fluc: 38.7 },
      { name: "당뇨병", fill: "#58A277", value: 368, fluc: 38.7 },
      { name: "부항", fill: "#B28838", value: 363, fluc: 38.7 },
      { name: "백내장", fill: "#B28838", value: 358, fluc: 38.7 },
      { name: "강남의원", fill: "#B28838", value: 312, fluc: 38.7 },
      { name: "하나병원", fill: "#985C6D", value: 271, fluc: 38.7 },
      { name: "최고의원", fill: "#58A277", value: 267, fluc: -40.1 },
      { name: "한울병원", fill: "#985C6D", value: 255, fluc: 38.7 },
      { name: "뜸", fill: "#58A277", value: 235, fluc: -40.1 },
      { name: "합병증", fill: "#985C6D", value: 1100, fluc: 38.7 },
      { name: "초음파", fill: "#58A277", value: 536, fluc: 38.7 },
      { name: "당뇨병", fill: "#985C6D", value: 368, fluc: 38.7 },
      { name: "부항", fill: "#58A277", value: 363, fluc: 38.7 },
      { name: "백내장", fill: "#B28838", value: 358, fluc: 38.7 },
      { name: "강남의원", fill: "#985C6D", value: 312, fluc: 38.7 },
      { name: "하나병원", fill: "#B28838", value: 271, fluc: 38.7 },
      { name: "최고의원", fill: "#985C6D", value: 267, fluc: -40.1 },
      { name: "한울병원", fill: "#58A277", value: 255, fluc: 38.7 },
      { name: "뜸", fill: "#B28838", value: 235, fluc: -40.1 },
      { name: "합병증", fill: "#B28838", value: 1100, fluc: 38.7 },
      { name: "초음파", fill: "#B28838", value: 536, fluc: 38.7 },
      { name: "당뇨병", fill: "#B28838", value: 368, fluc: 38.7 },
      { name: "부항", fill: "#985C6D", value: 363, fluc: 38.7 },
      { name: "백내장", fill: "#985C6D", value: 358, fluc: 38.7 },
      { name: "강남의원", fill: "#B28838", value: 312, fluc: 38.7 },
      { name: "하나병원", fill: "#58A277", value: 271, fluc: 38.7 },
      { name: "최고의원", fill: "#B28838", value: 267, fluc: -40.1 },
      { name: "한울병원", fill: "#58A277", value: 255, fluc: 38.7 },
      { name: "뜸", fill: "#B28838", value: 235, fluc: -40.1 },
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
    series_cloud.tooltip.background.fill = am4core.color("#ffffff");
    series_cloud.tooltip.background.cornerRadius = 3;
    series_cloud.tooltip.background.strokeOpacity = 1;
    series_cloud.tooltip.background.strokeWidth = 2;
    series_cloud.tooltip.label.fill = am4core.color("#666666");
    series_cloud.labels.template.tooltipText = "[bold]{name}[/]: {value}";
    series_cloud.labels.template.adapter.add("tooltipHTML", function ($value, $target) {
      $($target.dom).addClass("word_item");
      $($target.background.dom)
        .find("rect")
        .attr("rx", $target.background.measuredHeight / 2);
      $target.background.dy = -$target.background.measuredHeight * 0.05;

      var flucUpDn = $target.dataItem.dataContext.fluc == null ? "New" : $target.dataItem.dataContext.fluc;
      if (flucUpDn != "New") {
        flucUpDn = $target.dataItem.dataContext.fluc > 0 ? "up" : $target.dataItem.dataContext.fluc == 0 ? "none" : "dn";
      }
      var cateColor;
      var tooltipResult = "";
      tooltipResult += '<div class="chart_tooltip">';
      tooltipResult += '<strong class="title">{name}</strong><span class="dv">{value}&nbsp;</span>';
      if (flucUpDn == "New") {
        tooltipResult += '<span class="row"><span class="ui_fluc is-color-negative">New</span></span>';
      } else {
        tooltipResult += '<span class="row"><span class="ui_fluc before ' + flucUpDn + '">' + Math.abs($target.dataItem.dataContext.fluc) + "%</span></span>";
      }
      tooltipResult += "</div>";

      if ($target.tooltip) {
        $target.tooltip.background.stroke = $target.dataItem.dataContext.fill;
      }
      return tooltipResult;
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
   *  depth : 건간정보 키워드 트렌드 > Top30 키워드 지역
   *  block : 차트스위치
   *  event : new Tab
   *
   */

  const $wrapper = document.querySelector("[data-section=Top30키워드지역] [data-article=Top30키워드지역-차트] .l-article-body");
  const $nav = document.querySelector("[data-section=Top30키워드지역] [data-article=Top30키워드지역-차트] [data-fieldset=차트스위치]");
  const tab = new window.Tab($wrapper, $nav);
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 건강정보 키워드 트렌드 > Top30 키워드 지역
   *  block : 차트(워드 클라우드)
   *  event : new AmCharts
   *
   */
  const $chart = document.querySelector("[data-article=Top30키워드지역-차트] .js-chart2");

  am4core.ready(function () {
    var data = [
      { name: "합병증", fill: "#B28838", value: 1100, fluc: 38.7 },
      { name: "초음파", fill: "#985C6D", value: 536, fluc: 38.7 },
      { name: "당뇨병", fill: "#58A277", value: 368, fluc: 38.7 },
      { name: "부항", fill: "#B28838", value: 363, fluc: 38.7 },
      { name: "백내장", fill: "#B28838", value: 358, fluc: 38.7 },
      { name: "강남의원", fill: "#B28838", value: 312, fluc: 38.7 },
      { name: "하나병원", fill: "#985C6D", value: 271, fluc: 38.7 },
      { name: "최고의원", fill: "#58A277", value: 267, fluc: -40.1 },
      { name: "한울병원", fill: "#985C6D", value: 255, fluc: 38.7 },
      { name: "뜸", fill: "#58A277", value: 235, fluc: -40.1 },
      { name: "합병증", fill: "#985C6D", value: 1100, fluc: 38.7 },
      { name: "초음파", fill: "#58A277", value: 536, fluc: 38.7 },
      { name: "당뇨병", fill: "#985C6D", value: 368, fluc: 38.7 },
      { name: "부항", fill: "#58A277", value: 363, fluc: 38.7 },
      { name: "백내장", fill: "#B28838", value: 358, fluc: 38.7 },
      { name: "강남의원", fill: "#985C6D", value: 312, fluc: 38.7 },
      { name: "하나병원", fill: "#B28838", value: 271, fluc: 38.7 },
      { name: "최고의원", fill: "#985C6D", value: 267, fluc: -40.1 },
      { name: "한울병원", fill: "#58A277", value: 255, fluc: 38.7 },
      { name: "뜸", fill: "#B28838", value: 235, fluc: -40.1 },
      { name: "합병증", fill: "#B28838", value: 1100, fluc: 38.7 },
      { name: "초음파", fill: "#B28838", value: 536, fluc: 38.7 },
      { name: "당뇨병", fill: "#B28838", value: 368, fluc: 38.7 },
      { name: "부항", fill: "#985C6D", value: 363, fluc: 38.7 },
      { name: "백내장", fill: "#985C6D", value: 358, fluc: 38.7 },
      { name: "강남의원", fill: "#B28838", value: 312, fluc: 38.7 },
      { name: "하나병원", fill: "#58A277", value: 271, fluc: 38.7 },
      { name: "최고의원", fill: "#B28838", value: 267, fluc: -40.1 },
      { name: "한울병원", fill: "#58A277", value: 255, fluc: 38.7 },
      { name: "뜸", fill: "#B28838", value: 235, fluc: -40.1 },
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
    series_cloud.tooltip.background.fill = am4core.color("#ffffff");
    series_cloud.tooltip.background.cornerRadius = 3;
    series_cloud.tooltip.background.strokeOpacity = 1;
    series_cloud.tooltip.background.strokeWidth = 2;
    series_cloud.tooltip.label.fill = am4core.color("#666666");
    series_cloud.labels.template.tooltipText = "[bold]{name}[/]: {value}";
    series_cloud.labels.template.adapter.add("tooltipHTML", function ($value, $target) {
      $($target.dom).addClass("word_item");
      $($target.background.dom)
        .find("rect")
        .attr("rx", $target.background.measuredHeight / 2);
      $target.background.dy = -$target.background.measuredHeight * 0.05;

      var flucUpDn = $target.dataItem.dataContext.fluc == null ? "New" : $target.dataItem.dataContext.fluc;
      if (flucUpDn != "New") {
        flucUpDn = $target.dataItem.dataContext.fluc > 0 ? "up" : $target.dataItem.dataContext.fluc == 0 ? "none" : "dn";
      }
      var cateColor;
      var tooltipResult = "";
      tooltipResult += '<div class="chart_tooltip">';
      tooltipResult += '<strong class="title">{name}</strong><span class="dv">{value}&nbsp;</span>';
      if (flucUpDn == "New") {
        tooltipResult += '<span class="row"><span class="ui_fluc is-color-negative">New</span></span>';
      } else {
        tooltipResult += '<span class="row"><span class="ui_fluc before ' + flucUpDn + '">' + Math.abs($target.dataItem.dataContext.fluc) + "%</span></span>";
      }
      tooltipResult += "</div>";

      if ($target.tooltip) {
        $target.tooltip.background.stroke = $target.dataItem.dataContext.fill;
      }
      return tooltipResult;
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
