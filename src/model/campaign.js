const mongoose = require('mongoose')

const campaignSchema = mongoose.Schema({
    name:{
        type: String, 
        required: true,
        trim: true
    },
    country:{
        type: String,
        required: true,
        lowercase:true
    },
    budget:{
        type: Number,
        required: true
    },
    goal:{
        type: String,
        required: true,
        lowercase:true
    },
    category:{
        type: String,
        lowercase:true,
    }
})

const Campaign = mongoose.model('Campaign', campaignSchema)

module.exports = Campaign