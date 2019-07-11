// Graph tests

  Highcharts.setOptions({
    chart: {
      style: {
        fontFamily: 'sans-serif'
      },
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            chart: {
              height: 300
            },
            subtitle: {
              text: null
            },
            navigator: {
              enabled: false
            }
          }
        }]
      },
    },
    lang: {
      rangeSelectorZoom: ''
    }
  });

  var chart = Highcharts.chart('stable-fund', {
    chart: {
      type: 'column'
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },

    xAxis: {
       categories: ['Opportunity Fund', 'Benchmark<br>(Inflation + 4%)', 'Cash<br>(e.g. Bank account)', 'Inflation']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Annual Returns %'
      }
    },
    legend: {
      enabled: false
    },
    tooltip: {
      shadow: false
    },

    exporting: {
      enabled: false
    },

    plotOptions: {
      column: {
        colorByPoint: true,
        states: {
          hover: {
            enabled: false
          }
        }
      }
    },
    colors: [
      '#78be20',
      '#dedede',
      '#dedede',
      '#dedede'
    ],

    series: [{
      name: 'Percentage',
      data: [12.5, 11.1, 8.7, 5.6],
    }]

  });

  $('.sort-button').click(function() {
    $(this).siblings().addClass('inactive')
    $(this).removeClass('inactive');
  });

  $('#one-year').click(function() {
    chart.series[0].setData([11.5, 11.1, 7.7, 5.6] );
  });

  $('#inception').click(function() {
    chart.series[0].setData([12.5, 11.1, 8.7, 5.6] );
  });

  // Line charts

  var seriesOptions = [],
  seriesCounter = 0,
  names = ['Return', 'Inflation', 'Benchmark'];

  /**
    * Create the chart when all data is loaded
    * @returns {undefined}
  */

  function createChart() {

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