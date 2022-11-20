const Product = require('../model/productsSchema.js');
const User = require('/Users/JM/Documents/GitHub/APDEVMP/model/usersSchema');
const Order = require('/Users/JM/Documents/GitHub/APDEVMP/model/orderSchema');
const bcrypt = require("bcrypt") ;

const controller = {
    startIndex: function(req,res){
		res.render('index',{
			title: 'Welcome to Chubbies!'
		});
	},

    generateShop: function (req,res){
		res.render('shop');
	},

	generateAboutUs: function (req,res){
		res.render('AboutUs2',{
			title: 'About Us',
			title1: 'Meet the Team',
		});
	},

    generateProfile: function (req,res){
		res.render('profile');
	},

    generateAdminView: function (req,res){
		res.render('adminView');
	},

	generateAdminAdd: function (req,res){
		res.render('adminAdd'); 
	}, 

	generateRemoveAdmin: function (req,res){
		res.render('adminRemove'); 
	}, 

	addItems: async function(req,res) {
		let productName = req.body.productName; 
		let productPrice = req.body.price;
		let productStock = req.body.stock;
		let productDescrip = req.body.description;
		let productImg = req.body.productImage;
		let productCat = req.body.productCategory;

		Product.create({
			name: productName, 
			category: productCat, 
			price: productPrice, 
			stock: productStock, 
			description: productDescrip,
			pic: productImg 
		},
		   function(err, result){
			   if(result){
				   	console.log("Added Succesfully"); 
					res.redirect('/adminAdd')
			   }
		   }
		); 
   },
   
   deleteItems: async function(req,res) { 

	
	
   },
	
	generateRegis: function(req, res) {
        res.render('register', {
            title: 'Registration Form'
        });
    },

    saveUser: async function(req, res){
		const hashedPassword = await bcrypt.hash(req.body.password, 10);
        var user = new User({
            name: req.body.name,
			address: req.body.address,
            username: req.body.username,
			password:  hashedPassword,
            contact_no: req.body.contact_no,

        });
		user.save(function(err) {
            if (err){
                console.log(err);
            } else{
				//console.log("Loading..");
                res.redirect("/");
            }
        });
    },

	/*
	// login endpoint
	login: function (req, res) {
	// check if email exists
	User.findOne({ username: request.body.username })
  
	  // if email exists
	  .then((user) => {
		// compare the password entered and the hashed password found
		bcrypt
		  .compare(request.body.password, user.password)
  
		  // if the passwords match
		  .then((passwordCheck) => {
  
			// check if password matches
			if(!passwordCheck) {
			  return response.status(400).send({
				message: "Passwords does not match",
				error,
			  });
			}
  
			//   create JWT token
			const token = jwt.sign(
			  {
				userId: user._id,
				username: user.username,
			  },
			  "RANDOM-TOKEN",
			  { expiresIn: "24h" }
			);
  
			//   return success response
			response.status(200).send({
			  message: "Login Successful",
			  username: user.username,
			  
			  token,
			});
		  })
		  res.redirect("/shop")
		  // catch error if password does not match
		  .catch((error) => {
			response.status(400).send({
			  message: "Passwords does not match",
			  error,
			});
		  });
	  })
	  // catch error if email does not exist
	  .catch((e) => {
		response.status(404).send({
		  message: "Email not found",
		  e,
		});
	  })
  },
  */
}

module.exports = controller;
