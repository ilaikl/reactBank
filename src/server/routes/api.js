const express = require('express')
const router = express.Router()

const Transaction = require('../model/Transaction.js')

router.get('/transactions', function (req, res) {
    Transaction.find({}, function (err, exes) {
        res.send(exes)
    })
})

router.post('/transaction', function (req, res) {

    let transaction = new Transaction({ amount: req.body.amount, vendor: req.body.vendor, category: req.body.category })

    let savedTransaction = transaction.save()

    savedTransaction.then(function () {
        Transaction.find({}, function (err, exes) {
            res.send(exes)
        })
    })
})


// router.delete('/transaction', function (req, res) {

//     Person.remove({}, function (err, people) {
//         console.log(people)
//     })
//     res.end()
// })

module.exports = router