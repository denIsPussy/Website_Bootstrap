const filmBar1 = document.querySelector("#filmBar1");
const filmBar2 = document.querySelector("#filmBar2");
const modal = document.querySelector('#exampleModal')
var imagefilms;
function createImage([img, name, years]) {
  let code = `
    <div class="col-xl-2 col-lg-4 col-6 mt-2">
        <img
            style="width: 164px; height:252px"
            class="img-fluid rounded-3"
            src="${img}"
            alt=""
        />
        <div class="container text-truncate p-0" style="color: white">
            ${name}
        </div>
    </div>`;
    if (years === "2021") filmBar2.innerHTML += code;
    else if (years === "2022") filmBar1.innerHTML += code;
}
addFilm.onclick = function () {
    var imglem = document.getElementById('urltoimage').innerHTML = imagefilms;
    var namelem = document.getElementById('nameFilm').value;
    var yearslem = document.getElementById('yearsFilm').value;
    if (imglem.length == 0 || namelem.length == 0 || yearslem.length == 0) return;
    createImage([imglem, namelem, yearslem]);
}
function donwload(input) {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
        imagefilms = reader.result;
    }
}