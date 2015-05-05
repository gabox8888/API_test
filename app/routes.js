module.exports = function(app, router) {

  var path  = require('path');
  var Guide = require('./models/Guides');

  //Log every time a request is received
  router.use(function(req,res,next){
    console.log('Request received!');
    next();
  })

  //Ensure everything is up and running
  router.get('/',function(req,res) {
    res.json({message:'It appears that everything is up and runnning'});
  });

  // /guide routes
  router.route('/guides')

    //Create Guide
    .post(function(req,res){
      var guide   = new Guide();
      guide.name  = req.body.name;
      console.log(guide.name);
      guide.age   = req.body.age;
      console.log(guide.age);

      guide.save(function(err){
        if (err) res.send(err);
        res.json({mesage: 'Guide added'});
      });
    })

    //Get all guides
    .get(function(req,res){
      Guide.find(function(err,guides){
        if (err) res.send(err);
        res.json(guides);
      });
    });

  // /guide/guide_id routes
  router.route('/guides/:guide_id')

    //get guide with a given id
    .get(function(req,res){
      Guide.findById(req.params.guide_id, function(err,guide){
        if (err) res.send(err);
        res.json(guide);
      });
    })

    //Update guide info
    .put(function(req,res){
      Guide.findById(req.params.guide_id, function(err, guide){
        if (err) res.send(err);

        // Update info
        guide.name = req.body.name;
        guide.age  = req.body.age;

        // save the guide
        guide.save(function(err){
          if(err) res.send(err);
          res.json({message: 'Guide updated'});
        });
      });
    })

    //Delete guide
    .delete(function(req,res){
      Guide.remove({
        _id: req.params.guide_id
      },function(err,guide){
        if(err)res.send(err);
        res.json({message: 'Succesfully deleted'});
      });
    });

  app.use('/api',router);

  // redirect to index.html
  app.get('*', function(req, res) {
    res.sendfile( "./public/index.html");
  });

  //Register our routes, they will all be prefixed with /api

}
