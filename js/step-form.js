//funcion anonima que se autoejecuta con los parentesis del final de la funcion
;(function(){
  const selectorForm = "#contact-form"
  const emailDestinatario = "https://formspree.io/fgc.2007@hotmail.com";

  $(".step textarea").on("keydown", (ev)=>{
    if(ev.keyCode == 13){
      console.log("Se presiono enter");
      ev.preventDefault()

      $(ev.target).blur() //Ejecuta que quite el foco de un elemento, lo contrario de focus
    }
  })
  $(".path-step").on("click", (ev)=>{
    $(".path-step.active").removeClass("active")
    const $currentCircle = $(ev.target)
    $currentCircle.addClass("active")
    const $currentPosiion = $currentCircle.index(".path-step") + 1
    let $stepFocus = $(".step:nth-child("+$currentPosiion+")")

    enfocarSiguente($stepFocus)

  })

  $(selectorForm).find(".input").on("change", (ev)=>{
    let $step = $(ev.target) //al ponerlo con el $ se convierte a objeto de jQuery
    let $next_step = $step.parent().next(".step")
    if($next_step.length > 0){
      enfocarSiguente($next_step)
    }
    else{
      validar_formulario()
    }
  })

  //Helpers
  function validar_formulario(){
    if(esFormularioValido()){
      sendForm($(selectorForm))
    }
    else {
      let $fieldInvalido = $(selectorForm).find(".input:invalid").first().parent()
      enfocarSiguente($fieldInvalido)
    }
  }

  function esFormularioValido(){
    return document.querySelector(selectorForm).checkValidity()
  }

  // function enfocarSiguente(){
  //   $fieldInvalido.focus()
  // }

  function enfocarSiguente($next_step){
    $(".step.active").removeClass("active")
    $next_step.addClass("active")
    $next_step.find(".input").focus()

    const $currentPosiion = ($next_step.index(".step")) + 1
    $(".path-step.active").removeClass("active")
    $(".path-step:nth-child("+$currentPosiion+")").addClass("active")
  }


  //Seccion para envío de correo
  $(selectorForm).on("submit", function(ev){
    ev.preventDefault()
    sendForm($(this))
    return false
  })

  function sendForm($form){
    $.ajax({
      url: emailDestinatario, //"https://formspree.io/fgc.2007@hotmail.com",
      method: "POST",
      data: $form.formObject(),
      dataType: "json",
      success: function(){
        $form.slideUp("fast")
        $("#info-form").html("Hemos recibido tu mensaje. Nos podremos en contacto muy pronto.")
      }
    });
  }
})()
