window.addEventListener("load", function(){
  var cuerpo = document.getElementById("body");

/** Agregando h1 y hr **/
  function AddTitle(frase) {
    var titulo = document.createElement("h1");
    cuerpo.appendChild(titulo);
    titulo.appendChild(document.createTextNode(frase));

    var hr = document.createElement("hr");
    hr.setAttribute("width","200px");
    cuerpo.appendChild(hr);
  };
  AddTitle("Nuestras coders");



})
