var express = require('express');
var router = express.Router();

const db = require('../config/database')


router.get('/', function(req, res, next) 
{
  //  db.query("SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE COLUMN_NAME LIKE '%stock_qua%';")
  // db.query("SELECT * FROM ar_wc_product_meta_lookup")
  
  db.query("SELECT ar_posts.id,ar_posts.post_name, ar_wc_product_meta_lookup.stock_quantity from ar_posts, ar_wc_product_meta_lookup  where ar_posts.ID=ar_wc_product_meta_lookup.product_id  ")
  .then(results => {
    const resp = results[0]
    
     res.json(resp);
  })
  .catch(err=>{console.log(err)})

});
router.post('/:id',function (req, res, next) {
  res.send(req.params.id);
});

module.exports = router;
