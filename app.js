const fs = require('fs');
//Bring all files from the campaigns folder
var files = fs.readdirSync('campaigns');
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);

//For each mapped file you can perform individual action using the callback
function getFiles() {
    var mappedFiles = files.map((file) => {
        console.log(file);
    });

}
