const servicesYt = require('../services/ytServices');
var debug = require('debug')('back-youtube-downloader:debug');



let ytLogic = {}

/**
 * Devuelve la calidad del video y formatos disponibles
 * @param req
 * @param res
 */
ytLogic.GetData = async (req,res)=>{

    try {    
        debug(req.body.link);
        quality = await servicesYt.getVideoData(req.body.link);
        res.send(quality);
        
    } catch (error) {  
        res.send(400,{error:error.stderr})
    };

};

/**
 *  Metodo para descargar videos
 * @param req
 * @param res
 */
 ytLogic.downLoadVideo = async (req,res)=>{

    try {    
        debug(req.body.link);
        quality = await servicesYt.downLoadVideo(req.body);
        res.send(quality);
        
    } catch (error) {
        res.send(400,{error:error.stderr})
    };

};


module.exports =ytLogic;