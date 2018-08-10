


;(function(){

  if (!Array.prototype.forEach) {
      Array.prototype.forEach = function(cb) {
          var i = 0, s = this.length;
          for (; i < s; i++) {
              cb && cb(this[i], i, this);
          }
      }
  }

  document.fonts && document.fonts.forEach(function(font) {
      font.loaded.then(function() {
          if (font.family.match(/Led/)) {
              document.gauges.forEach(function(gauge) {
                  gauge.update();
              });
          }
      });
  });

  var timers = [];
  	/* custom-001.html */
      var gauge = new RadialGauge({
          renderTo: 'canvas-id',
          width: 300,
          height: 300,
          units: "",
          //title: "",

          startAngle: 90,
          ticksAngle: 180,
          colorPlate: "#ffffff",
          //colorPlateEnd: "#ffffff",
          colorUnits: "#3CA7DB",
          colorNumbers: "#534638",
          colorNeedle: "#8E7860",
          colorNeedleEnd: "#8E7860",
          colorNeedleCircleOuter: "#8E7860",
          colorNeedleCircleOuterEnd: "#8E7860",

          colorNeedleShadowUp: "#8E7860",
          colorNeedleShadowDown: "#8E7860",

          colorMajorTicks: ["#EBEBEB", "#EBEBEB", "#EBEBEB", "#EBEBEB", "#EBEBEB", "#EBEBEB"],
          colorMinorTicks: "#EBEBEB",

          minValue: 0,
          maxValue: 100,
          majorTicks: ["","20","40","60","80",""],
          minorTicks: "2",
          strokeTicks: true,
          highlights: [
              {
                  "from": -0.25,
                  "to": 39.99,
                  "color": "#FF9488"
              },
              {
                  "from": 39.99,
                  "to": 59.99,
                  "color": "#8FB9BD"
              },
              {
                  "from": 59.99,
                  "to": 100.25,
                  "color": "#B1B9CB"
              }
          ],
          //
          highlightsWidth: 25,
          numbersMargin: 12,
          //
          //barWidth: 20,
          //barStrokeWidth: 0,
          //barProgress: 1,
          //barShadow: 0,
          //
          animation: true,
          //animationDuration: 500,
          animationRule: "linear",
          animatedValue: true,
          //animateOnInit: true,

          borders: false,
          valueBox: false,

          needleType: "arrow",
          needleEnd: 65,
          needleWidth: 4,
          needleCircleSize: 10,
          needleCircleInner: false,
          needleCircleOuter: true,
          needleShadow: false,

          borderShadowWidth: 0

      }).draw();


      gauge.value = 56;
      gauge.update();

  	//custom-002.html
      var gaugePressure = new RadialGauge({
          renderTo: 'canvasPressure',
          width: 300,
          height: 300,
          units: "1010 hPa",
          startAngle: 70,
          ticksAngle: 220,
          colorPlate: "#ffffff",
          colorUnits: "#3CA7DB",
          colorNumbers: "#3CA7DB",
          needleType: "arrow",
          needleStart: 0,
          needleEnd: 75,
          needleWidth: 4,
          needleCircleSize: 10,
          needleCircleInner: false,
          needleCircleOuter: true,
          needleShadow: false,
          colorNeedle: "#3CA7DB",
          colorNeedleEnd: "#2698CE",
          colorNeedleCircleOuter: "#3CA7DB",
          colorNeedleCircleOuterEnd: "#3CA7DB",
  //        barWidth: 5,
  //        colorBarProgress: '#3CA7DB',
  //        colorBar: '#A8D3D5',

          colorMajorTicks: ["#A8D3D5", "#ffffff", "#ffffff", "#ffffff", "#ffffff",
              "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#A8D3D5"],
          colorMinorTicks: "#ffffff",

          // Вопрос в мин и макс значениях, при этих значениях анимация не работает
          minValue: 975,
          maxValue: 1045,

          majorTicks: ["","980","","990","","1000","","1010","","1020","","1030","","1040",""],
          minorTicks: "10",
          strokeTicks: true,

          highlights: [
              {
                  "from": 974.75,
                  "to": 1045.25,
                  "color": "#A8D3D5"
              }
          ],
          //
          highlightsWidth: 25,
          numbersMargin: 12,
          animation: true,
          animationRule: "linear",
          valueBox: false,
          borders: false,
          borderShadowWidth: 0,
          value: 1010,
          animateOnInit: true,
          animatedValue: true

      }).draw();





      window.addEventListener('load', function() {
          document.gauges.forEach(function(gauge) {
              gauge.on('animate', function(percent, value) {
                  gauge.update({ units: parseInt(value, 10) + ' hPa' });
              });
          });
      });

      let btnStartAnimate = document.querySelector("#btnAnimateCharts");
      btnStartAnimate.addEventListener("click", animateGauges);

      let btnStopAnimate = document.querySelector("#btnStopAnimation");
      btnStopAnimate.addEventListener("click", stopGaugesAnimation);


      function toggleAnimationButtons(){
        // console.log(document.querySelector("#btnAnimateCharts").classList);
        // console.log(document.querySelector("#btnStopAnimation").classList);
        document.querySelector("#btnAnimateCharts").classList.toggle("hidden");
        document.querySelector("#btnStopAnimation").classList.toggle("hidden");
      }

      function stopGaugesAnimation() {
        // console.log("detener");
          timers.forEach(function(timer) {
              clearInterval(timer);
          });

          toggleAnimationButtons();
      }
      // function animateGauges() {
      //     document.gauges.forEach(function(gauge) {
      //         timers.push(setInterval(function() {
      //             gauge.value = Math.random() *
      //                 (gauge.options.maxValue - gauge.options.minValue) +
      //                 gauge.options.minValue;
      //         }, gauge.animation.duration + 50));
      //     });
      // }

      function animateGauges(ev) {
        document.gauges.forEach(function(gauge) {
            timers.push(setInterval(function() {
                var min = 50;//gauge.options.minValue - 20;
                var max = 100;//gauge.options.maxValue + 20;

                gauge.value = min + Math.random() * (max - min);
            }, gauge.animation.duration + 50));
        });

        toggleAnimationButtons();
      }
})();
