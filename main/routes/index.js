const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1><br>Try the following routs:<br>/api/tags<br>/api/products<br>/api/categories")
});

module.exports = router;