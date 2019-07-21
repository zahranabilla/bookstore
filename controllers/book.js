const Books = require("../models/book");

module.exports.postBook = (req, res)=>{
	Books.create({
        title: req.body.title,
        cat: req.body.cat,
        price: req.body.price,
        stock: req.body.stock
	}).then((book)=>{
		res.json(book);
	}).catch((error)=>{
		throw error;
	})
}

module.exports.putBook = (req,res)=>{
	Books.update({
		title: req.body.title,
        cat: req.body.cat,
        price: req.body.price,
        stock: req.body.stock
	},
	{
		where: {
			id: req.params.id
		}
	}).then((book)=>{
		res.json(book);
	}).catch((error)=>{
		throw error;
	})
}

module.exports.deleteBook = (req,res)=>{
	Books.destroy({
		where: {
			id: req.params.id
		}
	}).then((book)=>{
		res.json(book);
	}).catch((error)=>{
		throw error;
	})
}