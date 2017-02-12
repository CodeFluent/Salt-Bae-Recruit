console.log("custom.js loaded!");

var url = "http://cdn.mozilla.net/pdfjs/helloworld.pdf";

function processPDF () {
    var pdf = new PDFJS.PDFDoc(data);
    var total = pdf.numPages; // get the number of pages.

    // for(i = 1; i <= total; i++) {
    //     var page = pdf.getPage(i);
    //
    // }

    // PDFJS.getDocument(url).then(function getPdfHelloWorld(pdf) {
    //
    //     pdf.getData().then(function(arrayBuffer) {
    //         var pdfraw = String.fromCharCode.apply(null, arrayBuffer);
    //
    //         // Operate on your raw pdf here...
    //
    //         console.log(pdfraw);
    //
    //     });
    // });
}

// /**
//  * sets the filename of the iframe.
//  * @return {[type]} [description]
//  */
// function getSource () {
//     var thefile = document.getElementById('fileButton');
//     var thefilename = thefile.value; // get the filename.
//
//     thefilename = thefilename.replace(/.*[\/\\]/, ''); // use regex to get only the filename.
//
//     var src = document.getElementById('input').setAttribute("src", thefilename);
//
// }

function xhrRequest () {

    var submit = document.getElementById('uploadButtonOnClick');

    submit.addEventListener("message", function(event){
    if (event.source != processor.contentWindow) return;

    switch (event.data){
      case "ready":
        var xhr = new XMLHttpRequest;

        xhr.open('GET', input.getAttribute("src"), true); // doesn't work since we don't need the input attr.
        xhr.responseType = "arraybuffer";
        xhr.onload = function(event) {
          processor.contentWindow.postMessage(this.response, "*");
        };
        xhr.send();
        console.log("ssubmit");

      break;

      default:
        output.textContent = event.data.replace(/\s+/g, " ");
        console.log("fail");
      break;
        }
    }, true);

}
