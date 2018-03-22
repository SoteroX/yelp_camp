var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data = [
        {
            name: "Seed Random Data", 
            image: "https://images.unsplash.com/photo-1484960055659-a39d25adcb3c?auto=format&fit=crop&w=750&q=80",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
            name: "Seed Random Data 2", 
            image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?auto=format&fit=crop&w=750&q=80",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            name: "Seed Random Data 3", 
            image: "https://images.unsplash.com/photo-1468956398224-6d6f66e22c35?auto=format&fit=crop&w=755&q=80",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        }
    ]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        // if(err){
        //     console.log("ERROR...Campground couldnt be removed");
        // } else {
        //   console.log("removed campgrounds!"); 
        // }
        // //ADD FEW CAMPGROUNDS
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err);
        //         } else {
        //             console.log("Campground Added");
        //             //ADD Few Comments
        //             Comment.create(
        //                 {
        //                     text: "This place is great",
        //                     author: "Homer"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new comment");
        //                     }
        //                 });
        //         }
        //     });
        // });
    });
    
}

module.exports = seedDB;

