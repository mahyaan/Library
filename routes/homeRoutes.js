const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Wolcome to my Library');
  
});

module.exports = router;