if(navigator.serviceWorker){
  navigator.serviceWorker.register("/sw.js")
}

//Se encapsula la funciona que se ejecuta con los parentesis del final
;(function(){
  window.addEventListener('resize', function(event){
    console.log(window.innerWidth);
  });
  let sticky = false
  let currentPosition = 0
  const imgsQuantity = $("[data-name='image-counter']").attr("content") //envio de informacion con metadatos
  let $stickynav = $("#sticky-navigation")

//Con arrow function
  // $("#menu-opener").on("click", (ev)=>{
  //   $("#responsive-nav ul").toggleClass("active")
  //   $(ev.currentTarget).toggleClass("glyphicon-menu-hamburger") //Se pone la de la hamburguesa porque es la primera que aparece
  // })
  //Con function
  // $("#menu-opener").on("click", function(){
  //   $("#responsive-nav ul").toggleClass("active")
  //   $(this).toggleClass("glyphicon-menu-hamburger")
  // })

  $("#menu-opener").on("click",toggleNav)
  $(".menu-link").on("click", toggleNav)

  function toggleNav(menuItem){
    $("#responsive-nav ul").toggleClass("active")
    $("#menu-opener").toggleClass("glyphicon-menu-hamburger") //Se pone la de la hamburguesa porque es la primera que aparece
  }

  $stickynav.removeClass("hidden")
  $stickynav.slideUp(0)
  checkResize()
  checkScroll()
  isOpen()
  setInterval(()=>{ //Metodo para la galeria slider
    currentPosition += 1
    if(currentPosition>imgsQuantity){
      currentPosition = 0
    }
    $("#gallery .inner").css({left : "-"+currentPosition*100+"%"})
  }, 10000)

  $(window).scroll(checkScroll)
  $(window).resize(checkResize);

  function checkResize(){
    if($(window).width() <= 480){ $('#sticky-navigation').removeClass("col-xs-8").addClass("col-xs-12"); console.log($('#sticky-navigation').attr("class")); }
    else $('#sticky-navigation').removeClass("col-xs-12").addClass("col-xs-8")
  }

  function checkScroll() {

    const inBottom = isInBottom()
    if(inBottom && !sticky){
      sticky = true
      stickNavigation()
    }

    if(!inBottom && sticky){
      sticky = false
      unstickNavigation()
    }
  }
  function stickNavigation(){
    $("#description").addClass("fixed").removeClass("absolute")
    $("#navigation").slideUp("fast")
    $("#sticky-navigation").slideDown("fast")
    $("#menu-opener").toggleClass("display-block")
  }
  function unstickNavigation(){
    $("#description").removeClass("fixed").addClass("absolute")
    $("#navigation").slideDown("fast")
    $("#sticky-navigation").slideUp("fast")
    $("#menu-opener").toggleClass("display-block")
  }
  function isInBottom(){
      const $description = $("#description")
      const descriptHeight = $description.height()

      return $(window).scrollTop() > $(window).height() - (descriptHeight*2)
  }

  function isOpen(){ //Para modificar si esta abierto o cerrado
    let date = new Date()
    const currentHour = date.getHours()
    if(currentHour < 15 || currentHour > 23){
      $("#isOpen").html("Cerrado </br> Horario: 5:00pm - 11:00pm")
    }
  }
})()
