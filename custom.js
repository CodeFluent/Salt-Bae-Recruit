console.log("custom.js loaded!");

var url = "http://cdn.mozilla.net/pdfjs/helloworld.pdf";


PDFJS.getDocument(url).then(function getPdfHelloWorld(pdf) {

    pdf.getData().then(function(arrayBuffer) {
        var pdfraw = String.fromCharCode.apply(null, arrayBuffer);

        // Operate on your raw pdf here...

        console.log(pdfraw);

    });
});
