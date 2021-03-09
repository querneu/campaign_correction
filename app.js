const fs = require('fs');
//Bring all files from the campaigns folder
const sleep = require('system-sleep');


//This function will repeat itself to seek changes in the folder
function getFiles() {
    var files = fs.readdirSync('campaigns');
    var timer = 1;//Seconts that the program will wait for the new files to arrive via ftp
    //For each mapped file you can perform individual action using the callback
    for (timer; timer > 0; timer--) {
        console.log(`Aguardando ${timer} segundos para continuar...`);
        sleep(1000);
    }

    var mappedFiles = files.map((file) => {
        console.log(`Arquivo: ${file} pronto para processamento.`);
    });
    
    setTimeout(getFiles, timer*1000);
}
getFiles();
