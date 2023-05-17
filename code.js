let card = document.getElementById("card");
let archivo = document.getElementById("archivo");
let arc1 = document.getElementById("arc1");
let arc2 = document.getElementById("arc2");
let det1 = document.getElementById("det1");
let det2 = document.getElementById("det2");
let con1 = document.getElementById("con1");
let con2 = document.getElementById("con2");
let version1 = document.getElementById("version1").innerText;
let version2 = document.getElementById("version2").innerText;

arc1.addEventListener("click", function () {
  document.getElementById("print").innerHTML = "Versión " + version1;
  card.classList.remove("collapse");
  archivo.classList.remove("collapse");
  detalle.classList.add("collapse");
  config.classList.add("collapse");
});

arc2.addEventListener("click", function () {
  document.getElementById("print").innerHTML = "Versión " + version2;
  card.classList.remove("collapse");
  archivo.classList.remove("collapse");
  detalle.classList.add("collapse");
  config.classList.add("collapse");
});

det1.addEventListener("click", function () {
  document.getElementById("print2").innerHTML = "Versión " + version1;
  card.classList.remove("collapse");
  detalle.classList.remove("collapse");
  archivo.classList.add("collapse");
  config.classList.add("collapse");
});

det2.addEventListener("click", function () {
  document.getElementById("print2").innerHTML = "Versión " + version2;
  card.classList.remove("collapse");
  detalle.classList.remove("collapse");
  archivo.classList.add("collapse");
  config.classList.add("collapse");
});

con1.addEventListener("click", function () {
    document.getElementById("print3").innerHTML = "Versión " + version1;
    card.classList.remove("collapse");
    config.classList.remove("collapse");
    detalle.classList.add("collapse");
    archivo.classList.add("collapse");
  });

  con2.addEventListener("click", function () {
    document.getElementById("print3").innerHTML = "Versión " + version2;
    card.classList.remove("collapse");
    config.classList.remove("collapse");
    detalle.classList.add("collapse");
    archivo.classList.add("collapse");
  });


let addBackground =  (data) => {
  var lines = data.split("\n");
  var txt = "";

  for (let [i, value] of lines.entries()) {
    // Replace spaces
    console.log(value);
    value = value.replaceAll(" ", "&ensp;");
    // Replace symbol <> to show plain text
    value = value.replaceAll("<", "&lt;");
    value = value.replaceAll(">", "&gt;");

     if (i==5) {
       txt += "<p class='bg-success-subtle m-0'>" + value + "</p>";
    
// else if (value[0] == "-") {
//       txt += "<p class='bg-danger-subtle m-0'>" + value + "</p>";
    } else {
      txt += "<p class='m-0'>" + value + "</p>";
    }
  }

  return txt;
};
let contenido = `<div class="container">
    <div class="row g-2">
        <div class="col-sm-3 bg-primary">
            <div class="p-3 border bg-light">
                <div class="card">
                    <div class="bg-purple p-4 text-center rounded-top">
                        <img src="images/profile.jpg" class="card-img-top  rounded-circle" alt="...">
                    </div>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-9 bg-dark">
            <div class="p-3 border bg-light">

            <p class='m-0'>col 2</p>
            </div>
        </div>
    </div>
</div>`;

contenido =  addBackground(contenido)

document.querySelector("#collapseOne .accordion-body").innerHTML = contenido;


    addbackground =  (data) => {
    var lines = data.split("\n");
    var txt = "";
  
    for (let [i, value] of lines.entries()) {
      // Replace spaces
      value = value.replaceAll(" ", "&ensp;");
      // Replace symbol <> to show plain text
      value = value.replaceAll("<", "&lt;");
      value = value.replaceAll(">", "&gt;");
  
       if (i==5) {
         txt += "<p class='bg-success-subtle m-0'>" + value + "</p>";
      
  // else if (value[0] == "-") {
  //       txt += "<p class='bg-danger-subtle m-0'>" + value + "</p>";
      } else {
        txt += "<p class='m-0'>" + value + "</p>";
      }
    }
  
    return txt;
  };
  let contenido2 = `/* Keyword values */
  background-color: red;
  background-color: indigo;
  
  /* Hexadecimal value */
  background-color: #bbff00; /* Fully opaque */
  background-color: #bf0; /* Fully opaque shorthand */
  background-color: #11ffee00; /* Fully transparent */
  background-color: #1fe0; /* Fully transparent shorthand */
  background-color: #11ffeeff; /* Fully opaque */
  background-color: #1fef; /* Fully opaque shorthand */
  
  /* RGB value */
  background-color: rgb(255 255 128); /* Fully opaque */
  background-color: rgb(117 190 218 / 0.5); /* 50% transparent */
  
  /* HSL value */
  background-color: hsl(50 33% 25%); /* Fully opaque */
  background-color: hsl(50 33% 25% / 0.75); /* 75% opaque, i.e. 25% transparent */
  
  /* Special keyword values */
  background-color: currentcolor;
  background-color: transparent;
  
  /* Global values */
  background-color: inherit;
  background-color: initial;
  background-color: revert;
  background-color: revert-layer;
  background-color: unset;`;
  
  contenido2 =  addBackground(contenido2)
  
  document.querySelector("#collapseTwo .accordion-body").innerHTML = contenido2;