// Line charts

  var seriesOptions = [],
  seriesCounter = 0,
  names = ['Return', 'Inflation', 'Benchmark'];
  // names = ['Return'];

  /**
    * Create the chart when all data is loaded
    * @returns {undefined}
  */
  // $('#switch-graph').click(function(e) {
  function createChart() {

  // var chart = Highcharts.chart('stable-fund-compound', {

  Highcharts.stockChart('stable-fund-compound', {

    rangeSelector: {
      enabled: false,
    },

    plotOptions: {
      column: {
        colorByPoint: true,
        states: {
          hover: {
            enabled: false
          }
        }
      },
      series: {
        compare: 'percentage',
        lineWidth: 2
      }
    },
    colors: [
      '#78be20',
      '#cccccc',
      '#28af88',
    ],

    navigator: {
      enabled: false
    },

    scrollbar: {
      enabled: false
    },

    title: {
      text: null
    },

    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        year: '%Y'
      }
    },

    yAxis: {
      opposite: false,
      labels: {
        formatter: function () {
            return '<span>R' + this.value + '</span>';
        },
        softMin: 10000
      },
      plotLines: [{
        value: 0,
        width: 2,
        color: 'silver'
      }]
    },

    tooltip: {
      pointFormat: '<span>{series.name}</span>: <b>{point.y}</b>',
      valueDecimals: 2,
      split: true,
      shadow: false
    },

    series: seriesOptions

    });
  }

  $.each(names, function (i, name) {

    $.getJSON('/json-data/' + name.toLowerCase() + '.json',    function (data) {

      seriesOptions[i] = {
        name: name,
        data: data
      };

      // As we're loading the data asynchronously, we don't know what order it will arrive. So
      // we keep a counter and create the chart when all the data is loaded.
      seriesCounter += 1;
      if (seriesCounter === names.length) {
        createChart();
      }
    });
  });
  // });

  // Switch graphs

  $('#switch-graph').on("click",function(){
    $(".chart-legend").toggle();
    $(this).toggleClass('graph-switched');
    $('#switch-graph span').text(function(i, text){
        return text === "Show percentage" ? "Show effect of compounding" : "Show percentage";
      })
    $(this).parent().next(".bar-graph").slideToggle(400);
    $(this).parent().parent().find(".filter-control-graph").toggle();
  });