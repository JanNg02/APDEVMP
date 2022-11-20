const Product = require('../model/productsSchema.js');

const controller = {
    startIndex: function(req,res){
		res.render('index');
	},

    generateShop: function (req,res){
		res.render('shop');
	},

	generateAboutUs: function (req,res){
		res.render('AboutUs2');
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
}

module.exports = controller;