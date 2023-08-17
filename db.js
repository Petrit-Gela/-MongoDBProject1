const { MongoClient } = require('mongodb')

let dbConnetction
let uri = 'mongodb+srv://Tester:tester1234@cluster0.rodw2wi.mongodb.net/?retryWrites=true&w=majority'

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
            .then((client) => {
                dbConnetction = client.db()
                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    }, 
    getDb: () => dbConnetction
}
