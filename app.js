const fs = require('fs');

const sleep = require('system-sleep');
const logger = require('./util/logConfig')

//This function will repeat itself to seek changes in the folder and bring all files that are on it
function getFiles() {
    var files = fs.readdirSync('campaigns');
    var timer = 1;//Seconts that the program will wait for the new files to arrive via ftp
    //For each mapped file you can perform individual action using the callback
    for (timer; timer > 0; timer--) {
        logger.log({
            level: 'verbose',
            message: `Aguardando ${timer} segundos para continuar...`
        })
        sleep(1000);
    }

    var mappedFiles = files.map((file) => {
        logger.log(
            {
                level: 'verbose',
                messae: `Arquivo: ${file} pronto para processamento.`
            }
        )
    });

    setTimeout(getFiles, timer * 1000);
}
getFiles();
