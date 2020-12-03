const express = require('express');
const User = require('../models/user');

const router = express.Router();

const Users = require('../models/user');


router.get('/users', (req,res, next)=>{
    Users.aggregate([
        { 
              "$geoNear": {
                  "near": {
                       "type": "point",
                       "coordinates": [parseFloat(req.query.lng), parseFloat(req.query.lat)]
                   },
                   "key":"geometry",
                   "distanceField": "distance",
                   "maxDistance":10000000,  // distance in meteres 
                   "spherical": true,
               }
          },
          { 
               "$sort": {"distance": -1} // Sort the nearest first
} 
      ]).then((users)=>{
          res.send(users);
      }).catch(next); 
});




router.get('/all', (req,res,next)=>{


    var perPage= 5;  //items displayed for page
    var page = req.params.page || 1  // no of pages to be displayed
    Users.find({})
    .skip((perPage*page)-perPage)
    .limit(perPage)
    .sort({createdAt:1})
    .exec(function(err, users){
        Users.count().exec(function(err, count) {
            if (err) return next(err)
            res.send({
             users: users,
                current: page,
                pages: Math.ceil(count / perPage)
            })
    })
})

});



router.post('/create', (req,res,next)=>{

 /**
	 * @api {post} /api/create Create User
	 * @apiGroup create
	 *
	 * @apiParam {String} email Email of user
	 * @apiParam {String} mobile mobile number of user
	 * @apiParam {object} address address of user
	 * @apiParam {object}  geometry geometrical location of user
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "data": [
					{
						_id: "string",
						email: "string",
						mobile: "string",
						createdAt: "string",
						updatedAt:"string"
						author: "string",
						geometry: object,
						address: object,
					}
	    		]
	    	}
		}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "message": "error message,
	    "status": 422,
	    "data": null
	   }
	 */

   Users.create(req.body).then((user)=>{
       res.json({"data":user});
   }).catch(next);
});




router.delete('/delete/:id',(req,res,next)=>{

    /**
	 * @api {delete} /delete/:id Delete user by _id
	 * @apiGroup delete
	 *
	 * @apiParam {String} _id _id of the user passed as the URL parameter
	 *
	 *  @apiSuccessExample  Success-Response:
	 * {
	    "data": [
					{
						_id: "string",
						email: "string",
						mobile: "string",
						createdAt: "string",
						updatedAt:"string"
						author: "string",
						geometry: object,
						address: object,
					}
	    		]
	    	}
		}
	
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "message": "error message,
	    "status": 422,
	    "data": null
	   }
	 */

    User.findByIdAndRemove({_id:req.params.id}).then((user)=>{
        res.json({"data":user});
    }).catch(next);
});


router.put('/update/:id',(req,res,next)=>{
     /**
	 * @api {update} /update/:id Update user by _id
	 * @apiGroup update
	 *
	 * @apiParam {String} _id _id of the user passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "data": [
					{
						_id: "string",
						email: "string",
						mobile: "string",
						createdAt: "string",
						updatedAt:"string"
						author: "string",
						geometry: object,
						address: object,
					}
	    		]
	    	}
		}
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "message": "error message,
	    "status": 422,
	    "data": null
	   }
	 */

    User.findByIdAndUpdate({_id:req.params.id},req.body).then((user)=>{
        res.json({"data":user});
    }).catch(next);
});












module.exports= router