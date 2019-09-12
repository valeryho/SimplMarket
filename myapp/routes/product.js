var express = require('express');
var router = express.Router();

const db = require('../config/database')


router.get('/', function(req, res, next) 
{
  db.query("SELECT ar_posts.id,ar_posts.post_name, ar_wc_product_meta_lookup.stock_quantity from ar_posts, ar_wc_product_meta_lookup  where ar_posts.ID=ar_wc_product_meta_lookup.product_id  ")
  //  db.query("SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE COLUMN_NAME LIKE '%stock_qua%';")
  // db.query("SELECT * FROM ar_wc_product_meta_lookup")
  .then(results => {
    console.log(results[0] );
     res.render('produkt',{results:results[0]});
    //  res.send(results[0])
  })
  .catch(err=>{console.log(err)})

});
router.post('/:id',function (req, res, next) {
  res.send(req.params.id);
});

module.exports = router;
