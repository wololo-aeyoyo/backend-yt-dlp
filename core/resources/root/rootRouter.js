const
    express = require('express');

const router = express.Router();

// GET home page.
router.get('/', (req, res, next) => {
    // TODO: mostrar documentación pública del API
    // TODO: responder como json si accept === 'application/json'
    res.render('index', {
        title: 'YTP-DOWNLOADER',
        content: 'API RESTFUL para bajar videos'
    });
});

module.exports = router;
