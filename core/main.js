var debug = require('debug')('back-youtube-downloader:debug');

const    
    app = require('../app'),
    chalk = require('chalk'),
    fs = require('fs');




// Normalize a port into a number, string, or false
let normalizePort = (val) => {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  };
  

/**
 * Here happens the big bang!
 */
 module.exports = async function startServer() {


// Get port from environment and store in Express
const port = normalizePort(process.env.PORT || 9000);
app.set('port', port);


const msgPort = ` El server esta levantado por el puerto ${port} ✅`;
app.listen(port, async () => {
    console.log(
        chalk.magentaBright.bold(`

██╗░░░██╗████████╗░░░░░░██████╗░░█████╗░░██╗░░░░░░░██╗███╗░░██╗██╗░░░░░░█████╗░░█████╗░██████╗░███████╗██████╗░ ────────▄█▀▄
╚██╗░██╔╝╚══██╔══╝░░░░░░██╔══██╗██╔══██╗░██║░░██╗░░██║████╗░██║██║░░░░░██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗ ──────▄██▀▀▀▀▄
░╚████╔╝░░░░██║░░░█████╗██║░░██║██║░░██║░╚██╗████╗██╔╝██╔██╗██║██║░░░░░██║░░██║███████║██║░░██║█████╗░░██████╔╝ ────▄███▀▀▀▀▀▀▀▄
░░╚██╔╝░░░░░██║░░░╚════╝██║░░██║██║░░██║░░████╔═████║░██║╚████║██║░░░░░██║░░██║██╔══██║██║░░██║██╔══╝░░██╔══██╗ ──▄████▀▀▀▀▀▀▀▀▀▀▄
░░░██║░░░░░░██║░░░░░░░░░██████╔╝╚█████╔╝░░╚██╔╝░╚██╔╝░██║░╚███║███████╗╚█████╔╝██║░░██║██████╔╝███████╗██║░░██║ ▄█████▀▀▀▀▀▀▀▀▀▀▀▀▀▄
░░░╚═╝░░░░░░╚═╝░░░░░░░░░╚═════╝░░╚════╝░░░░╚═╝░░░╚═╝░░╚═╝░░╚══╝╚══════╝░╚════╝░╚═╝░░╚═╝╚═════╝░╚══════╝╚═╝░░╚═╝ 

${chalk.white.bold(msgPort)}`
                )
            );

debug(chalk.white.bold("the app is runing in debug mod"));
});

};



  
