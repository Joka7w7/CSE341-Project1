const router = require('express').Router();

router.get('/', (req, res) => { res.send('Hello World!') });

Module.exports = router;