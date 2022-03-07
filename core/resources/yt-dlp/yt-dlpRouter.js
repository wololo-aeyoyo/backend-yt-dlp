const 
    express = require("express"),
    router = express.Router(),
    ytLogic = require("./yt-dlpLogic");

//posts
router.post("/getVideoData",ytLogic.GetData);
router.post("/downloadvideo",ytLogic.downLoadVideo)


module.exports = router;
