;(function(){
  //*********************** Fotos Tomadas - Line Chart ***********************
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawLineChart);

  function drawLineChart() {
    var data = google.visualization.arrayToDataTable([
      ['Mes', '2017', '2018'],
      ['Enero',  1000,      400],
      ['Febrero',  1170,      460],
      ['Marzo',  660,       1120],
      ['Abril',  1030,      540]
    ]);

    var options = {
      title: 'Teclo Mexicana',
      curveType: 'function',
      legend: { position: 'bottom' },
      // width: 400,
      // height: 400
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    console.log("chart");
    chart.draw(data, options);
  }

  //*********************** Evaluación Complemento de Datos - Combo Chart ***********************
  google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawVisualization);

        function drawVisualization() {
          // Some raw data (not necessarily accurate)
          var data = google.visualization.arrayToDataTable([
           ['Mes', 'Dato 1',     'Dato 2',    'Dato 3',         'Dato 4',     'Dato 5', 'Promedio'],
           ['2017/01',  165,      938,         522,             998,           450,      614.6],
           ['2017/02',  135,      1120,        599,             1268,          288,      682],
           ['2017/03',  157,      1167,        587,             807,           397,      623],
           ['2017/04',  139,      1110,        615,             968,           215,      609.4],
           ['2017/05',  136,      691,         629,             1026,          366,      569.6]
        ]);

      var options = {
        title : 'Mensualmente Evalucación de Datos Complementarios',
        vAxis: {title: 'Datos'},
        hAxis: {title: 'Mes'},
        seriesType: 'bars',
        series: {5: {type: 'line'}},
        // width: 400,
        // height: 400
      };

      var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }


    //*********************** Autorizados - Stacked Bar Chart ***********************
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawStacked);

    function drawStacked() {
      var data = google.visualization.arrayToDataTable([
        ['2017', 'Autorizados', { role: "style" }, 'Rechazados', { role: "style" } ],
        ['Enero', 43812, "#037408", 6188, "#d31a2b"],
        ['Febrero', 10284, "#037408", 39716, "#d31a2b"],
        ['Marzo', 41742, "#037408", 11258, "#d31a2b"],
        ['Abril', 27508, "#037408", 22492, "#d31a2b"],
        ['Mayo', 49000, "#037408", 3450, "#d31a2b"],
      ]);

      // var view = new google.visualization.DataView(data);
      //       view.setColumns([0, 1,
      //                        { calc: "stringify",
      //                          sourceColumn: 1,
      //                          type: "string",
      //                          role: "annotation" },
      //                        2]);

      var options = {
        legend: { position: "none" },
        title: 'Autorizados',
        chartArea: {width: '85%'},
        isStacked: true,
        hAxis: {
          title: 'Total de Procesados',
          minValue: 0,
          maxValue: 50000,
        },
        vAxis: {
          title: 'Mes'
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('barchart_values'));
      chart.draw(data, options);
    }

    //*********************** Asignacion de Folio - Pie charts ***********************
    google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawPieChart);
    function drawPieChart() {
        var data = google.visualization.arrayToDataTable([
          ['Descripción', 'Total'],
          ['Asignados',   33456],
          ['Rechazados',  12375],
          ['Sin Asignar', 23742],
          ['Cancelados',  2842],
        ]);

        var options = {
          title: 'Folio Asignados',
          is3D: true,
          animation:{
            duration: 1000,
            easing: 'out',
          },
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
    }

    //*********************** Línea de Captura - gauge Charts ***********************
    google.charts.load('current', {'packages':['gauge']});
     google.charts.setOnLoadCallback(drawGaugeChart);

     function drawGaugeChart() {

       var data = google.visualization.arrayToDataTable([
         ['Label', 'Value'],
         ['Generados', 80],
         ['Asignados', 55],
         ['Cancelados', 0],
       ]);

       var options = {
         // width: 400, height: 120,
         redFrom: 90, redTo: 100,
         yellowFrom:75, yellowTo: 90, yellowColor: "#FFF000",
         greenFrom:50, greenTo: 75,
         minorTicks: 3,
         animation:{
          duration: 1000,
          easing: 'out',
         },
       };

       var chart = new google.visualization.Gauge(document.getElementById('gauge_charts'));

       chart.draw(data, options);

       setInterval(function() {
         data.setValue(0, 1, 80 + Math.round(20 * Math.random()));
         chart.draw(data, options);
       }, 1000);
       setInterval(function() {
         data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
         chart.draw(data, options);
       }, 1000);
       // setInterval(function() {
       //   data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
       //   chart.draw(data, options);
       // }, 1000);
       setInterval(function() {
         data.setValue(2, 1, 0 + Math.round(2 * Math.random()));
         chart.draw(data, options);
       }, 1000);
     }

     //*********************** Firma Electronica - Bar Chart ***********************
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(draFirmaChart);
    function draFirmaChart() {
      var data = google.visualization.arrayToDataTable([
        ["Semana", "Total", { role: "style" } ],
        ["1", 34812, "#b87333"],
        ["32", 93721, "silver"],
        ["43", 73212, "gold"],
        ["48", 62721, "color: #e5e4e2"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Generados con Firma Electrónica",
        // width: 600,
        // height: 400,
        bar: {groupWidth: "100%"},
        legend: { position: "none" },
        isStacked: true
      };

      var chart = new google.visualization.BarChart(document.getElementById("barchart_firma"));
      chart.draw(view, options);
    }


  //*********************** Complemento Información Adicional - Pie charts ***********************
  google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawPieChartAdicional);
  function drawPieChartAdicional() {
      var data = google.visualization.arrayToDataTable([
        ['Descripción', 'Total'],
        ['Info 2',   12375],
        ['Info 1',   33456],
        ['Info 3',   23742],
        ['Info 4',   2842]
      ]);

      var options = {
        title: 'Complementa Información Adicional',
        is3D: true,
        animation:{
          duration: 1000,
          easing: 'out',
        },
        slices: {
                   0: {color: "#1034D1", offset: 0.4},
                   1: {color: "#A106AF"},
                   2: {color: "#1FABDF"},
                   3: {color: "#d31a2b", offset: 0.2},
                },
      };

      var chart = new google.visualization.PieChart(document.getElementById('piechart_3d_info_adicional'));
      chart.draw(data, options);
      setInterval(function() {
        data = google.visualization.arrayToDataTable([
          ['Descripción', 'Total'],
          ['Info 2',   Math.round(20 * Math.random())],
          ['Info 1',   Math.round(50 * Math.random())],
          ['Info 3',   Math.round(80 * Math.random())],
          ['Info 4',   Math.round(35 * Math.random())]
        ]);
        data.setValue(3, 1, 0 + Math.round(2 * Math.random()));
        chart.draw(data, options);
      }, 5000);
  }


  // ****************************** Creacion de Boletas - Bubble Charts *****************************
  google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawSeriesChartBubbles);

  function drawSeriesChartBubbles() {

    var data = google.visualization.arrayToDataTable([
      ['ID', 'Hora', 'Cantidad',   'Cantidad/Hora',               ''],
      ['',   9,         1000,       Math.round((1000/8000)*100),  Math.round((1000/8000)*100)],
      ['',   12,        1200,       Math.round((1200/8000)*100),  Math.round((1200/8000)*100)],
      ['',   14,        3500,       Math.round((3500/8000)*100),  Math.round((3500/8000)*100)],
      ['',   16,        2000,       Math.round((2000/8000)*100),  Math.round((2000/8000)*100)],
      ['',   18,        8000,       Math.round((8000/8000)*100),  Math.round((8000/8000)*100)],
      ['',   20,        5500,       Math.round((5500/8000)*100),  Math.round((5500/8000)*100)],
      ['',   22,        500,        Math.round((500/8000)*100),   Math.round((500/8000)*100)]
    ]);

    var options = {
      title: 'Creacion de Boletas por Hora durante la segunda semana de Enero 2018',
      hAxis: {title: 'Hora'},
      colorAxis: {colors: ['yellow', 'red']},
      vAxis: {title: 'Boletas Creadas'},
      bubble: {textStyle: {fontSize: 11}},
      legend: { position: "none" },
      animation:{
        duration: 2000,
        easing: 'out',
      },
    };

    var chart = new google.visualization.BubbleChart(document.getElementById('scatter_chart_boletas'));
    chart.draw(data, options);

    setInterval(function() {
      let random9 = Math.round((1000 * Math.random()));
      let random12 = Math.round((1200 * Math.random()));
      let random14 = Math.round((3500 * Math.random()));
      let random16 = Math.round((2000 * Math.random()));
      let random18 = Math.round((8000 * Math.random()));
      let random20 = Math.round((5500 * Math.random()));
      let random22 = Math.round((500 * Math.random()));
      data = google.visualization.arrayToDataTable([
        ['ID', 'Hora',    'Cantidad',        'Cantidad/Hora',               'Cantidad/Hora'],
        ['',   9,         random9,        Math.round((random9/8000)*100),     Math.round((random9/8000)*100)],
        ['',   12,        random12,       Math.round((random12/8000)*100),    Math.round((random12/8000)*100)],
        ['',   14,        random14,       Math.round((random14/8000)*100),    Math.round((random14/8000)*100)],
        ['',   16,        random16,       Math.round((random16/8000)*100),    Math.round((random16/8000)*100)],
        ['',   18,        random18,       Math.round((random18/8000)*100),    Math.round((random18/8000)*100)],
        ['',   20,        random20,       Math.round((random20/8000)*100),    Math.round((random20/8000)*100)],
        ['',   22,        random22,        Math.round((random22/8000)*100),   Math.round((random22/8000)*100)]
      ]);
      chart.draw(data, options);
    }, 30000);
  }


  // ******************************** Impresion de Boletas - Vertical Stacked Bars ****************************
  google.charts.load('current', {'packages':['bar']});
     google.charts.setOnLoadCallback(drawStuff);

     function drawStuff() {
       var data = new google.visualization.arrayToDataTable([
         ['Mes',      'impresas', 'repartidas', 'devueltas'],
         ['Enero',    85200,      70321,      5402],
         ['Febrero',  40000,      29231,      1238],
         ['Marzo',    23100,      14862,      7162],
         ['Abril',    50000,      10000,      7362],
       ]);

       var options = {
         // width: 800,
         legend: { position: 'top' },
         chart: {
           title: 'Boletas',
           subtitle: 'Estatus por Mes'
         },
         bars: 'vertical', // Required for Material Bar Charts.
         series: {
           0: { axis: 'impresas' }, // Bind series 0 to an axis named 'distance'.
           1: { axis: 'repartidas' }, // Bind series 1 to an axis named 'brightness'.
           2: { axis: 'devueltas' }, // Bind series 1 to an axis named 'brightness'.
           // 3: { axis: 'repartidas' }, // Bind series 1 to an axis named 'brightness'.
         },
         axes: {
           x: {
             creadas: {label: 'parsecs'}, // Bottom x-axis.
             // impresas: {side: 'top', label: 'apparent magnitude'}, // Top x-axis.
             // devueltas: {side: 'top', label: 'apparent magnitude'}, // Top x-axis.
           }
         }
       };

     var chart = new google.charts.Bar(document.getElementById('chart_bar_impBoletas'));
     chart.draw(data, options);
   };


    // ****************************** Publicacion de Infracciones - Bubble Charts *****************************
     google.charts.load('current', {'packages':['corechart']});
       google.charts.setOnLoadCallback(drawSeriesChartBubblesInfracciones);

     function drawSeriesChartBubblesInfracciones() {

       var data = google.visualization.arrayToDataTable([
         ['ID', 'Dia',    'Cantidad',        'Cantidad/Dia',               'Cantidad/Dia'],
         ['',   1,         1000,       Math.round((1000/8000)*100),  Math.round((1000/8000)*100)],
         ['',   2,        1200,       Math.round((1200/8000)*100),  Math.round((1200/8000)*100)],
         ['',   3,        3500,       Math.round((3500/8000)*100),  Math.round((3500/8000)*100)],
         ['',   4,        2000,       Math.round((2000/8000)*100),  Math.round((2000/8000)*100)],
         ['',   5,        8000,       Math.round((8000/8000)*100),  Math.round((8000/8000)*100)],
         ['',   6,        5500,       Math.round((5500/8000)*100),  Math.round((5500/8000)*100)],
         ['',   7,        500,        Math.round((500/8000)*100),   Math.round((500/8000)*100)]
       ]);

       var options = {
         title: 'Gestión de Infracciones por Dia',
         hAxis: {title: 'Día'},
         colorAxis: {colors: ['#007EFF', '#FFA100']},
         vAxis: {title: 'Infracciones Publicadas'},
         bubble: {textStyle: {fontSize: 11}},
         legend: { position: "none" },
         animation:{
           duration: 2000,
           easing: 'out',
         },
       };

       var chart = new google.visualization.BubbleChart(document.getElementById('bubble_chart_infracciones'));
       chart.draw(data, options);

       setInterval(function() {
         let random9 = Math.round((2321 * Math.random()));
         let random12 = Math.round((8312 * Math.random()));
         let random14 = Math.round((9422 * Math.random()));
         let random16 = Math.round((4323 * Math.random()));
         let random18 = Math.round((5382 * Math.random()));
         let random20 = Math.round((9323 * Math.random()));
         let random22 = Math.round((8421 * Math.random()));
         data = google.visualization.arrayToDataTable([
           ['ID', 'Dia',    'Cantidad',        'Cantidad/Dia',               'Cantidad/Dia'],
           ['',   1,         random9,        Math.round((random9/8000)*100),     Math.round((random9/8000)*100)],
           ['',   2,        random12,       Math.round((random12/8000)*100),    Math.round((random12/8000)*100)],
           ['',   3,        random14,       Math.round((random14/8000)*100),    Math.round((random14/8000)*100)],
           ['',   4,        random16,       Math.round((random16/8000)*100),    Math.round((random16/8000)*100)],
           ['',   5,        random18,       Math.round((random18/8000)*100),    Math.round((random18/8000)*100)],
           ['',   6,        random20,       Math.round((random20/8000)*100),    Math.round((random20/8000)*100)],
           ['',   7,        random22,        Math.round((random22/8000)*100),   Math.round((random22/8000)*100)]
         ]);
         chart.draw(data, options);
       }, 5000);
     }
  //
  // // ********************************** Geo charts *************************************+
  // google.charts.load('current', {
  //      'packages':['geochart'],
  //      // Note: you will need to get a mapsApiKey for your project.
  //      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  //      'mapsApiKey': 'AIzaSyDvgr4nBfHofnBwObClBn4789WWGqA-oFs'
  //    });
  //    google.charts.setOnLoadCallback(drawRegionsMap);
  //
  //    function drawRegionsMap() {
  //      var data = google.visualization.arrayToDataTable([
  //        ['States','Estado','Poblacion (2013)'],
  //        ['MX-MEX','Estado de Mexico',16396826],
  //        ['MX-DF','Distrito Federal',8891375],
  //        ['MX-VER','Veracruz',7931295],
  //        ['MX-JAL','Jalisco',7754609],
  //        ['MX-PUE','Puebla',6075839],
  //        ['MX-GUA','Guanajuato',5726157],
  //        ['MX-CHP','Chiapas',5127866],
  //        ['MX-NLE','Nuevo Leon',4950328],
  //        ['MX-MIC','Michoacan de Ocampo',4534280],
  //        ['MX-OAX','Oaxaca',3962574],
  //        ['MX-CHH','Chihuahua',3640680],
  //        ['MX-ZAC','Zacatecas',1551805],
  //        ['MX-ROO','Quintana Roo',1490711],
  //        ['MX-AGU','Aguascalientes',1254540],
  //        ['MX-TLA','Tlaxcala',1245022],
  //        ['MX-NAY','Nayarit',1181299],
  //        ['MX-CAM','Campeche',882076],
  //        ['MX-BCS','Baja California Sur',721106],
  //        ['MX-COL','Colima',699909]
  //      ]);
  //     //https://en.wikipedia.org/wiki/Administrative_divisions_of_Mexico  ---regions
  //     //https://developers.google.com/adwords/api/docs/appendix/geotargeting   --Regions google
  //      var options = {
  //                legend: 'none', // se quita el slider indicador de poblacion minima y maxima
  //                //tooltip: {trigger:'none'}, //oculta el tooltip
  //                region: 'MX',   // region a dibujar en el mapa
  //                resolution: 'provinces',    //forma en la que se seccionará el mapa
  //                // color minimo: 'LightYellow' y color maximo: 'Salmon', igual se pueden utilizar los valor rgb.
  //                colorAxis: {colors: ['LightYellow', 'Salmon'] }
  //              };
  //
  //      var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
  //
  //      chart.draw(data, options);
  //    }
})()
