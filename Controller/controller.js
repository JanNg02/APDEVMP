const User = require('../model/usersSchema');
const Order = require('../model/orderSchema');
const Cart = require('../model/cartSchema');
const bcrypt = require("bcrypt") ;
const Product = require('../model/productsSchema.js');
const { raw } = require('body-parser');



const controller = {
    startIndex: function(req,res){
		//req.session.isAuth = true
		//console.log(req.session);
		//console.log(req.session.id)
		console.log(req.session.username);
		res.render('index',{
			title: 'Welcome to Chubbies!'
		});
	},

    generateShop: function (req,res){
		
		var item = Product.find();
		console.log(User.count({username: 'admin'}));

		console.log(req.session.username);  
		item.exec(function(err,data){
			if(err) throw err;
			res.render('shop', {products:data});
		});
		//res.render('shop');
	},

	generateAboutUs: function (req,res){
		res.render('AboutUs2',{
			title: 'About Us',
			title1: 'Meet the Team',
		});
	},

    generateProfile: function (req,res){
		console.log(req.session.username);
		res.render('profile', {username: req.session.username});
	},

	generateSettings: function(req,res){
		
		var user = req.session.username; 

		console.log(user); 
		var dbUser = User.findOne({username: user}); 
		
		dbUser.exec(function(err,data){
			if(err) throw err;
			res.render('settings', {userEdit:data});
		});

		//res.render('settings'); 
	}, 

	generateOrderHistory: function(req,res) {
		
		var user = req.session.username;
		var orders = Order.find({username: user});
 

		orders.sort({orderNumber: 1}).exec(function(err,data){
			if(err) throw err;
			res.render('orderHistory', {orders:data});
		});
		//console.log(orders.count()); 
		//res.render('orderHistory'); 
	}, 

	generateOrder: async function (req,res){

		var itemsOrdered = []; 
		var user = req.session.username;

		 let date; 
		 let total
		// Finding the order using orderNumber
		Order.find({orderNumber: req.body.orderView })
			.then(data => {
				//console.log(data);
				// Putting all course id's in itemsOrdered array
				data.map((d, k) => {
					for(i = 0; i < d.pname.length; i++){
						itemsOrdered.push(d.pname[i]);
					}
					date = d.date; 
					total = d.price; 
				})
				//console.log(date);
				//console.log(total);
				/*
				console.log("Stored in Array");
				for(i = 0; i < itemsOrdered.length; i++){
					console.log(itemsOrdered[i]); 
				}*/

				//find all Products from the Array
				Product.find({ name: { $in: itemsOrdered } })
					.then(data => {
						//console.log("Items Ordered")
						//console.log(data);
						res.render('order',{items: data, Date: date, Total: total});
					})
					.catch(error => {
						console.log(error);
					})
			})
			.catch(error => {
				console.log(error);
			})
	},

    generateAdminView: function (req,res){
		res.render('adminView');
	},

	generateAdminAdd: function (req,res){
		res.render('adminAdd'); 
	}, 

	generateAdminEdit: function (req,res){
		
		var item = Product.find();

		//console.log(item); 
		item.exec(function(err,data){
			if(err) throw err;
			res.render('adminEdit', {products:data});
		});
		//res.render('adminEdit'); 
	}, 

	generateRemoveAdmin: function (req,res){
		
		var item = Product.find();

		//console.log(item); 
		item.exec(function(err,data){
			if(err) throw err;
			res.render('adminRemove', {products:data});
		});
		//res.render('adminRemove'); 
	}, 

	generateRegis: function(req, res) {
        res.render('register', {
            title: 'Registration Form'
        });
    },

	generateItemPage: async function (req,res){
		var product = req.body.showProduct; 

		//console.log(product); 
		var item = Product.findOne({name: product}); 
		 
		item.exec(function(err,data){
			if(err) throw err;
			res.render('item', {Item:data});
		});
	},

    saveUser: async function(req, res){
		const{name, address, username, password, contact_no} = req.body;

		let user = await User.findOne({username});

		if (user){
			return res.redirect('/register')
		}

		const hashedPassword = await bcrypt.hash(password, 10);
        user = new User({
            name,
			address,
            username,
			password:  hashedPassword,
            contact_no,

        });
		user.save(function(err) {
            if (err){
                console.log(err);
				res.redirect("/register");
            } else{
				//console.log("Loading..");
                res.redirect("/");
            }
        });
    },

	loginUser: async function (req, res)  {
		const {username, password} = req.body; 

		const user = await User.findOne({username});

		if(!user){
			return res.redirect('/');
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if(!isMatch){
			return res.redirect('/');
		}

		req.session.username = user.username;
		req.session.isAuth=true;
		if(user.username == 'admin'){
			res.redirect('/adminView');
		}
		else{
			res.redirect('/shop');
		}
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

	Product.deleteOne({name: req.body.showProduct}, 		   
		
		function(err, result){
		if(result){
				console.log("Removed Succesfully"); 
			 	res.redirect('/adminRemove')
		}
	}); 
   },

   generateItemEdit: function (req,res){
		
		var product = req.body.showProduct; 

		//console.log(product); 
		var item = Product.findOne({name: product}); 
		
		item.exec(function(err,data){
			if(err) throw err;
			res.render('itemEdit', {Item:data});
		});
		//res.render('itemEdit'); 
	}, 

	editItem: async function (req,res){
		
		var productNum = req.body.showProduct; 
		var productName = req.body.productName; 
		var productPrice = req.body.price;
		var productStock = req.body.stock;
		var productDescrip = req.body.description;
		var productImg = req.body.productImage;
		var productCat = req.body.productCategory;
		
		console.log(productNum); 
		Product.updateOne({productNumber: productNum},{$set: {name: productName, category: productCat, 
															  price: productPrice, stock: productStock, 
															  description: productDescrip, pic: productImg}}, 

			function(err, result){
				if(result){
					console.log("Updated Successfully"); 
					res.redirect('/itemEdit')
				} else if (err) {
					console.log("Updated Failed"); 
					res.redirect('/itemEdit')
				}
			}
		);
		//res.render('adminEdit'); 
	}, 

	editUser: async function (req,res){
		
		var name = req.body.name;
		var address = req.body.address; 
		var contact = req.body.contanct; 
		var userName = req.body.username; 
		var pass = req.body.password;  

		var user = req.session.username; 

		const hashedPassword = await bcrypt.hash(pass, 10);
		
		console.log(user); 
		User.updateOne({username: user},{$set: {name: name, address: address, 
												   username: userName, password: hashedPassword, 
												   contact_no: contact}}, 

			function(err, result){
				if(result){
					console.log("Updated Users Successfully"); 
					console.log(address);
					res.redirect('/settings')
				} else if (err) {
					console.log("Update Failed"); 
					res.redirect('/settings')
				}
			}
		);
		//res.render('adminEdit'); 
	}, 

	addCart: function(req, res){
		//console.log(req.body.itemId);
		const user = req.session.username;
		const productName = req.body.productName;
		const productPrice = req.body.productPrice;
		const items = req.body.items;
		const total = productPrice * items;
		console.log(total);
		
		const cart = new Cart({
			username:user,
			productName: productName, 	
			items:items,		 
			price: productPrice, 

		})
		cart.save(function(err) {
            if (err){
                console.log(err);
				res.redirect("/item");
            } else{
				console.log("Loading..");
                res.redirect("/shop");
            }
        });
		},

}

module.exports = controller;