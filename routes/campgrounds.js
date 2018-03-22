var express = require("express"),
    router  = express.Router(),
    Campground = require("../models/campground");
    


//INDEX - display a list of all campgrounds
router.get("/", function(req, res){
        //get all campgrounds from db
        Campground.find({}, function(err, allCampgrounds){
            if(err){
                console.log(err);
            } else {
                res.render("campgrounds/index", {campgrounds: allCampgrounds, currentUser: req.user});
            }
        });
});

//CREATE - create new campground to db
router.post("/", isLoggedIn, function(req, res){
   //get data from form and add too campgrounds db
   var name = req.body.name;
   var image = req.body.image;
   var descr = req.body.description;
   var author = {
       id: req.user._id,
       username: req.user.username
   }
   var newCampgrounds = {name: name, image:image, description: descr, author: author}
   //create a new campground and save to db
   Campground.create(newCampgrounds, function(err, newlyCreated){
       if(err){
           console.log("THERE WAS A ERROR WITH NEWLYCREATED");
           console.log(err);
       } else {
           //redirect back to campgrounds page
           res.redirect("/campgrounds");
       }
   });
});

//NEW - show form to create new campground
router.get("/new", isLoggedIn, function(req, res){
   res.render("campgrounds/new") 
});

//SHOW - more info about one campground
router.get('/:id', function(req, res){
    //find the campground with the provide id
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
       if(err){
           console.log("THEIR WAS AN ERROR FINDING CAMPGROUND BY ID");
           console.log(err);
       } else {
           console.log(foundCampground);
           //render show template with that campground
           res.render("campgrounds/show", {campground: foundCampground})
       }
    });
});

function isLoggedIn(req, res,next){
    if(req.isAuthenticated()){
        return next();
    }
    
    res.redirect("/login");
}

module.exports = router;
