const port=4000;
const express=require('express')
const app=express()
const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const multer=require('multer')
const path=require('path')
const cors=require('cors');
const { log } = require('console');
const {product,user}=require('./db')



app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('express running');
})

app.get('/login')
//image storage engine

const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload=multer({storage:storage})
//creating uploadend point
app.use('/images',express.static('upload/images'))

app.post('/upload',upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//creating user
app.post("/signup",async(req,res)=>{
    let check =await user.findOne({email:req.body.email})
    if(check){
        return res.status(400).json({Success:false,erroe:"user already existing"})
    }
    let cart={};
    for (let i = 0; i < 300; i++) {
        cart[i]=0;
    }
    await user.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })
    const data={
        user:{
            id:user.id,
        }
    }
    const token=jwt.sign(data,'secret_com');
    res.json({
        success:true,
        
        token
    })
})
app.post('/login',async(req,res)=>{
    let user=await user.findOne({email:req.body.email});
    if(user){
        const pass=req.body.password==user.password;
        if(pass){
            const data={
                user:{
                    id:user.id
                }
                
            }
            const token=jwt.sign(data,'secret_com')
            res.json({
                success:true,token
            })
        }
        else{
            res.json({
                sucess:false,
                msg:"invalid details"
            })
        }
       
    }
    else{
        res.json({
            sucess:false,
            msg:"invalid details"
        })
    }
    
})



app.post("/addproduct",async(req,res)=>{
    let products=await product.find({});
    let id;
    if(products.length>0){
        let last_product_array=products.slice(-1);
        let last_product=last_product_array[0];
        id=last_product.id+1
    }
    else{id=1;}


await product.create({
    id:id,
    name:req.body.name,
    image:req.body.image,
    category:req.body.category,
    new_price:req.body.new_price,
    old_price:req.body.old_price,
});

console.log('saved');
res.json({
    success:true,
    name:req.body.name,
})
})

//delete product
app.delete('/removeproduct',async (req,res)=>{
await product.findOneAndDelete({id:req.body.id});
console.log('removed');
res.json({
    success:1,
    name:req.body.name,
})
})


//get all products
app.get('/allproducts',async (req,res)=>{
    let products=await product.find({})
    console.log('all products fetched');
    res.send(products);
    
});


app.listen(port,(error)=>{
    if(!error){
        console.log('server running successfully');
    }
    else{
        console.log(error)
    }
})
