1. en google chrome ingresar a: http://ddiscouts.org.mx/regnal/
2. abrir consola de desarrollador con boton F12
3. en la consola escribir lo siguiente:
		var tag = document.createElement("script");
tag.src = "https://code.jquery.com/jquery-3.3.1.min.js";
		document.getElementsByTagName("head")[0].appendChild(tag);
setTimeout(()=>{ $.getScript		("https://teclo.herokuapp.com/js/scouts.js", null); }, 100);
4. Al dar enter cambiara la intefaz de la pagina, ahora muestra un control para ingresar los registros y el boton para buscar
5. Ingresar cada elemento que se requiere buscar separados con un salto de linea
6. Click en 'Generar'
7. Es posible generar las busquedas tantas veces como se requiera


Datos de prueba:
COY1709229
Iza0530103
SON1690166
COY9890119