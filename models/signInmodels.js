const mongoose=require('mongoose')
const { models } = require('mongoose')

const signInTemplet=new mongoose.Schema({
    email :{
        type:String,
        require:true
    },
    passward :{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('bouchTable',signInTemplet)