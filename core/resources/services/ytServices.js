const ytd = require("yt-dlp-exec-fork");
var debug = require('debug')('back-youtube-downloader:debug');
const fs = require('fs');
const { handle } = require("express/lib/application");

let servicesYt = {}


/**
 * Servicio que obtiene los datos del videos
 * @param link
 */
servicesYt.getVideoData = async (link)=>{
    return new Promise(async(resolve, reject)=>{
        let size = '';
        let res = ''; 
        let separado = [];
        let noEspacio=[];
        let jsonResolucion=[];
        try {
        let data = await ytd(link,{
            listFormats:true
        });
        let titulo = await ytd(link,{
            getTitle:true
        })
        data = data.replace(/[^-]*/,''); //regex para quitar todos los "-"
        separa =data.split("\n");
        separa.forEach(element => {
            separado.push(element.split(' '));
            
        });
        separado.forEach(element=>{
            noEspacio.push(element.filter(item => item !== ''));
        });
        //debug(noEspacio)
        for (let index = 1; index < noEspacio.length; index++) {
                const element = noEspacio[index];
                element.forEach(e =>{
                    e.endsWith('iB') ? size = e : null ;
                    e.includes('x') ? res = e :null ;
                })
                if(size){
                    jsonResolucion.push({
                        quality:element[0],
                        format:element[1],
                        resolution:element[2],
                        weight:size
                    });                    
                };

            
        }
        resolve({
            title:titulo,
            videoData:jsonResolucion});
        }
        catch (error) {
            reject(error);
            console.log(error);
        }

    })

};


/**
 * Servicio que descarga los videos
 * @param infoVideo
 */
 servicesYt.downLoadVideo = async (infoVideo)=>{


        try {

            let data = await ytd(infoVideo.link,{
                f: [`${infoVideo.quality}+bestaudio[ext=m4a]/mp4`],
                o:[`./server/video/${infoVideo.title}`]//añadir id despues
            });
            console.log(data)

            fs.readdir("./server/video", async(err, files) => {
                await files.forEach(file => {
                  console.log(file);
                  return(file);
                });
              });

        } catch (error) {
            console.log(error);
        };


};
module.exports = servicesYt;




