const Book = require('../models/book')

module.exports.postBookGenerate = (req, res, next) => {
    var values =[
        {
            title: "Bobo",
            cat: "Magazine",
            price: 20000,
            stock: 50
        },
        {
            title: "Belajar Android Untuk Pemula",
            cat: "Computer",
            price: 70000,
            stock: 35
        },
        {
            title: "Sang Proklamator",
            cat: "Biography",
            price: 78000,
            stock: 29
        },
        {
            title: "Joomla",
            cat: "Computer",
            price: 45000,
            stock: 60
        },
        {
            title: "Nova",
            cat: "Magazine",
            price: 15000,
            stock: 100
        },
        {
            title: "Mengenal Tata Surya",
            cat: "Science",
            price: 35000,
            stock: 47
        },
        {
            title: "Anak Singkong",
            cat: "Biography",
            price: 78000,
            stock: 17
        },
        {
            title: "Ensiklopedi Hutan",
            cat: "Science",
            price: 120000,
            stock: 52
        }

    ]

    Book
        .bulkCreate(values)
        .then((book) => {
            res.json(book)
        })
        .catch((error) => {
            console.log(error)
        })
}

module.exports.postBookUpdate = (req, res, next) => {
    var values = {
        title: req.body.title,
        cat: req.body.cat
    }

    Book
        .update(values, 
            {where: 
                {id: req.params.id}
            })
        .then((book) => {
            res.json(book)
        })
        .catch((error) => {
            console.log(error)
        })
}

module.exports.getAllBook = (req, res) => {
    Book
        .findAll({})
        .then(books => {
            res.json(books)
        })
        .catch(error => {
            console.log(error)
        })
}

module.exports.getBookDetail = (req, res) => {
    Book
        .findByPk(req.params.id)
        .then(book => {
            res.json(book)
        })
        .catch(error => {
            console.log(error)
        })
}

module.exports.getBookByCat = (req, res) => {
    Book
        .findAll({
            where: {cat: req.params.cat}
        })
        .then(books => {
            res.json(books)
        })
        .catch(error => {
            console.log(error)
        })
}