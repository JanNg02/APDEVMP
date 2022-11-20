const User = require('./usersSchema');
const Product = require('./productsSchema');
const Order = require('./orderSchema');
const bcrypt = require("bcrypt") ;

const addEnrty = {

    newUser1: async function () {
        const hashedPassword = await bcrypt.hash("password1", 10);
        var newUser = {
            name: "Kyla dela Cruz",
            address: "Caloocan City",
            username: "kawaiiwa",
            password: hashedPassword,
            contact_no: "09124562398"
          
        };
        User.create(newUser, err => {
            if (err) console.log(err);
        });
    },

    newUser2: async function () {
        const hashedPassword = await bcrypt.hash("password2", 10);

        var newUser = {
            name: "Arrow De Ocampo",
            address: "Pasay City",
            username: "greenarw",
            password: hashedPassword,
            contact_no: "09569841576"
        };
        User.create(newUser, err => {
            if (err) console.log(err);
        });
    },

    newUser3: async function () {
        const hashedPassword = await bcrypt.hash("password3", 10);
        var newUser = {
            name: "Nathalia Davidson",
            address: "Taguig City",
            username: "nath01",
            password: hashedPassword,
            contact_no: "09152346310"
        };
        User.create(newUser, err => {
            if (err) console.log(err);
        });
    },

    newUser4: async function () {
        const hashedPassword = await bcrypt.hash("password4", 10);
        var newUser = {
            name: "Jason Derulo",
            address: "Laguna City",
            username: "jayzone",
            password: hashedPassword,
            contact_no: "09204897521"
        };
        User.create(newUser, err => {
            if (err) console.log(err);
        });
    },

    newUser5: async function () {
        const hashedPassword = await bcrypt.hash("password5", 10);
        var newUser = {
            name: "Romina Quizon",
            address: "Ilocos City",
            username: "cutiee314",
            password: hashedPassword,
            contact_no: "09169532875"
        };
        User.create(newUser, err => {
            if (err) console.log(err);
        });
    },

    newProduct1: function () {
        var newProduct = {
            name: "alleryease",
            category:"antihistamine",
            price: 900,
            stock: 10,
            description: "description", 
            pic: "allergyease.jpg"
        };
        Product.create(newProduct, err => {
            if (err) console.log(err);
        });
    },

    newProduct2: function () {
        var newProduct = {
            name: "catMed",
            category:"Medicine",
            price: 133.99,
            stock: 10,
            pic: "catMed.png"
        };
        Product.create(newProduct, err => {
            if (err) console.log(err);
        });
    },

    newProduct3: function () {
        var newProduct = {
            name: "Heartgard",
            category:"Medicine",
            price: 677.99,
            stock: 10,
            pic: "heartgard.jpg"
        };
        Product.create(newProduct, err => {
            if (err) console.log(err);
        });
    },

    newProduct4: function () {
        var newProduct = {
            name: "Nexgard",
            category:"Medicine",
            price: 72.99,
            stock: 10,
            pic: "nexgard.png"
        };
        Product.create(newProduct, err => {
            if (err) console.log(err);
        });
    },

    newProduct5: function () {
        var newProduct = {
            name: "Simparica",
            category:"Medicine",
            price: 161.41,
            stock: 10,
            pic: "simparica.jpg"
        };
        Product.create(newProduct, err => {
            if (err) console.log(err);
        });
    },

    newOrder1: function () { 
        const dateNow = new Date();
        const date = dateNow.toDateString() + " " + dateNow.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        var newOrder = {
            pname: ["Heartgard"],
            username: "kawaiiwa",
            date: date,
            price: 677.99,
            items: 1,
            payment: "Gcash",
        }
        Order.create(newOrder, err => {
            if (err) { console.log(err); }
        });
    },

    newOrder2: function () { 
        const dateNow = new Date();
        const date = dateNow.toDateString() + " " + dateNow.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        var newOrder = {
            pname: ["Heartgard", "catMed"],
            username: "kawaiiwa",
            date: date,
            price: 811.98,
            items: 2,
            payment: "Gcash",
        }
        Order.create(newOrder, err => {
            if (err) { console.log(err); }
        });
    },

    newOrder3: function () { 
        const dateNow = new Date();
        const date = dateNow.toDateString() + " " + dateNow.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        var newOrder = {
            pname: ["allergyease", "Nexgard"],
            username: "kawaiiwa",
            date: date,
            price: 972.99,
            items: 2,
            payment: "Gcash",
        }
        Order.create(newOrder, err => {
            if (err) { console.log(err); }
        });
    },

    newOrder4: function () { 
        const dateNow = new Date();
        const date = dateNow.toDateString() + " " + dateNow.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        var newOrder = {
            pname: ["Simparica"],
            username: "kawaiiwa",
            date: date,
            price: 484.23,
            items: 3,
            payment: "Gcash",
        }
        Order.create(newOrder, err => {
            if (err) { console.log(err); }
        });
    },

    newOrder5: function () { 
        const dateNow = new Date();
        const date = dateNow.toDateString() + " " + dateNow.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        var newOrder = {
            pname: ["Heartgard"],
            username: "kawaiiwa",
            date: date,
            price: 677.99,
            items: 1,
            payment: "Gcash",
        }
        Order.create(newOrder, err => {
            if (err) { console.log(err); }
        });
    },


}
module.exports = addEnrty;