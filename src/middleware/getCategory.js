const Campaign = require('../model/campaign')
const categoryRequest = require('../utils/category')

const category = async(req, res, next)=>{
    try {
        if(!req.body.category){
             await categoryRequest().then((data)=>{
                req.category = data
                next()
            }).catch((error)=>{
                throw new Error()
            })
        }else{
            next()
        }
    } catch (e) {
        res.status(40).send()
    }

}

module.exports = category