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

function getSource () {
    var thefile = document.getElementById('fileButton');
    var thefilename = thefile.value; // get the filename.

    thefilename = thefilename.replace(/.*[\/\\]/, ''); // use regex to get only the filename.

    var src = document.getElementById('input').setAttribute("src", thefilename);

}
