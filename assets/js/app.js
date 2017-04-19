window.addEventListener("load", function(){
  var cuerpo = document.getElementById("body");

/** Agregando h1 y hr **/
  function AddTitle(frase) {
    var titulo = document.createElement("h1");
    cuerpo.appendChild(titulo);
    titulo.appendChild(document.createTextNode(frase));

    var hr = document.createElement("hr");
    cuerpo.appendChild(hr);
  };
  AddTitle("Nuestras coders");

/** Agregando coders **/
  var coders = ["arantza burga","elizabeth condori","grecia rayme","michelle more","rosario felix","yenny velasquez"];
  var section = document.createElement("section");
  cuerpo.appendChild(section);

  function AddCoders(array){
    array.forEach(function(e){

      var figure = document.createElement("figure");
      figure.setAttribute("class", "figure-coder");
      section.appendChild(figure);

      var image = document.createElement("img");
      image.setAttribute("src","assets/img/"+ e + ".jpg");
      image.setAttribute("title",e);
      image.setAttribute("class","image-coder");
      figure.appendChild(image);

      var figcap = document.createElement("figcaption");
      figcap.setAttribute("class","name-coder");
      figure.appendChild(figcap);
      figcap.appendChild(document.createTextNode(e));
    })
  };
  AddCoders(coders);

/** Agregando footer **/
  function AddFooter(texto){
    var footer = document.createElement("footer");
    cuerpo.appendChild(footer);
    footer.appendChild(document.createTextNode(texto));
  };
  AddFooter("~~ Coded by Ruth Salvador ~~")

})
