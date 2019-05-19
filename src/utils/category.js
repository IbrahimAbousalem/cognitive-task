const request = require('request')

// //it doesn't matter which url you uses,
// //it will produce the same category collections,
// //so i decided to use the same url
const categoryRequest = ()=>{
    return new Promise((resolve, reject)=>{
        const url = 'https://ngkc0vhbrl.execute-api.eu-west-1.amazonaws.com/api/?url=https://arabic.cnn.com/'
        request({url, json: true}, (error, {body})=>{
            if(error){
                reject('Unable to connect to category extraction service!')
            }
            resolve(body.category.name)
        })
    })
    
}

module.exports = categoryRequest