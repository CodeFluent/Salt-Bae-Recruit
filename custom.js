console.log("custom.js loaded!");



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
                for(i = 1; i <= total; i++) {
                    pdf.getPage(i).then(function(page){
                        var n = page.pageNumber;
                        page.getTextContent().then(function(textContent) {
                            console.log(textContent);
                            console.log(textContent.str);
                        })
                    })
                }


            });
        };

        fileReader.readAsArrayBuffer(file);
}

function getHelloNumber(number) {

    var append = "Hello " + number;
    return append;
}
