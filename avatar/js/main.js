;(function(){
  document.querySelector("#file-uploader").addEventListener("change", function(ev){
      let img = ev.target.files[0];
      let imgURL = URL.createObjectURL(img);
      document.querySelector(".img").style.backgroundImage = "url(" + imgURL+ ")";
  });
})()
