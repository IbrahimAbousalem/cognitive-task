const express = require('express')
const request = require('request')
const Campaign = require('../model/campaign')
const category = require('../middleware/getCategory')

const campaignRouter = express.Router()

campaignRouter.post('/campaigns', category, async(req,res)=>{
    const campaign = new Campaign({...req.body,category: req.category})
    try {
        await campaign.save()
        res.status(201).send(campaign)
    } catch (e) {
        res.status(400).send(e)
    }
})

campaignRouter.get('/campaigns', async(req,res)=>{
    try {
        const campaigns = await Campaign.find({})
        res.send(campaigns)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = campaignRouter
