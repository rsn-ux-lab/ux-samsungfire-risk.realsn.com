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
  const $chart = document.querySelector("[data-section=정보량추이] [data-card=정보량추이-1depth] .js-chart");

  var chart = AmCharts.makeChart($chart, {
    hideCredits: true,
    type: "serial",
    path: "//public.realsn.com/libs/amcharts/v3",
    categoryField: "category",
    addClassNames: true,
    fontSize: 12,
    columnWidth: 0.7,
    autoMarginOffset: 0,
    marginRight: 10,
    marginTop: 35,
    colors: ["#91D085", "#F2D301"],
    color: "#505050",
    categoryAxis: {
      labelOffset: -2,
      equalSpacing: true,
      color: "#555555",
      axisColor: "#ededef",
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
        color: "#666666",
        fontSize: 11,
        dashLength: 4,
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
      verticalGap: 0,
      listeners: [
        [
          {
              "event": "showItem",
              "method": function( $e ){
                  var halfNum = Number( $e.chart.graphs.length / 2 ) ;
                  var id = $e.dataItem.valueField.split( "-" )[ 1 ] - halfNum;
                  $e.chart.graphs.filter( function( $graph ){
                      if( $graph.valueField == "column-" + id ) $e.chart.showGraph( $graph );
                  })
              }
          },
          {
              "event": "hideItem",
              "method": function( $e ){
                  var halfNum = Number( $e.chart.graphs.length / 2 ) ;
                  var id = $e.dataItem.valueField.split( "-" )[ 1 ] - halfNum;
                  $e.chart.graphs.filter( function( $graph ){
                      if( $graph.valueField == "column-" + id ) $e.chart.hideGraph( $graph );
                  })
              }
          }
      ]
      ],
    },
    titles: [],
    dataProvider: [
      {
        category: "2022-04",
        "column-1": 8,
        "column-2": 5,
      },
      {
        category: "2022-05",
        "column-1": 6,
        "column-2": 7,
      },
      {
        category: "2022-06",
        "column-1": 2,
        "column-2": 3,
      },
      {
        category: "2022-07",
        "column-1": 8,
        "column-2": 5,
      },
      {
        category: "2022-08",
        "column-1": 6,
        "column-2": 7,
      },
      {
        category: "2022-09",
        "column-1": 2,
        "column-2": 3,
      },
      {
        category: "2022-10",
        "column-1": 8,
        "column-2": 5,
      },
      {
        category: "2022-11",
        "column-1": 8,
        "column-2": 5,
      },
      {
        category: "2022-12",
        "column-1": 8,
        "column-2": 5,
      },
      {
        category: "2023-01",
        "column-1": 8,
        "column-2": 5,
      },
      {
        category: "2032-02",
        "column-1": 8,
        "column-2": 5,
      },
      {
        category: "2023-03",
        "column-1": 8,
        "column-2": 5,
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
   *  depth : 건강정보 키워드 트렌드 > Top30 키워드 분석
   *  block : 차트(xy차트)
   *  event : new AmCharts
   *
   */
  const $xyChartDiv = document.querySelector('[data-card="Top30키워드분석"] .js-chart');
  var chart = AmCharts.makeChart( $xyChartDiv, {
    hideCredits: true,
    type: "xy",
    path: "//public.realsn.com/libs/amcharts/v3",
    autoMarginOffset: 0,
    autoMargins: false,
    marginLeft: 75,
    marginTop: 10,
    marginBottom: 54,
    addClassNames: true,
    autoDisplay: true,
    color: "#999999",
    fontSize: 12,
    usePrefixes: true,
    trendLines: [],
    graphs: [
      {
        accessibleLabel: "[[title]] [[category]] [[value]] [[snps]]",
        alphaField: "snpsAlp",
        balloonText: ""
            +"<div class='ui_positioning_bubble'>"
            +"  <strong style='font-size:14px; color: #212121;'>[[name]]</strong>"
            +"  <div class='rows'>정보량 증감률 <span class='cnt'>[[plus1]]</span></div>"
            +"  <div class='rows'>정보량 <span class='cnt'>[[plus2]]</span></div>"
            +"</div>"
        ,
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
        yField: "y"
      }
    ],
    guides: [],
    valueAxes: [
      {
        offset: 15,
        id: "ValueAxis-1",
        minMaxMultiplier: 1,
        treatZeroAs: 1,
        minHorizontalGap: 0,
        tickLength: 0,
        fontSize: 12,
        color: "#cccccc",
        gridAlpha: 1,
        zeroGridAlpha: 2,
        axisAlpha: 0,
        dashLength: 3,
        gridColor: "#dfdfdf"
        // "zeroGridAlpha": 0,
        // "axisAlpha": 0,
      },
      {
        offset: 10,
        axisFrequency: 0,
        minMaxMultiplier: 1,
        id: "ValueAxis-2",
        zeroGridAlpha: 2,
        axisAlpha: 0,
        position: "bottom",
        treatZeroAs: 1,
        color: "#cccccc",
        fontSize: 12,
        gridAlpha: 1,
        tickLength: 0,
        dashLength: 3,
        gridColor: "#dfdfdf"
      }
    ],
    balloon: {
      fadeOutDuration: 0,
      fillAlpha: 0.67,
      fillColor: "#ffffff",
      fixedPosition: false,
      fontSize: 12,
      horizontalPadding: 10,
      pointerWidth: 5,
      shadowAlpha: 0.3
    },
    titles: [],
    dataProvider: [
      {
        code: "4656",
        name: "라면 공작소",
        x: "1833",
        y: "5705",
        snps: "88",
        color: "#d83832",
        label_visible: "라면 공작소",     // 라벨보이는 경우 텍스트 입력, 안보이는 경우 ""
        plus1 : "농심",
        plus2 : "2,3k (15.5%)",
        plus3 : "0,000k (15.5%)",
      },
      {
        code: "4656",
        name: "오뚜기 Daily",
        x: "533",
        y: "705",
        snps: "88",
        color: "#f2b1ed",
        label_visible: "",     // 라벨보이는 경우 텍스트 입력, 안보이는 경우 ""
        plus1 : "농심",
        plus2 : "2,3k (15.5%)",
        plus3 : "0,000k (15.5%)",
      },
    ]
  })


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
  const $section = document.querySelector('[data-card="정보량추이-2depth"]');
  const $chartDiv = $section.querySelector(".js-chart");

  // AMchart Loader
  const ytnLineChart2 = new rsnCharts.YtnLineChart($chartDiv);
  ytnLineChart2.options = {
    legend: true,
    useGraphSettings: true,
  };
  let categorys = ["정보량 증감률", "정보량"];
  // prettier-ignore
  let datas = [
    { category: "2022-04", "column-1": 2112, "column-2": 538, },
    { category: "2022-05", "column-1": 2012, "column-2": 438, },
    { category: "2022-06", "column-1": 2012, "column-2": 438, },
    { category: "2022-07", "column-1": 2012, "column-2": 438, },
    { category: "2022-08", "column-1": 2012, "column-2": 438, },
    { category: "2022-09", "column-1": 2012, "column-2": 438, },
    { category: "2022-10", "column-1": 2012, "column-2": 438, },
    { category: "2022-11", "column-1": 2012, "column-2": 438, },
    { category: "2022-12", "column-1": 2012, "column-2": 438, },
    { category: "2023-01", "column-1": 2012, "column-2": 438, },
    { category: "2023-02", "column-1": 2012, "column-2": 438, },
    { category: "2023-03", "column-1": 2012, "column-2": 438, },
  ];

  // init
  ytnLineChart2.reDataBinding(datas, categorys); // 데이터 변경시킬때
  ytnLineChart2.reColoring(["#4A81EB", "#F09F55"]); // 컬러세팅
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
  const $chart = document.querySelector("[data-card=연관어-워드클라우드] .js-chart");

  am4core.ready(function () {
    var data = [
      { name: "합병증", fill: "#d73b9e", value: 1100, fluc: 38.7 },
      { name: "초음파", fill: "#d73b9e", value: 536, fluc: 38.7 },
      { name: "당뇨병", fill: "#d73b9e", value: 368, fluc: 38.7 },
      { name: "부항", fill: "#ffa800", value: 363, fluc: 38.7 },
      { name: "백내장", fill: "#5ba1e0", value: 358, fluc: 38.7 },
      { name: "강남의원", fill: "#2cb24a", value: 312, fluc: 38.7 },
      { name: "하나병원", fill: "#54c2f0", value: 271, fluc: 38.7 },
      { name: "최고의원", fill: "#2cb24a", value: 267, fluc: -40.1 },
      { name: "한울병원", fill: "#54c2f0", value: 255, fluc: 38.7 },
      { name: "뜸", fill: "#2cb24a", value: 235, fluc: -40.1 },
      { name: "합병증", fill: "#d73b9e", value: 1100, fluc: 38.7 },
      { name: "초음파", fill: "#d73b9e", value: 536, fluc: 38.7 },
      { name: "당뇨병", fill: "#d73b9e", value: 368, fluc: 38.7 },
      { name: "부항", fill: "#ffa800", value: 363, fluc: 38.7 },
      { name: "백내장", fill: "#5ba1e0", value: 358, fluc: 38.7 },
      { name: "강남의원", fill: "#2cb24a", value: 312, fluc: 38.7 },
      { name: "하나병원", fill: "#54c2f0", value: 271, fluc: 38.7 },
      { name: "최고의원", fill: "#2cb24a", value: 267, fluc: -40.1 },
      { name: "한울병원", fill: "#54c2f0", value: 255, fluc: 38.7 },
      { name: "뜸", fill: "#2cb24a", value: 235, fluc: -40.1 },
      { name: "합병증", fill: "#d73b9e", value: 1100, fluc: 38.7 },
      { name: "초음파", fill: "#d73b9e", value: 536, fluc: 38.7 },
      { name: "당뇨병", fill: "#d73b9e", value: 368, fluc: 38.7 },
      { name: "부항", fill: "#ffa800", value: 363, fluc: 38.7 },
      { name: "백내장", fill: "#5ba1e0", value: 358, fluc: 38.7 },
      { name: "강남의원", fill: "#2cb24a", value: 312, fluc: 38.7 },
      { name: "하나병원", fill: "#54c2f0", value: 271, fluc: 38.7 },
      { name: "최고의원", fill: "#2cb24a", value: 267, fluc: -40.1 },
      { name: "한울병원", fill: "#54c2f0", value: 255, fluc: 38.7 },
      { name: "뜸", fill: "#2cb24a", value: 235, fluc: -40.1 },
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
      console.log("클릭 데이터 >> ");
      console.log($e.target._dataItem._dataContext);
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