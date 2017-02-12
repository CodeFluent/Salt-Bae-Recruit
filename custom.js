console.log("custom.js loaded!");

var keywords = ['JAVA', 'Python', 'C++', 'C#', 'NET', 'HTML', 'SQL', 'CSS', 'JS'];
function getKeyWords() {

    keywords = ['JAVA', 'Python', 'C++', 'C#', 'NET', 'HTML', 'SQL', 'CSS', 'JS'];

    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: "https://raw.githubusercontent.com/CodeFluent/Salt-Bae-Recruit/master/sample_run_results.json",
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        },
        success: function (msg) {
            console.log(msg);
        }
        });



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

                // prepare for callback hell.
                var total = pdf.numPages;

                // loop through each page and get the text content.
                // map the array elements from textContent and get
                for(i = 1; i <= total; i++) {
                    pdf.getPage(i).then(function(page){
                        var n = page.pageNumber;
                        page.getTextContent().then(function(textContent) {
                            // console.log(textContent); // all strings in file.
                            textContent.items.map(function(item){
                              for(k=0;k<=9;k++){
                                if(item.str == keywords[k]){
                                  console.log("WE HAVE A MATCH" + item.str);
                                }

                              }
                              console.log(item.str); // all individual strings.



                            });
                        })
                    })
                }


            });
        };

        fileReader.readAsArrayBuffer(file);
}

// function getKeyWords() {
//
//     var keywords = ['JAVA', 'Python', 'C++', 'C#', 'NET', 'HTML', 'SQL', 'CSS', 'JS'];
//
//     $.ajax({
//         type: 'GET',
//         dataType: 'json',
//         url: "https://raw.githubusercontent.com/CodeFluent/Salt-Bae-Recruit/master/sample_run_results.json",
//         error: function (jqXHR, textStatus, errorThrown) {
//             console.log(jqXHR);
//         },
//         success: function (msg) {
//             console.log(msg);
//         }
//         });
//
//
//
// }
