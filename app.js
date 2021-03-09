const fs = require('fs');
//Bring all files from the campaigns folder
var files = fs.readdirSync('campaigns');

//For each mapped file you can perform individual action using the callback
var mappedFiles = files.map((file)=>{
   console.log(file);
});
