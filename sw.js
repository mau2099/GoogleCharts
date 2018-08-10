//El service worker no tiene acceso al DOM
//Se maneja por medio de eventos
//Se debe cargar al menos una vez con internet y posteriormente ya se puede acceder sin internet

const CACHE_NAME = "frontend-v3"
const cache_urls =  [ //Estos caches guardados se pueden validar en: console -> application -> cache storage
                      "/offline/view.html",
                      "/offline/stylesOffline.css",
                      "/offline/multimedia/mapa.jpg"
                    ]
self.addEventListener("install", function(ev){
  console.log("instalando")
  caches.open(CACHE_NAME)
  .then(function(cache){
    return cache.addAll(cache_urls)
  })
})

self.addEventListener('activate', function(event) {
  console.log("SW activated")
  var cacheWhitelist = [CACHE_NAME]

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
    	console.log(cacheNames)
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      )
    })
  )
})

  //Cada de se realiza peticiones de la pagina hacia afuera, se ejecuta una peticion
self.addEventListener("fetch", function(ev){
  //console.log(ev.request);
  ev.respondWith(
    caches.match(ev.request)
    .then(function(response){
      if(response)
        return response
      return fetch(ev.request)  //Aquí es donde se regresa toda la pagina que tiene cacheada
    })
    .catch(function(err){
      if(ev.request.mode == "navigate"){//intento acceder a la pagina
        return caches.match("/offline/view.html")
      }
    })
  )
})
