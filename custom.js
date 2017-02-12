console.log("custom.js loaded!");

var url = "http://cdn.mozilla.net/pdfjs/helloworld.pdf";

function processPDF () {

}


function xhrRequest () {

        // get file from input
        var file = event.target.files[0];

        var fileReader = new FileReader();

        fileReader.onload = function () {

            // turn pdf into a typedarray.
            var typedarray = new Uint8Array(this.result);

            // handle all data processing here. pass to functions if necessary.
            PDFJS.getDocument(typedarray).then(function(pdf) {

                var total = pdf.numPages;
                console.log(total);

                // Example function
                var hello = this.getHelloNumber(total);
                console.log(hello);

            });
        };

        fileReader.readAsArrayBuffer(file);
}

function getHelloNumber(number) {

    var append = "Hello " + number;
    return append;
}
