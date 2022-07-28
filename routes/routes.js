const express=require('express')
const signInTempletCopy=require("../models/signInmodels")

const router=express.Router();

router.route('/login').get((req,res) => {
    signInTempletCopy.find()
    .then(foundLink=>res.json(foundLink))
})

router.post('/login',async(req,res)=>{

    // const saltPassward=await bcrypt.genSalt(10)
    // const securePassward=await bcrypt.hash(req.body.passward,saltPassward)

    const signedInuser=new signInTempletCopy({
        email: req.body.email,
        passward: req.body.passward,
    });
    signedInuser.save()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })

});

module.exports=router;





// const bcrypt=require("bcrypt")
// const saltPassward=await bcrypt.genSalt(10)
// const securePassward=await bcrypt.hash(req.body.passward,saltPassward)