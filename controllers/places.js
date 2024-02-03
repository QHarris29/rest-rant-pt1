
const express = require('express')
const app = express()

router.get('/', (req, res) => {
    res.send('GET places list');
});

module.exports = router;
