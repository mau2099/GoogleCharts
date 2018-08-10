class CUMScout {
  constructor(cum) {
    this.cum = cum;
    this.url = "http://ddiscouts.org.mx/regnal/conexion_regnal.asp";
    this.jsonForm = null;
    this.response = null;
    this.cums = [];
    this.createForm = this.createForm.bind(this);
    this.sendForm = this.sendForm.bind(this);
    this.button = $("sendCUMS");
    this.createForm();
    this.serializeForm();
    this.sendForm();
  }

  bindEvents(){
  }

  createForm(){
    this.form = document.createElement("form");
    this.form.id ="scout-form";
    this.form.action = this.url;
    this.form.method = "POST";
    $(this.form).append('<input name="cum" type="text" id="cum" size="10" maxlength="10" value="'+ this.cum +'">');
    // $("body").append(this.form);
  }
  serializeForm(){
    const form = {}
    $.each($(this.form).serializeArray(), function (i, field) {
      form[field.name] = field.value || ''
    })
    this.jsonForm = form;
  }

  sendForm(){
    var that = this;
    $.ajax({
      type: 'POST',
      url: this.url,
      data: this.jsonForm,
      success: function(data, textStatus, request){
          setTimeout(function(){
            console.log("success");
            that.response = data;
    	      let divInfo = document.createElement("div")
            $(divInfo).addClass("row").addClass("cum-info");
            $(divInfo).css("color", "black").css("border", "1px solid #d31a2b").css("margin", "1.2em").css("font-size", "12px");
            $(divInfo).append('<div class="col-xs-12 text-center" style="background-color:#eee; color:#d31a2b; font-weight: bold;"> Usuario: '+ that.cum.toUpperCase() +'</div>')
            if(($($.parseHTML(that.response)).find("input:not(:button)")).length == 0)
              $(divInfo).append("Sin Información")
            else {
              $($.parseHTML(that.response)).find("input:not(:button)").each((index, element) => {
                 $(divInfo).append('<div class="row" style="border-bottom: solid 1px #eee"><div class="col-xs-2">' + element.name + ': </div> <div class="col-xs-10"> ' + element.value + '</div></div>')
              })
            }
            $(divInfo).insertAfter("body");
          }, 500);
      },
      error: function (request, textStatus, errorThrown) {
        console.log("error")
     }
    });
  }
}

;(function(){
  document.getElementsByTagName("body")[0].innerHTML = "";
  $('head').append('<meta charset="utf-8">');
  var linkElem = document.createElement('link');
  document.getElementsByTagName('head')[0].appendChild(linkElem);
  linkElem.rel = 'stylesheet';
  linkElem.type = 'text/css';
  linkElem.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';
  $("body").addClass("container");
  $("body").html('<div>Ingresar cada registro en lineas diferentes (máximo 50)</div><br/><textarea class="form-control" name="no-consider" id="cums" cols="50" rows="5"></textarea><br/><button class="btn btn-info" id="sendCUMS">Generar</button>')
  // $("#iframeScouts").contents().find("html").html("");
  // $("#iframeScouts").contents().find("html").html('<textarea name="no-consider" id="cums" cols="40" rows="5"></textarea><br/><button id="sendCUMS">Generar</button>')
  $("#sendCUMS").on("click", ()=>{
    if($(".cum-info")){
      $(".cum-info").html("")
      $(".cum-info").attr("style", "")
    }
    let $cums = $($("#cums").val().split(/\n/))
    let divConsultando = null;
    if($("#divConsultando").length){
      divConsultando = $("#divConsultando");
    }
    else {
      divConsultando = document.createElement("div")
      divConsultando.id = "divConsultando";
    }
    $(divConsultando).text("Consultando...").css("background-color", "#eee").css("color", "#d31a2b").css("font-size", "14px").addClass("container");

    $(divConsultando).insertBefore("body");
    // $("body").append(divConsultando)
    $cums.each((index, cum) => {
      // console.log(index + "-" +$cums.length);
      if(!(cum==undefined || cum == ""))
        new CUMScout(cum);
    })
    var myVar = setInterval(function(){ myTimer() }, 500);
    function myTimer() {
      if($.active == 0){
        $("#divConsultando").text("Busqueda Finalizada").css("font-weight", "bold")
        clearInterval(myVar);
      }
    }
  })

})()
